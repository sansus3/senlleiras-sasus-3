<template>
    <form class="senlleiras" @submit.prevent>
        <ul class="fields">
            <li class="field">
                <label for="especie">Especie</label>
                <select v-model="especie" name="especie" id="especie">
                    <option value="Desconocida"></option>
                    <option 
                    v-for="item in species" 
                    :key="item.id" 
                    :value="item.id">
                    {{item.genus}} {{item.specie}}
                    </option>
                </select>
            </li>
        </ul>        
    </form>
</template>

<script setup>
import { onMounted,computed,ref } from 'vue';
import { useStore } from 'vuex';
//Accedemos al Store de Vuex
const store = useStore();

const especie = ref('');

//Ciclo de vida
onMounted(()=>{
    store.dispatch('setSpecies');
});

//Para obtener los datos del store hay que utilizar los métodos compudados
const species = computed(()=>{
    return store.getters.getSpecieSort;
});

//obtenomos los datos

</script>