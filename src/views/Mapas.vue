<template>
  <div style="height: 100vh; width: 100vw;">
    <leaflet-vue :location="senlleiras" lMapHeight="100vh"></leaflet-vue>
    <!-- {{senlleiras}} -->
  </div>
</template>
<script setup>
//Dependencias
import LeafletVue from '@/components/leaflet/LeafletVue.vue';
import {useStore} from "vuex";
import { onMounted,ref,computed,reactive } from 'vue';

const store = useStore();

const loading = ref(false);
/**
 * Obtenemos el catálogo de las senlleiras filtrados
 */
const senlleiras = computed(() => {
    let data = store.state.senlleiras.senlleirasFiltradas;
    let array = [];
    for(let i=0,tam=data.length;i<tam;i++){
      array.push(
        {
          id:data[i].id,
          tooltip: data[i].nombreReferencia,
          latLong:Object.values(data[i].location),
        });
    }
    return array;
});

/**
 * Lanzamos la acción vuex/store para obtener los datos
 */
onMounted(async () => {
    try {
        loading.value = true;
        store.dispatch('senlleiras/listSenlleiras');
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }

});
</script>
