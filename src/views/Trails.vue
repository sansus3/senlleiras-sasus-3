<template>
    <div ref="mapDiv" style="width: 100%; height: 95vh"></div>
    <select @change="calculateAndDisplayRoute" v-model="mode" name="" id="">
        <option value="DRIVING">Driving</option>
        <option value="WALKING">Walking</option>
        <option value="BICYCLING">Bicycling</option>
        <option value="TRANSIT">Transit</option>
    </select>
</template>

<script setup>
/**
 * Referencias:
 * https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes#maps_directions_travel_modes-javascript
 * 
 * IMPORTANTE
 * HAY QUE TENER HABILITADO Directions API de google además de Google maps API
 **/

//Dependencias
import { Loader } from "@googlemaps/js-api-loader";
import { computed, ref } from "vue";
import { useStore } from "vuex";
//Cargamos stores/state de vuex
const store = useStore();
//Con esta variable inicializamos el objeto mapa y sirve también para mostrar en el template
const mapDiv = ref(null);
const mode = ref('DRIVING');
//API KEY de Google
const apikey = computed(() => store.state.google_maps_api_key);
const loader = new Loader({ apiKey: apikey.value });


let directionsService=null, directionsRenderer = null;

(async ()=>{
    //Lanzamos el cargador
    if(!loader.loading)
          await loader.load();
    //console.log(await loader.loading) 
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();     
    const map = new google.maps.Map(mapDiv.value, {
    
   
        zoom: 14,
        center: { lat: 42.8775066, lng:  -8.5489188 },
    });

    directionsRenderer.setMap(map);
    //console.log(directionsRenderer)
    calculateAndDisplayRoute();
})();

function calculateAndDisplayRoute() {
    const selectedMode = mode.value;

    directionsService
        .route({
            origin: { lat: 42.8775066, lng:  -8.5489188 },
            destination: { lat: 42.8775067, lng: -8.5489189 },
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode[selectedMode],
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + e.message));
}


</script>
