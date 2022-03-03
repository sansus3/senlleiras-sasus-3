<template>
    <form
        method="post"
        enctype="multipart/form-data"
        class="senlleiras container mt-3"
        @submit.prevent="submit"
    >
        <header>
            <h2 class="display-6">Senlleira</h2>
        </header>
        <fieldset class="card p-3 mb-3">
            <legend>Nombre de la planta</legend>
            <ul class="fields row g-2">
                <li class="field col-auto">
                    <label class="form-label required" for="especie">
                        <span
                            v-if="loaderSpecies"
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span> Nombre científico
                        <span data-set="Campo obligatorio" class="text-danger">*</span>
                    </label>
                    <select
                        @change="obtenerNombreComun"
                        v-model="form.idSpecie"
                        name="especie"
                        id="especie"
                        class="form-select"
                        required
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
                <li class="field col-auto">
                    <label class="form-label" for="nombrecomun">Nombre común</label>
                    <input
                        placeholder="Su nombre aquí"
                        class="form-control"
                        type="text"
                        aria-label="Disabled input"
                        disabled
                        v-model.trim="form.nombreComun"
                        name="nombrecomun"
                        id="nombrecomun"
                    />
                </li>
                <li class="field col">
                    <label class="form-label required" for="nombrearbol">
                        Nombre de referencia
                        <span data-set="Campo obligatorio" class="text-danger">*</span>
                    </label>
                    <input
                        class="form-control"
                        placeholder="Su nombre aquí"
                        required
                        type="text"
                        v-model.trim="form.nombreReferencia"
                        name="nombrearbol"
                        id="nombrearbol"
                    />
                </li>
            </ul>
        </fieldset>
        <fieldset class="card p-3 mb-3">
            <legend>Ubicación</legend>
            <ul class="fields g-2 row">
                <li class="field col">
                    <label class="form-label" for="lugar">Lugar, calle, avenida</label>
                    <input
                        placeholder="Su nombre aquí"
                        class="form-control"
                        type="text"
                        v-model.trim="form.lugar"
                        name="lugar"
                        id="lugar"
                    />
                </li>
                <li class="field col">
                    <label class="form-label" for="concello">Concello</label>
                    <input
                        placeholder="Su nombre aquí"
                        class="form-control"
                        type="text"
                        v-model.trim="form.concello"
                        name="concello"
                        id="concello"
                    />
                </li>
                <li class="field col-auto">
                    <label class="form-label" for="Provincia">Provincia</label>
                    <select
                        disabled
                        class="form-select"
                        v-model="form.provincia"
                        name="Provincia"
                        id="Provincia"
                    >
                        <option selected value="A Coruña">A Coruña</option>
                        <option value="Lugo">Lugo</option>
                        <option value="Ourense">Ourense</option>
                        <option value="Pontevedra">Pontevedra</option>
                    </select>
                </li>
            </ul>
            <ul class="fields g-2 row">
                <li class="field">
                    <the-geolocation :location="form.location"></the-geolocation>
                </li>
            </ul>
        </fieldset>
        <fieldset class="card p-3 mb-3">
            <legend>Datos personales</legend>
            <div class="input-group mb-3">
                <span class="input-group-text">Nombre y apellidos</span>
                <input
                    v-model.trim="form.nombrePila"
                    type="text"
                    aria-label="First name"
                    class="form-control"
                />
                <input
                    v-model.trim="form.apellidos"
                    type="text"
                    aria-label="Last name"
                    class="form-control"
                />
            </div>
            <div class="input-group mb-3">
                <input
                    type="email"
                    required
                    class="form-control"
                    placeholder="Su correo"
                    aria-label="Su correo"
                    aria-describedby="correo"
                    v-model.trim="form.email"
                />
                <span class="input-group-text required" id="correo">
                    Correo electrónico
                    <span data-set="Campo obligatorio" class="text-danger">*</span>
                </span>
            </div>
        </fieldset>
        <fieldset class="card p-3 mb-3">
            <legend>Otros datos</legend>
            <div class="input-group mb-2">
                <span class="input-group-text">Tus comentarios</span>
                <textarea
                    v-model.trim="form.comentarios"
                    class="form-control"
                    aria-label="With textarea"
                ></textarea>
            </div>
        </fieldset>
        <!-- fieldset images -->
        <fieldset-images></fieldset-images>
        <div class="d-grid mb-5 gap-2 col-6 mx-auto">
            <input type="hidden" v-model="form.specie" />
            <input type="hidden" v-model="form.genus" />
            <button :disabled="btnDisabled" class="btn btn-primary">
                <the-loader :loading="loaderSave"></the-loader>
                Guardar
            </button>
            <span v-if="inserted">Senlleira insertada de forma correcta. Gracias por su colaboración</span>
        </div>
    </form>
