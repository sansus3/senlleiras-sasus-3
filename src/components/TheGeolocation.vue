<template>
    <section class="geolocation">
        <div class="geolocation__field">
            <label for="latitud" class="form-label">Latitud</label>
            <input
                id="latitud"
                name="latitud"
                v-model.trim="location.latitude"
                type="text"
                placeholder="43.5060736"
                class="field__control form-control"
            />
        </div>

        <div class="geolocation__field">
            <label for="longitude" class="form-label">Longitud</label>
            <input
                id="longitude"
                name="longitude"
                v-model.trim="location.longitude"
                type="text"
                placeholder="-8.2051072"
                class="field__control form-control"
            />
        </div>
        <input type="button" @click="getGeolocation" class="btn btn-secondary" value="Geolocalizar">
    </section>
</template>

<script setup>
import {ref} from "vue";
//let geolocationBool = ref(false);
let errorStr = ref("");

const props = defineProps({
    location: {
        type: Object,
        default: () => ({latitude: null,longitude: null}),
        required: true
    }
});

const getGeolocation = () => {
    if (!window.navigator.geolocation) {
        errorStr.value = "La Geolocalización no está disponible";
        return;
    }
    //geolocationBool.value = true;
    window.navigator.geolocation.getCurrentPosition(
        posicion => {
            props.location.latitude = posicion.coords.latitude;
            props.location.longitude = posicion.coords.longitude;
            //geolocationBool.value = false;
        },
        error => {
            errorStr.value = error.message;
            //geolocationBool.value = false;
        }
    );
}
</script>