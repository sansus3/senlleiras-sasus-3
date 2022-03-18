<template>
  <div class="grid d-flex text-center" style="height: 20vh">
    <div class="map">
      <google-maps></google-maps>
      <nav class="enlaces">
      <button class="btn btn-primary" @click="show=!show">{{show?'Ocultar':'Mostrar'}} nomes</button>
      <ul v-if="show">
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
    </div>
        
  </div>
</template>

<script setup>
//Dependencias
import GoogleMaps from '@/components/maps/GoogleMaps.vue';
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { ref } from 'vue';

const store = useStore();
const show = ref(false);


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
//const data = store.getters['senlleiras/getSenlleirasFiltradas'];//Sin reactividad
const data = computed(() => store.getters['senlleiras/getSenlleirasFiltradas']);
</script>

<style scoped lang="scss">
.map-title{
  text-align: center;
}
.map{
  position: relative;
}
.enlaces{
  position: absolute;
  z-index: 9999;
  left: 0;
  top: 0;
  background-color: rgba(161, 159, 159,0);
}
.enlaces ul{
  display: flex;
  gap: .1rem;
  row-gap: .2rem;
  flex-wrap: wrap;
}
.enlaces li{
  background-color: rgba(255, 255, 255,.6);
  border-radius: .3rem;
}
.enlaces a{
  display: block;
  font-size: clamp(.8rem, 1.2vw, 0.8rem);
  color: var(--colorPrincipal)
}
</style>