<template>
    <fieldset class="card p-3 mb-3">
        <legend>Nombre de la planta</legend>
        <ul class="fields row g-2">
            <li class="field col-auto">
                <label class="form-label required" for="especie">
                    Nombre científico
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
                <the-loader :loading="loaderSpecies" sizecircle="1em" foreground="lightgreen"></the-loader>
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
</template>

<script setup>
//Dependencias
import { defineProps,onMounted,computed,inject } from 'vue';
import { useStore } from 'vuex';
import TheLoader from '../../TheLoader.vue';
//Carga del store
const store = useStore();
const loaderSpecies = inject('loaderSpecies');
//Ciclo de vida
onMounted(async () => {
    try {
        loaderSpecies.value = true;
        //Cargamos el listado de especies (nombre científico y común) de las especies
        await store.dispatch('species/getListadoEspecies');
        //Los ordenamos alfabéticamente por el género
        store.dispatch('species/setSpeciesGenusSort');
    } catch (error) {
        console.log(error);
    } finally {
        loaderSpecies.value = false;
    }
});

const props = defineProps([
    /**
    Object. Formulario de especies
     */
    'form'
]);

/**
 * Obtenemos las especies para el selector html y ordenados por género
 */
const species = computed(() => store.state.species.speciesFilter);

/**
* Select del html par buscar en el array de Especies el nombre común y no científico del mismo
* @param {Object} e Evento
*/
const obtenerNombreComun = e => {
    props.form.nombreComun = '';
    const specie = species.value.find(element => element.id === e.target.value);
    //console.log(specie)
    if (specie) {
        props.form.nombreComun = specie.names.join();
        props.form.genus = specie.genus;
        props.form.specie = specie.specie;
    } else {
        props.form.nombreComun = '';
        props.form.genus = '';
        props.form.specie = '';
    }
}
</script>