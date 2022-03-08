<template>
    <div class="width">
        <l-map
            v-model="zoom"
            v-model:zoom="zoom"
            :center="location"
        >
            <l-tile-layer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
             <l-marker :lat-lng="location">
        <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
      </l-marker>
        </l-map>
    </div>
</template>

<script setup>
import { LMap,LTileLayer,LMarker,LIcon } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { computed } from "vue";

const props = defineProps({
    zoom: {
        type: Number,
        default: 17,
    },
    iconWidth: {
        type: Number,
        default:25,
    },
    iconHeight: {
        type: Number,
        default:40,
    },
    location: {
        type: Array,
        default: () => [42.877702309669495, -8.550814856716736]
    }
});

// const iconUrl = computed(()=>`https://placekitten.com/${props.iconWidth}/${props.iconHeight}`);
const iconUrl = computed(()=>"../../conxo.jpg");

const iconSize = computed(()=> [props.iconWidth, props.iconHeight]);

</script>

<style lang="scss" scoped>
.leaflet-container{
    z-index: 0 !important;
    border-radius: .2rem;
}
.width {
    height: 100%;
    width: 100%;
    min-width: 18rem;
    min-height: 18rem;
}
</style>