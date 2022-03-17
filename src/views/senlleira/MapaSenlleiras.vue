<template>
  <div class="d-flex text-center p-3" style="height: 20vh">
    <h1 class="title">Catálogo</h1>
    <nav class="enlaces">
      <ul>
        <li v-for="(item, index) in data" :key="item.id">
          <router-link
            data-titulo="Mostrar"
            :to="{
              name: 'Senlleira',
              params: {
                id: item.id
              }
            }"
          >🍳 {{ (index + 1) }} {{ item.nombreReferencia }}</router-link>
        </li>
      </ul>
    </nav>
    <google-maps></google-maps>
  </div>
</template>

<script setup>
//Dependencias
import GoogleMaps from '@/components/maps/GoogleMaps.vue';
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();


/**
 * Lanzamos la acción vuex/store para obtener los datos
 */
onMounted(async () => {
  try {
    await store.dispatch("senlleiras/listSenlleiras");
  } catch (error) {
    console.log('MapaSenllerias tiene un error', error);
  }
});

const data = computed(() => store.getters['senlleiras/getSenlleirasFiltradas']);
</script>