<!-- 
    Formulario de alta de senlleiras
 -->
<template>
    <form
        id="senlleiras"
        method="post"
        enctype="multipart/form-data"
        class="senlleiras container mt-3"
        @submit.prevent="submit"
    >
        <header>
            <h2 class="display-6">Senlleira</h2>
        </header>
        <!-- fieldset Datos de la planta: nombre científico -->
        <datos-arbore :form="form"></datos-arbore>
        <!-- fieldset Ubicación -->
        <fieldset class="card p-3 mb-3">
            <legend>Ubicación</legend>
            <ul class="fields g-2 row">
                <li class="field col-auto">
                    <label class="form-label required" for="lugar">Lugar, rúa, avenida</label>
                       <span data-set="Campo obligatorio" class="text-danger">*</span>
                    <input
                        placeholder="nome do lugar"
                        class="form-control"
                        required
                        type="text"
                        v-model.trim="form.lugar"
                        name="lugar"
                        id="lugar"
                    /> 
                    <div
                v-if="!form.lugar.length"
                class="alert alert-danger m-3"
                role="alert"
            >Debe escoller un lugar, rúa ou avenida</div>                
                </li>
            </ul>
            <ul class="fields g-2 row">
                <li class="field col">
                    <label class="form-label" for="concello">Concello</label>
                    <input
                        placeholder="nome do concello"
                        class="form-control"
                        type="text"
                        v-model.trim="form.concello"
                        name="concello"
                        id="concello"
                    />
                </li>
                <li class="field col">
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
                    <hr class="m-3">
                    <the-geolocation :location="form.location"></the-geolocation>
                </li>
            </ul>
        </fieldset>
         <!--  fieldset Motivacion -->
         <!-- {{form}} -->
        <fieldset class="card p-3 mb-3">
            <legend>Motivo pola elección da árbore</legend>
            <ul class="fields g-2 row motivo-arbol">
                 <li class="field col">
                    <input 
                         type="checkbox" 
                         v-model="form.destacaAntiguedad"
                         name="destacaAntiguedad" 
                         id="destacaAntiguedad" 
                    />&nbsp;
                    <label class="form-label" for="destacaAntiguedad">Antigüidade</label> 
                </li> 
                 <li class="field col">
                    <input 
                         type="checkbox" 
                         v-model="form.destacaTamano"
                         name="destacaTamano" 
                         id="destacaTamano" 
                    />&nbsp;
                    <label class="form-label" for="destacaTamano">Tamaño da árbore</label> 
                </li>
                 <li class="field col">
                    <input 
                         type="checkbox" 
                         v-model="form.destacaSituacion"
                         name="destacaSituacion" 
                         id="destacaSituacion" 
                    />&nbsp;
                    <label class="form-label" for="destacaSituacion">Situación da árbore</label> 
                </li>
                 <li class="field col">
                    <input 
                         type="checkbox" 
                         v-model="form.destacaContexto" 
                         name="destacaContexto" 
                         id="destacaContexto" 
                    />&nbsp;
                    <label class="form-label" for="destacaContexto">Contexto histórico</label> 
                </li>
            </ul>
        </fieldset>
        <fieldset class="card p-3 mb-3">
            <legend>Datos persoais</legend>
            <div class="input-group mb-3">
                <span class="input-group-text">Nome e apelidos</span>
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
                <span class="input-group-text required" id="correo">
                    Correo electrónico
                    <span data-set="Campo obligatorio" class="text-danger">*</span>
                </span>
                <input
                    type="email"
                    required
                    class="form-control"
                    placeholder="Su correo"
                    aria-label="Su correo"
                    aria-describedby="correo"
                    v-model.trim="form.email"
                />               
            </div>
             <div
                v-if="!form.email.length"
                class="alert alert-danger m-3"
                role="alert"
            >Debe poñer un correo electrónico</div>
        </fieldset>
        <fieldset class="card p-3 mb-3">
            <legend>Historias, lendas e curiosidades</legend>
            <div class="input-group mb-2">
                <textarea
                    placeholder="Lo que hace importante este árbol es..."
                    v-model.trim="form.usosCuriosidades"
                    class="form-control"
                    aria-label="With textarea"
                    rows = "5"
                    cols="40"
                ></textarea>
            </div>
        </fieldset>
        <fieldset class="card p-3 mb-3">
            <legend>Outros datos</legend>
            <div class="input-group mb-2">
                <textarea
                    placeholder="Tus comentarios"
                    v-model.trim="form.comentarios"
                    class="form-control"
                    aria-label="With textarea"
                    rows = "3"
                    cols = "40"
                ></textarea>
            </div>
        </fieldset>
        <!-- fieldset images -->
        <fieldset-images></fieldset-images>
        <!-- Controles de envío de formulario -->
        <div class="d-grid mb-5 gap-2 col-6 mx-auto">
            <input type="hidden" v-model="form.specie" />
            <input type="hidden" v-model="form.genus" />
            <button :disabled="btnDisabled" class="btn btn-primary">
                <the-loader :loading="loaderSave"></the-loader>
                Gardar
            </button>
            <span v-if="inserted">Senlleira insertada de forma correcta. Gracias pola sua colaboración</span>
        </div>
        <!-- <pre>{{imagenesArray}}</pre>
    {{errores}} -->
    </form>
    
