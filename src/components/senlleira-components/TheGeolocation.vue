<template>
    <section class="geolocation">
        <div class="geolocation__field">
            <label for="latitud" class="form-label required">
                Latitude
                <span data-set="Campo obligatorio" class="text-danger">*</span>
            </label>
            <input id="latitud" required name="latitud" v-model.number="location.latitude" type="number" step="any"
                placeholder="43.5060736" class="field__control form-control" />
            <div v-if="!location.latitude" class="alert alert-danger m-3" role="alert">Debe escoller unha latitude</div>
        </div>

        <div class="geolocation__field">
            <label for="longitude" class="form-label required">
                Lonxitude
                <span data-set="Campo obligatorio" class="text-danger">*</span>
            </label>
            <input id="longitude" required name="longitude" v-model.number="location.longitude" step="any" type="number"
                placeholder="-8.2051072" class="field__control form-control" />
            <div v-if="!location.longitude" class="alert alert-danger m-3" role="alert">Debe escoller unha lonxitude
            </div>
        </div>
        <div data-set="data" ref="mapDiv" style="margin:.5em 0;width: 100%; height: 35vh; "></div>
        <input type="button" @click="getGeolocation" class="btn btn-primary mt-2" value="Geolocalizar" />
        <the-loader :loading="loader"></the-loader>
        {{ errorStr }}
    </section>
</template>

<script setup>
//Deependencias
import { Loader } from "@googlemaps/js-api-loader";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import TheLoader from "@/components/TheLoader.vue"
//let geolocationBool = ref(false);
const store = useStore();
let errorStr = ref("");
let loader = ref(false);//Loader para que el usuario sepa el tiempo de espera

const props = defineProps({
    location: {
        type: Object,
        default: () => ({ latitude: null, longitude: null }),
        required: true
    }
});

const getGeolocation = () => {
    errorStr.value = '';
    if (!window.navigator.geolocation) {
        errorStr.value = "La Geolocalización no está disponible";
        return;
    }
    //geolocationBool.value = true;
    try {
        window.navigator.geolocation.getCurrentPosition(
            posicion => {
                props.location.latitude = posicion.coords.latitude;
                props.location.longitude = posicion.coords.longitude;
                loader.value = false;
                //geolocationBool.value = false;
            },
            error => {
                errorStr.value = error.message;
                loader.value = false;
                //geolocationBool.value = false;
            }
        );
    } catch (error) {
        errorStr.value = error.message;
    } finally {
        loader.value = true;
    }

}


//Lanzamiento asíncrona
/**
 * Función asíncrona que lanza el lodader 
 */
//Cargamos la APIKEY
const mapDiv = ref(null);
let apikey = computed(() => store.state.google_maps_api_key);
const theLoader = new Loader({ apiKey: apikey.value });
let map, infoWindow, marker;
//Icono del marcador
const image = './googlemaps128x128.png';

/**
 * Función que nos devuelve las coordenadas actuales
 * Utilizamos promesa puesto que es necesario esperar la respuesta
 */
const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
        lng: pos.coords.longitude,
        lat: pos.coords.latitude,
    };
};

//Función callback anónima y lanzada automáticamente
(async () => {
    try {
        // Inciamos loader de Google
        if (!theLoader.loading)
            await theLoader.load();
        // Coordenadas actuales
        let { lat, lng } = await getCoords();
        //cargamos marca
        map = new google.maps.Map(mapDiv.value, {
            center: {
                lat: lat, lng: lng
            },
            zoom: 18,
        });
        //Cargamos marcador
        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {
                lat: lat,
                lng: lng
            },
            icon: image,
        });
        // Agregamos el listener para capturar el click y movimiento del marcador
        marker.addListener("click", function () {
            console.log('lala')
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        });
        // Capturamos cuando la posición del marcador cambie y realizamos la acción que se requiera
        google.maps.event.addListener(marker, "position_changed", function () {
            console.log('tata')
            var lat = marker.getPosition().lat();
            var lng = marker.getPosition().lng();

            console.log('Latitude: ' + lat);
            console.log('Longitude: ' + lng);

            //Pintamos en el formulario
            props.location.latitude = lat;
            props.location.longitude = lng;

        });
        infoWindow = new google.maps.InfoWindow(); 
        infoWindow.setPosition({lat,lng});
        infoWindow.setContent("Vostede está aquí");
        infoWindow.open(map);
    } catch (error) {
        console.log(error);
    }
})();





</script>