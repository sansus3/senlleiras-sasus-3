<template>
    <div style="background-color: red;">
        <l-map style="height: 400px;width:100%;" :options="{attributionControl: false}" :zoom="theZoom" :center="location" :maxZoom="maxZoom">
            <l-control-layers position="topright"></l-control-layers>
            <l-tile-layer
                v-for="tileProvider in tileProviders"
                :key="tileProvider.name"
                :name="tileProvider.name"
                :visible="tileProvider.visible"
                :url="tileProvider.url"
                :attribution="tileProvider.attribution"
                layer-type="base"
            />
            <l-marker :lat-lng="location">
                <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
            </l-marker>
        </l-map>
    </div>
</template>

<script setup>
import { LMap, LTileLayer, LMarker, LIcon, LControlLayers } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { computed,reactive } from "vue";

const props = defineProps({
    theZoom: {
        type: Number,
        default: 16,
    },
    maxZoom: {
        type: Number,
        default: 17
    },
    iconWidth: {
        type: Number,
        default: 25,
    },
    iconHeight: {
        type: Number,
        default: 40,
    },
    location: {
        type: Array,
        default: () => [42.877702, -8.5508146]
    }
});


const tileProviders = reactive([
        {
          name: 'Mapa rueiro',
          visible: true,          
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        },
        {
          name: 'Mapa xeográfico',
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',      
        },
      ]);

// const iconUrl = computed(()=>`https://placekitten.com/${props.iconWidth}/${props.iconHeight}`);
const iconUrl = computed(() => "../../conxo.jpg");

const iconSize = computed(() => [props.iconWidth, props.iconHeight]);


</script>

<style lang="scss" scoped>
.leaflet-container {
    z-index: 0 !important;
    border-radius: 0.2rem;
}
.width {
    height: 100%;
    width: 100%;
    min-width: 18rem;
    min-height: 18rem;
}
</style>