</template>

<script setup>
import {subirImagenes, errores,imagenesArray} from '@/hooks/imageUploader.hook';//hook tratamiento de imágenes
import { ref, computed, provide } from 'vue';
import { useStore } from 'vuex';
import DatosArbore from '@/components/senlleira-components/form/DatosArbore.vue';
import FieldsetImages from "@/components/senlleira-components/form/FieldsetImages.vue";
import TheGeolocation from '@/components/senlleira-components/TheGeolocation.vue';
import TheLoader from "@/components/TheLoader.vue";

//Accedemos al Store de Vuex
const store = useStore();

//Variables y constantes
const loaderSave = ref(false);//Loader temporal mientras se registra la nueva senlleira
const inserted = ref(false);//Si es insertado de forma correcta una senlleira esta variable mostrará un mensaje
const form = computed(() => store.state.senlleiras.senlleira);//Generamos campos del formulario a partir de lo cargado del objeto senlleria del store


/**
 * Loader del selector de especies. Se llama de forma asíncrona por tanto es necesario esperar su carga. Posteriormente se lo pasaremos al componente ScientificName.vue
 */
const loaderSpecies = ref(false);
provide('loaderSpecies',loaderSpecies);




//Ciclo de vida
//onCreated. Reseteamos el formulario por si acaso tiene datos
store.dispatch('senlleiras/resetSenlleira');


//Métodos
/**
 * Para desactivar el botón varias consideraciones
 * Campos latitud, longitud y nombre del árbol cubiertos
 * Cargado todas las especies del selector
 */
const btnDisabled = computed(() => {
    const expReg = /^-?\d+\.\d+$/;
    const expRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //console.log(expReg.test(form.value.location.latitude))
    return !expReg.test(form.value.location.latitude) || !expReg.test(form.value.location.longitude) || !expRegEmail.test(form.value.email) || !form.value.nombreReferencia.length || !form.value.lugar.length || !form.value.email.length || loaderSpecies.value || errores.errorImg
});


/**
 * Validaremos el tamaño de imágenes por si alguno se pasa y si todo ok subimos
 */
const submit = async () => {
    const id = `sen-${Date.now()}`;//Creación del ID
    if (!errores.errorImg) {
        try {
            loaderSave.value = true;//Cargamos el loader
            try {
                await subirImagenes(id); //este se haya en  @/hook/imageUploader.hook
            } catch (error) {
                console.log(error);
            }
            form.value.id = id;//Asignamos el id para almacenar en Realtime Database
            await store.dispatch('senlleiras/insertSenlleira', form.value);
            inserted.value = true;
            imagenesArray.splice(0,imagenesArray.length);//Eliminando los elementos del array
            window.setTimeout(() => {
                inserted.value = false;//Esto mostrará un mensaje al usuario luego se borrará a los 10 seg               
            }, 10000);
        } catch (error) {
            console.log("EditView.vue --> Submit()", error);
        } finally {
            loaderSave.value = false;//Quitamos el loader
        }
    }
}
</script>

<style lang="scss">
@import url(../../../assets/scss/solicitud-senlleira.scss);
</style>