</template>

<script setup>
import {subirImagenes} from '@/hooks/imageUploader';
import { ref, onMounted, computed, reactive, provide } from 'vue';
import { useStore } from 'vuex';
import FieldsetImages from "@/components/senlleira-components/form/FieldsetImages.vue";
import TheGeolocation from '@/components/senlleira-components/TheGeolocation.vue';
import TheLoader from "@/components/TheLoader.vue";

//Accedemos al Store de Vuex
const store = useStore();
//Variables y constantes
const loaderSpecies = ref(false);//Loader que espera a que se cargue el selector de especies
const loaderSave = ref(false);//En espera a guardar el formulario
const inserted = ref(false);//Si es insertado de forma correcta una senlleira esta variable mostrará un mensaje
const form = computed(() => store.state.senlleiras.senlleira);//Generamos campos del formulario a partir de lo cargado del objeto senlleria del store
const species = computed(() => store.state.species.speciesFilter);//Obtenemos las especies para el selector html y ordenados por género
const images = reactive({
    uno: null,
    dos: null,
    tres: null,
});
/**
 * Objetos de imágenes conseguido del input type file y capturados del componente TheUploader.vue
 */
const errores = reactive({ //gestión de errores de imagen
    errorImg: false,
    errorImgStr: '',
    maxsize: 750000
});
/**
 * Pasaremos estos datos a componentes hijos
 */
provide('images', images);
provide('errores', errores);
/**
 * Comprobamos si el primer elemento input tipo file se encuentra cargado
 */
const imagesLoader = computed(() => {
    return images.uno !== null && images["uno"].size <= errores.maxsize
});//Comprobamos que esté cargada la primera imágen



//Ciclo de vida
onMounted(async () => {
    try {
        loaderSpecies.value = true;
        //Cargamos el listado de especies (nombre científico y común) de las especies
        await store.dispatch('species/getListadoEspecies');
        //Los ordenamos alfabéticamente por el género
        store.dispatch('species/setSpeciesGenusSort')
        store.dispatch('senlleiras/resetSenlleira');//cada vez que entre en esta sección reseteamos los datos de senlleiras
    } catch (error) {
        console.log(error);
    } finally {
        loaderSpecies.value = false;
    }
});


//Métodos
/**
 * Select del html par buscar en el array de Especies el nombre común y no científico del mismo
 * @param {Object} e Evento
 */
const obtenerNombreComun = e => {
    form.value.nombreComun = '';
    const specie = species.value.find(element => element.id === e.target.value);
    //console.log(specie)
    if (specie) {
        form.value.nombreComun = specie.names.join();
        form.value.genus = specie.genus;
        form.value.specie = specie.specie;
    } else {
        form.value.nombreComun = '';
        form.value.genus = '';
        form.value.specie = '';
    }
}

/**
 * Para desactivar el botón varias consideraciones
 * Campos latitud, longitud y nombre del árbol cubiertos
 * Cargado todas las especies del selector
 */
const btnDisabled = computed(() => {
    const expReg = /^-?\d+\.\d+$/;
    const expRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //console.log(expReg.test(form.value.location.latitude))
    return !expReg.test(form.value.location.latitude) || !expReg.test(form.value.location.longitude) || !expRegEmail.test(form.value.email) || !form.value.nombreReferencia.length || !form.value.email.length || loaderSpecies.value || !imagesLoader.value || errores.errorImg
});


/**
 * Validaremos el tamaño de imágenes por si alguno se pasa y si todo ok subimos
 */
const submit = async () => {
    const id = `sen-${Date.now()}`;
    if (!errores.errorImg) {
        try {
            loaderSave.value = true;
            try {
                await subirImagenes(id,images); //este es un hook
            } catch (error) {
                console.log(error);
            }
            form.value.id = id;
            await store.dispatch('senlleiras/insertSenlleira', form.value);
            inserted.value = true;
            window.setTimeout(() => {
                inserted.value = false;
            }, 10000);
        } catch (error) {
            console.log("EditView.vue --> Submit()", error);
        } finally {
            loaderSave.value = false;
        }
    }
}
</script>

<style lang="scss">
@import url(../../../assets/scss/form.scss);
</style>