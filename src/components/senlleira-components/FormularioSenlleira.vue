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
                    v-model.trim="senlleira.nombreComun"
                    name="nombrecomun"
                    id="nombrecomun"
                />
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
                <the-uploader  @gestionarImagenes="asignarImagenes"></the-uploader>
            </li>
        </ul>
        <button class="btn btn-primary" :disabled="btnDisabled">Submit</button>              
    </form>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import TheGeolocation from '../TheGeolocation.vue';
import TheUploader from '../TheUploader.vue';

//Accedemos al Store de Vuex
const store = useStore();
//Campos Imágnes
let images = reactive({});

//Ciclo de vida
onMounted(() => {
    store.dispatch('setSpecies');
});

//Para obtener los datos del store hay que utilizar los métodos compudados
const species = computed(() => {
    return store.getters.getSpecieSort;
});

const senlleira = computed(() => {
    return store.state.senlleira;
});

/**
Activación del botón
*/
const btnDisabled = computed(() => {
    const expReg = /^-?\d+\.\d+$/;
    //console.log(expReg.test(senlleira.value.location.latitude))
    return !expReg.test(senlleira.value.location.latitude) || !expReg.test(senlleira.value.location.longitude) || !senlleira.value.nombreComun.length || !Object.keys(images).length
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
Rescatamos las imágenes del componente hijo seleccionadas
 */
const asignarImagenes = (data) => {
    Object.assign(images, data)
}

/**
 * Validaremos el tamaño de imágenes por si alguno se pasa y si todo ok subimos
 */
const submit = () => {
    console.log(images)
    //store.dispatch('insertSenlleira', senlleira.value)
}
</script>