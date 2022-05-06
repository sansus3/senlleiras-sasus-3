<template>
    <fieldset class="card p-3 mb-3">
        <legend>Datos da arbore</legend>
        <div 
            v-if="fetchError"
            class="msg-error"
            role="alert">
            Problema de conexión. Comprobe a súa rede
        </div>
        <ul class="fields row g-2">
            <li class="specie field col-auto">
                 <div class="loader" v-if="loaderSpecies">
                    <the-loader :loading="loaderSpecies" sizecircle="1em" foreground="lightgreen"></the-loader>
                </div>
                <div class="field">
                    <label class="form-label required" for="especie">
                        Nome científico
                        <span data-set="Campo obligatorio" class="text-danger">*</span>
                    </label>
                    <select
                        
                        v-model="form.idSpecie"
                        name="especie"
                        id="especie"
                        class="form-select"
                        required
                    >
                        <optgroup label="Sen confirmar">
                            <option value="null">Outra</option>
                        </optgroup>
                        <optgroup label="Especies">
                            <option
                                v-for="item in species"
                                :key="item.id"
                                :value="item.id"
                            >{{ item.genus }} {{ item.specie }}</option>
                        </optgroup>
                    </select>
                </div>
                <div class="field">
                    <label class="form-label" for="nombreComun">Nome común</label>
                    <span data-set="Campo obligatorio" class="text-danger">*</span>
                    <select
                        v-model="form.idSpecie"
                        
                        name="nombreComun"
                        id="nombreComun"
                        class="form-select"
                    >
                        <optgroup label="Sen confirmar">
                            <option value="null">Outra</option>
                        </optgroup>
                        <optgroup label="Nomes comúns">
                            <option
                                v-for="item in names"
                                :key="item.id"
                                :value="item.id"
                            >{{ item.names.join() }}</option>
                        </optgroup>
                    </select>
                    <div
                        v-if="!form.idSpecie"
                        class="alert alert-danger m-3"
                        role="alert"
                    >Debe escoller o nome científico o nome común</div>
                    <hr class="m-3" />
                </div>
            </li>
            <li class="field col-auto">
                <label class="form-label required" for="nombreReferencia">
                    Nome de referencia
                    <span data-set="Campo obligatorio" class="text-danger">*</span>
                </label>
                <input
                    class="form-control"
                    placeholder="O seu nome aquí"
                    required
                    type="text"
                    v-model.trim="form.nombreReferencia"
                    name="nombreReferencia"
                    id="nombreReferencia"
                />
                <div
                    v-if="!form.nombreReferencia.length"
                    class="alert alert-danger m-3"
                    role="alert"
                >Debe escoller o nome de referencia</div>
                <hr class="m-3" />
            </li>
        </ul>

        <!-- Altura / diametro / Edad estimada -->
        <ul class="fields row g-2">
            <li class="field col">
                <label for="altura" class="form-label">Altura (metros)</label>
                <input
                    id="altura"
                    name="altura"
                    v-model.number="form.altura"
                    type="number"
                    step="any"
                    placeholder="31"
                    class="field__control form-control"
                />
            </li>
            <li class="field col">
                <label for="diametroCopa" class="form-label">Diametro da copa (metros)</label>
                <input
                    id="diametroCopa"
                    name="diametroCopa"
                    v-model.number="form.diametroCopa"
                    type="number"
                    step="any"
                    placeholder="10,5"
                    class="field__control form-control"
                />
            </li>
            <li class="field col">
                <label for="perimetroTronco" class="form-label">Perímetro do tronco (metros)</label>
                <input
                    id="perimetroTronco"
                    name="perimetroTronco"
                    v-model.number="form.perimetroTronco"
                    type="number"
                    step="any"
                    placeholder="10,5"
                    class="field__control form-control"
                />
            </li>
            <li class="field col">
                <label for="edadEstimada" class="form-label">Idade estimada en anos</label>
                <input
                    id="edadEstimada"
                    name="edadEstimada"
                    v-model.number="form.edadEstimada"
                    type="number"
                    placeholder="20"
                    class="field__control form-control"
                />
            </li>
        </ul>
    </fieldset>
</template>

<script setup>
//Dependencias
import { defineProps, onMounted, computed, ref, inject } from 'vue';
import { useStore } from 'vuex';
import TheLoader from '../../TheLoader.vue';
//Carga del store
const store = useStore();
const fetchError = ref(false);
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
        console.log('fetch fallo----->',error);
        fetchError.value=true;
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
const names = computed(() => store.getters['species/getSpeciesNamesSort']);
</script>