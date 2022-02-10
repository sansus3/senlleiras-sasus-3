<template>
    <form class="senlleiras" @submit.prevent="submit">
        <ul class="fields">
            <li class="field">
                <label for="especie">Especie</label>
                <select @change="obtenerNombreComun" v-model="senlleira.idSpecie" name="especie" id="especie">
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
        </ul>
        <button :disabled="btnDisabled">Submit</button>
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

const senlleira = computed(()=>{
    return store.state.senlleira;
});


const btnDisabled = computed(()=>{
    const expReg = /^-?\d+\.\d+$/;
    //console.log(expReg.test(senlleira.value.location.latitude))
    return !expReg.test(senlleira.value.location.latitude) || !expReg.test(senlleira.value.location.longitude) || !senlleira.value.nombreComun.length
});



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

const submit = () => {
    store.dispatch('insertSenlleira',senlleira.value)    
}
</script>