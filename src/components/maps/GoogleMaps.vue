<template>
    <div :data-set="data" ref="mapDiv" style="width: 100%; height: 95vh; "></div>    
</template>

<script setup>
//Dependendencias
import { Loader } from "@googlemaps/js-api-loader";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
    /**
     * {Number} zoom - Zoom que tendrá por defecto el mapa de google
     */
    zoom: {
        type: Number,
        default: 17
    },
    /**
     * {Object} CurrPos - Punto central  definido por una latitud y una longitud  en la que aparecerán todos los marcadores del mapas
     * @default {lat: 42.8775066,lng: -8.5489188}
     */
    currPos: {
        type: Object,
        default: () => ({ lat: 42.8775066, lng: -8.5489188 }),
    },
});


const store = useStore();
const router = useRouter();
//Objeto instanciado de google.maps.Map
let apikey = computed(()=>store.state.google_maps_api_key);
let map = null;
const mapDiv = ref(null);
let markers = [];
//Icono del marcador
const image = './googlemaps128x128.png';

//Cargamos la APIKEY
const loader = new Loader({ apiKey: apikey.value });

const data = computed(()=>
    {
        limpiar();
        pintar();        
        return store.getters['senlleiras/getSenlleirasFiltradas'];
    }
);




const pintar = async () => {
  await loader.load();
  let index = 0;
  for (let sen in data.value) {
    const item = data.value[sen];
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








onMounted(async () => {
    try {
        //await store.dispatch("senlleiras/listSenlleiras");
        await loader.load();      
        map = await new google.maps.Map(mapDiv.value, {
            center: props.currPos,
            zoom: props.zoom,
        });
        await pintar();
    } catch (error) {
        console.log(error);
    }
});


const limpiar = () => {
  for (let i = 0, tam = markers.length; i < tam; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

</script>