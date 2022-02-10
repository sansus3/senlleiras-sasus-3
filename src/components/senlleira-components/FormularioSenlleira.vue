<template>
    <form class="senlleiras" @submit.prevent="submit">
        <ul class="fields">
            <li class="field">
                <label for="especie">Especie</label>
                <select @change="obtenerNombreComun" v-model="especie" name="especie" id="especie">
                    <option value="Desconocida">Lo ignoro</option>
                    <option
                        v-for="item in species"
                        :key="item.id"
                        :value="item.id"
                    >{{ item.genus }} {{ item.specie }}</option>
                </select>
            </li>
            <li class="field">
                <label for="nombrecomun">Nombre común</label>
                <input
                    placeholder="Su texto aquí"
                    type="text"
                    v-model.trim="nombreComun"
                    name="nombrecomun"
                    id="nombrecomun"
                />
            </li>
            <li class="field">                
                <the-geolocation :location="location"></the-geolocation>
            </li>
            <li class="field">
                <label for="comentarios">Comentarios</label>
                <textarea
                    placeholder="Su texto aquí"
                    v-model.trim="comentarios"
                    name="comentarios"
                    id="comentarios"
                ></textarea>
            </li>
        </ul>
        <button>Submit</button>
    </form>
</template>

<script setup>
import TheGeolocation from '../TheGeolocation.vue';
import { onMounted, computed, ref, reactive } from 'vue';
import { useStore } from 'vuex';

//Accedemos al Store de Vuex
const store = useStore();
//Campos del formulario
let especie = ref('');
let nombreComun = ref('');
let comentarios = ref('');

const location = reactive({
    latitude: null,
    longitude: null
});

//Ciclo de vida
onMounted(() => {
    store.dispatch('setSpecies');
});

//Para obtener los datos del store hay que utilizar los métodos compudados
const species = computed(() => {
    return store.getters.getSpecieSort;
});

const obtenerNombreComun = e => {
    //console.log(e.target.value)
    //console.log(species.value)
    nombreComun.value = '';
    const specie = species.value.find(element => element.id === e.target.value);
    if (specie) nombreComun.value = specie.names.join();
}

const submit = () => {
    console.log(
        especie.value, nombreComun.value,location
    );
}
</script>