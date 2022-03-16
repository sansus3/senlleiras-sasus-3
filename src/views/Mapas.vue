<template>
  
  <div class="d-flex text-center" style="height: 20vh">
    <h1 class="title">Catálogo</h1>
    <TheGoogleMap :location="senlleiras" />
  </div>
</template>

<script setup>
//Dependencias
import TheGoogleMap from "../components/googlemaps/TheGoogleMap.vue";
import { useStore } from "vuex";
import { onMounted, ref, computed, reactive, provide } from "vue";

const coords = ref({
  latitude: 42.87756680296138,
  longitude: -8.550073735931141,
});

const store = useStore();

const loading = ref(false);
/**
 * Obtenemos el catálogo de las senlleiras filtrados
 */
const senlleiras = computed(() => {
  let data = store.state.senlleiras.senlleirasFiltradas;
  let array = [];
  for (let i = 0, tam = data.length; i < tam; i++) {
    array.push({
      id: data[i].id,
      tooltip: data[i].nombreReferencia,
      latLong: Object.values(data[i].location),
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
    store.dispatch("senlleiras/listSenlleiras");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});

provide("coords", coords);
</script>
