<template>
  <div class="grid">
    <div ref="mapDiv" style="width: 100%; height: 80vh; "></div>
    <div class="enlaces">
      <ul>
        <li v-for="(item, index) in senlleiras" :key="item.id">
          <a
            href="#"
            @click.prevent="showRoute(item.id)"
          >{{ (index + 1) }} {{ item.nombreReferencia }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
//Dependencias Vue, api de google
import { computed, ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

//Cargamos el router para enlazar los marcadores del mapa
const router = useRouter();
const store = useStore();


const props = defineProps({
  /**
   * {Object} CurrPos - Punto central  definido por una latitud y una longitud  en la que aparecerán todos los marcadores del mapas
   * @default {lat: 42.8775066,lng: -8.5489188}
   */
  currPos: {
    type: Object,
    default: () => ({ lat: 42.8775066, lng: -8.5489188 }),
  }
});



//Cargamos la APIKEY
const loader = new Loader({ apiKey: store.getters['getGoogleMapsApiKey'] });
//Esta constante se utilizará en el atributo "ref" del elemento div que aparace en el template
const mapDiv = ref(null);
//Icono del marcador
const image = './googlemaps128x128.png';
//Objeto instanciado de google.maps.Map
let map = null;

//Obtenemos todas la información de todas las senlleiras. Buscamos en el store
const senlleiras = computed(() => {
  limpiar();
  pintar();
  return store.state.senlleiras.senlleirasFiltradas
});





/**
 * @description Método que nos permite crear todos los marcadores. Como vemos un array
 */
let markers = [];
const markerLoad = () => {
  senlleiras.value.forEach((item, index) => {
    markers.push(
      new google.maps.Marker({
        position: {
          lat: Number(item.location.latitude),
          lng: Number(item.location.longitude),
        },
        map,
        label: `${index + 1}. ${item.genus} ${item.specie}`,
        animation: google.maps.Animation.DROP,
        icon: image,
      })
    );
    markers[index].addListener("click", (e) => {
      showRoute(item.id);
    });
  });
}
/**
 * @description Nos permite enrutar la senlleira hacia su ficha
 * @param {String} id - Código da árbore senlleira 
 */
const showRoute = id => {
  if (id) {
    router.push({
      path: '/arb-:id',
      name: 'Senlleira',
      params: {
        id: id
      }
    })
  }
}

const pintar = async () => {
  await loader.load();
  let index = 0;
  for (let sen in senlleiras.value) {
    const item = senlleiras.value[sen];
    markers.push(
      new google.maps.Marker({
        position: {
          lat: Number(item.location.latitude),
          lng: Number(item.location.longitude),
        },
        map,
        label: `${++index}. ${item.genus} ${item.specie}`,
        animation: google.maps.Animation.DROP,
        icon: image,
      })
    );
    markers[index - 1].addListener("click", (e) => {
      showRoute(item.id);
    });
  }
}

//Montamos el mapa
onMounted(async () => {
  try {
    await store.dispatch('senlleiras/listSenlleiras');
    try {
      await loader.load();
      map = new google.maps.Map(mapDiv.value, {
        center: props.currPos,
        zoom: 17,
      });
      //Llamamos al marcador
      markerLoad();
    } catch (error) {
      console.log("Loader de GoogleMaps", error);
    }
  } catch (error) {
    console.log("Listado de senlleiras", error)
  }
});

const limpiar = () => {
  for (let i = 0, tam = markers.length; i < tam; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: 2vw;
  @media screen and (min-width: 600px) {
    & {
      grid-template-columns: 1fr calc(40vw - 5rem);
    }
  }
}
</style>