<template>
    <form method="post" enctype="multipart/form-data" class="senlleiras" @submit.prevent="submit">
        <ul class="fields">
            <li class="field">
                <label for="especie">Especie</label>
                <select
                    @change="obtenerNombreComun"
                    v-model="senlleira.idSpecie"
                    name="especie"
                    id="especie"
                >
                    <optgroup label="Sin confirmar">
                        <option value="null">Desconocida</option>
                    </optgroup>
                    <optgroup label="Especies">
                        <option
                            v-for="item in species"
                            :key="item.id"
                            :value="item.id"
                        >{{ item.genus }} {{ item.specie }}</option>
                    </optgroup>
                </select>
            </li>
            <li class="field">
                <label for="nombrecomun">Nombre común</label>
                <input
                    placeholder="Su nombre aquí"
                    type="text"
                    disabled
                    v-model.trim="senlleira.nombreComun"
                    name="nombrecomun"
                    id="nombrecomun"
                />
            </li>
            <li class="field">
                <label for="nombrearbol">Nombre de referencia</label>
                <input
                    placeholder="Su nombre aquí"
                    required
                    type="text"
                    v-model.trim="senlleira.nombreArbol"
                    name="nombrearbol"
                    id="nombrearbol"
                />
            </li>
            <li class="field">
                <label for="lugar">Lugar</label>
                <input
                    placeholder="Su nombre aquí"
                    type="text"
                    v-model.trim="senlleira.lugar"
                    name="lugar"
                    id="lugar"
                />
            </li>
            <li class="field">
                <label for="Provincia">Provincia</label>
                <select
                    v-model="senlleira.provincia"
                    name="Provincia"
                    id="Provincia"
                >
                <option selected value="A Coruña">A Coruña</option>
                <option value="Lugo">Lugo</option>
                <option value="Ourense">Ourense</option>
                <option value="Pontevedra">Pontevedra</option>
                </select>
            </li>
            <li class="field">
                <the-geolocation :location="senlleira.location"></the-geolocation>
            </li>
            <li class="field">
                <label for="comentarios">Comentarios</label>
                <textarea
                    placeholder="Su texto aquí"
                    v-model.trim="senlleira.comentarios"
                    name="comentarios"
                    id="comentarios"
                ></textarea>
            </li>
            <li class="field">
                <the-uploader @gestionarImagenes="asignarImagenes"></the-uploader>
                <div v-if="errores.errorImg" class="alert alert-danger" role="alert">{{ errores.errorImgStr }}</div>
            </li>
        </ul>
        <button class="btn btn-primary" :disabled="btnDisabled">Submit</button>
    </form>
</template>

<script setup>
import { storage } from "@/hooks/firebase";//storage de firebase para almacenar ficheros
import { ref, uploadBytes } from "firebase/storage";
import { onMounted, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import TheGeolocation from '../TheGeolocation.vue';
import TheUploader from '../TheUploader.vue';

//Accedemos al Store de Vuex
const store = useStore();
//Campos Imágnes
let images = reactive({});
const MAXSIZE = 750000;//Tamaño máximo permitido de las imágenes
const errores = reactive({
    errorImg : false,
    errorImgStr:''
});

//Ciclo de vida
onMounted(() => {
    store.dispatch('resetSenlleira');//reseteamos el objeto del store senlleira
    store.dispatch('setSpecies'); //Cargamos el listado de especies
});

//Para obtener los datos del store hay que utilizar los métodos compudados
const species = computed(() => {
    return store.getters.getSpecieSort;
});

//Obtenems del store el objeto senlleira que utilizaremos en el v-model del formulario
const senlleira = computed(() => {
    return store.state.senlleira;
});

/**
Activación del botón
*/
const btnDisabled = computed(() => {
    const expReg = /^-?\d+\.\d+$/;
    //console.log(expReg.test(senlleira.value.location.latitude))
    return !expReg.test(senlleira.value.location.latitude) || !expReg.test(senlleira.value.location.longitude) || !senlleira.value.nombreArbol.length || !Object.keys(images).length
});


/**
 * Select del html par buscar en el array de Especies el nombre común y no científico del mismo
 * @param {Object} e Evento
 */
const obtenerNombreComun = e => {
    //console.log(e.target.value)
    //console.log(species.value)
    senlleira.value.nombreComun = '';
    const specie = species.value.find(element => element.id === e.target.value);
    if (specie) {
        senlleira.value.nombreComun = specie.names.join();
        senlleira.value.genus = specie.genus;
        senlleira.value.specie = specie.specie;
    }
}

/**
Rescatamos las imágenes del componente hijo seleccionadas y las almacenamos en el objeto images. Utilizamos este método (assign) pues mantiene la reactividad
 */
const asignarImagenes = (data) => {
    Object.assign(images, data)
}

/**
 * @description Si el formulario es validado procedemos a subir los ficheros
 * @returns {Boolean} Si la subida es correcta o no
 */
const subirImages = () => {
    //Comprobamos si hay alguna imagen que no cumple con los requistos
    for (let item in images) {
        if (images[item].size > MAXSIZE) {
            const error = `${images[item].name} excede el máximo tamaño permitido ${images[item].size}. (Máximo: ${MAXSIZE}).`;
            console.log(error);
            errores.errorImg = true;
            errores.errorImgStr = error;
            return false;
        }
    }
    //Subida de ficheros
    const regex = /\./g;
    const latitude = `${senlleira.value.location.latitude}`.replace(regex, "");
    //console.log(latitude)
    const id = `sen-${latitude}-${Math.trunc(Math.random() * 100) + 1}`;
    senlleira.value.id = id;
    for (let item in images) {
        const storageRef = ref(storage, `${id}/${images[item].name}`); //creamos una referencia
        uploadBytes(storageRef, images[item]).then((snapshot) => {
            console.log("¡Terminada la subida de ficheros!");
            
        });
    }
    return true
}

/**
 * Validaremos el tamaño de imágenes por si alguno se pasa y si todo ok subimos
 */
const submit = () => {
    if (subirImages()) {
        store.dispatch('insertSenlleira', senlleira.value)
    }
}
</script>