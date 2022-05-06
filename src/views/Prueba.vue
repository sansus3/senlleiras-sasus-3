<template>
  <div ref="mapDiv" style="width: 100%; height: 95vh"></div>
</template>

<script setup>
import { Loader } from "@googlemaps/js-api-loader";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  /**
   * {Number} zoom - Zoom que tendrá por defecto el mapa de google
   */
  zoom: {
    type: Number,
    default: 17,
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

let apikey = computed(() => store.state.google_maps_api_key);
const mapDiv = ref(null);
const mapp = null;
const loader = new Loader({ apiKey: apikey.value });

const pintarRuta = async () => {
  await loader.load();
  const mapp = new google.maps.Map(mapDiv.value, {
    center: props.currPos,
    zoom: props.zoom,
  });
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  directionsRenderer.setMap(mapp);

  const calculatePrueba = async(directionsService, directionsRenderer) => {
    
    directionsService.route({
      //Coordenadas Carballo de Conxo y La Catedral.
      origin: { lat: 42.861268, lng: -8.552802 },
        destination: { lat: 42.525, lng: 8.3238 },
        travelMode: google.maps.TravelMode.DRIVING
      })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Hay un error de API " + status));

  };
        calculatePrueba(directionsService, directionsRenderer);
};

//   directionsRenderer.setMap(mapp);
//   document.getElementById("submit").addEventListener("click", () => {
//     calculateAndDisplayRoute(directionsService, directionsRenderer);
//   });
// }

// function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//   const waypts = [];
//   const checkboxArray = document.getElementById("waypoints");

//   for (let i = 0; i < checkboxArray.length; i++) {
//     if (checkboxArray.options[i].selected) {
//       waypts.push({
//         location: checkboxArray[i].value,
//         stopover: true,
//       });
//     }
//   }

//   directionsService
//     .route({
//       origin: document.getElementById("start").value,
//       destination: document.getElementById("end").value,
//       waypoints: waypts,
//       optimizeWaypoints: true,
//       travelMode: google.maps.TravelMode.DRIVING,
//     })
//     .then((response) => {
//       directionsRenderer.setDirections(response);

//       const route = response.routes[0];
//       const summaryPanel = document.getElementById("directions-panel");

//       summaryPanel.innerHTML = "";

//       // For each route, display summary information.
//       for (let i = 0; i < route.legs.length; i++) {
//         const routeSegment = i + 1;

//         summaryPanel.innerHTML +=
//           "<b>Route Segment: " + routeSegment + "</b><br>";
//         summaryPanel.innerHTML += route.legs[i].start_address + " to ";
//         summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
//         summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
//       }
//     })
//     .catch((e) => window.alert("Directions request failed due to " + status));
// }

// const rutaPruebas = [
//   { lat: 42.861268, lng: -8.552802},
//   { lat: 42.877679, lng: -8.550819 },
// ];
// const flightPath = new google.maps.Polyline({
//   path: rutaPruebas,
//   geodesic: true,
//   strokeColor: "red",
//   strokeOpacity: 1,
//   strokeWeight: 3,
// });

// flightPath.setMap(mapp);

pintarRuta();
</script>
