<!-- 
    Vista donde mostramos el catálogo de senlleiras.
 -->
<template>
  <!-- <div class="table-container">
        <table role="table">           
            thead Componente
            <catalogo-cabecera></catalogo-cabecera>
            tbody
            <tbody role="rowgroup">
                <tr class="row" v-for="(item, index) in senlleiras" :key="item.id">
                    <td :data-set="index+1"><span class="indice">{{ index + 1 }}</span></td>
                    <td role="cell" data-th="Género y especie">
                        <strong>{{ item.genus }}</strong>
                        {{ item.specie }}
                    </td>
                    <td rolle="cell" data-th="img">{{}}</td>
                    <td role="cell" data-th="Nombre común">{{ item.nombreComun }}</td>
                    <td role="cell" data-th="Nombre de referencia">{{ item.nombreReferencia }}</td>
                    <td role="cell" data-th="Lugar">{{ item.lugar }}</td>
                    <td role="cell" data-th="Opciones">
                        <router-link
                            data-titulo="Mostrar"
                            title="Máis info"
                            :to="{
                                name: 'Senlleira',
                                params: {
                                    id: item.id
                                }
                            }"
                        >👈</router-link>
                        <a title="Xeolocalización" target="blank" :href="`https://maps.google.com/?q=${item.location.latitude},${item.location.longitude}`">
                        🎯
                        </a>
                    </td>
                </tr>
            </tbody>
            <caption v-if="fetchError">
                <div class="msg-error" role="alert">Problema de conexión. Comprobe a súa rede</div>
            </caption> 
        </table>
        <div style="text-align: center;">
            <the-loader foreground="green" :loading="loading"></the-loader>
        </div>
    </div> -->
  <!-- <button @click="nextGo(senlleiras.slice(-1))">Siguiente</button> -->
  <span class="background-color"></span>
  <div class="catalogo-section-component">

        <router-link
          class="arbol-catalogo-element"
          data-titulo="Mostrar"
          title="Máis info"
          :to="{
            name: 'Senlleira',
            params: {
              id: item.id,
            },
          }"
          v-for="item in senlleiras"
          :key="item.id"
        >
          <div class="content-img">
            <img
              class="arbol-img"
              src="@/assets/gallery/senlleiras_2.jpg"
              alt="sdfdf"
            />
          </div>
          <div class="arbol-info">
            <span class="arbol"><i class="fa-brands fa-pagelines"></i></span>
            <h3>{{ item.nombreComun }}</h3>
            <span class="lugar"><i class="fa-solid fa-location-dot"></i></span>
            <h4>{{ item.lugar }}</h4>
          </div>
        </router-link>
  </div>
</template>

<script setup>
//Dependencias
import TheLoader from "@/components/TheLoader.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import CatalogoCabecera from "@/components/senlleira-components/CatalogoCabecera.vue";
//Cargamos el store
const store = useStore();

/**
 * Obtenemos el catálogo de las senlleiras filtrados
 */
const senlleiras = computed(() => {
  return store.state.senlleiras.senlleirasFiltradas;
});
const loading = ref(false); //Variable que carga un loader en función de la carga asíncrona de los datos
const fetchError = ref(false);

/**
 * Lanzamos la acción vuex/store para obtener los datos
 */
(async () => {
  try {
    loading.value = true;
    //Este await es importante para poder controlar el error del catch
    await store.dispatch("senlleiras/listSenlleiras");
  } catch (error) {
    console.log("Catalogo.vue-------->", error);
    fetchError.value = true;
  } finally {
    loading.value = false;
  }
})();
</script>

<style scoped lang="scss">
// @import url(../../assets/scss/table.scss);

.background-color {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: white;
}
.catalogo-section-component {
  display: grid;
  grid-template-columns: repeat(2, 175px);
  width: 100%;
  justify-content: center;
  margin: 1rem 0;
  gap: 0.5rem;
}
.arbol-catalogo-element {
  width: 175px;
  display: grid;
  overflow: hidden;
  padding: 0.2rem;
  border-radius: 3px;
  //   box-shadow: 1px 1px 4px  rgba(121, 121, 121, .7);
  border: 2px solid rgb(184, 184, 184, 0.4);
}

.arbol-catalogo-element:active {
  border: 2px solid green;
}

.content-img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.content-img img {
  display: flex;
  width: 166px;
  height: 166px;
  border-radius: 3px;
}

.arbol-catalogo-element .arbol-info {
  display: grid;
  grid-template-columns: 15px 1fr;
  overflow: hidden;
  padding: 0.2rem;
  background-color: white;
  border-top: none;
  gap: 0.1rem 0;
}
.arbol-catalogo-element .arbol-info span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.arbol-info .arbol {
  color: green;
  font-size: 1.1rem;
}
.arbol-info .lugar {
  color: rgba(49, 49, 49, 1);
  font-size: 0.8rem;
}
.arbol-catalogo-element .arbol-info h3 {
  margin: 0 0.2rem;
  font-size: 0.9rem;
  line-height: 0.9rem;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--colorprincipal);
}
.arbol-catalogo-element .arbol-info h4 {
  margin: 0 0.2rem;
  font-size: 0.7rem;
  font-weight: 0.7rem;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: black;
  font-weight: 500;
}
</style>
