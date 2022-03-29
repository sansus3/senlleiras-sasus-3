<template>
    <section class="geolocation">
        <div class="geolocation__field">
            <label for="latitud" class="form-label required">
                Latitude
                <span data-set="Campo obligatorio" class="text-danger">*</span>
            </label>
            <input
                id="latitud"
                name="latitud"
                v-model.trim="location.latitude"
                type="text"
                placeholder="43.5060736"
                class="field__control form-control"
            />
            <div
                v-if="!location.latitude"
                class="alert alert-danger m-3"
                role="alert"
            >Debe escoller unha latitude</div>
        </div>

        <div class="geolocation__field">
            <label for="longitude" class="form-label required">
                Lonxitude
                <span data-set="Campo obligatorio" class="text-danger">*</span>
            </label>
            <input
                id="longitude"
                name="longitude"
                v-model.trim="location.longitude"
                type="text"
                placeholder="-8.2051072"
                class="field__control form-control"
            />
            <div
                v-if="!location.longitude"
                class="alert alert-danger m-3"
                role="alert"
            >Debe escoller unha lonxitude</div>
        </div>

        <input
            type="button"
            @click="getGeolocation"
            class="btn btn-primary mt-2"
            value="Geolocalizar"
        />
        <the-loader :loading="loader"></the-loader>
        {{ errorStr }}
    </section>
</template>

<script setup>
import { ref } from "vue";
import TheLoader from "@/components/TheLoader.vue"
//let geolocationBool = ref(false);
let errorStr = ref("");
let loader = ref(false);

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
</script>