<!-- 
    Componente donde cargamos las imágenes de "unha árbore senlleria"
 -->
<template>
    <div class="imagenes">
        <carrusel
            :carruseltext="`${senlleira.nombreReferencia} 🌳 ${senlleira.nombreComun}`"
            :showlegend="false"
            :images="rutas"
        ></carrusel>
        <the-loader :loading="loader"></the-loader>
    </div>
</template>

<script setup>
//Dependencias
import TheLoader from '../TheLoader.vue';
import Carrusel from './Carrusel.vue';
import { getImages } from '@/hooks/imageUploader.hook';
import { ref , inject } from 'vue';
import { reactive, onMounted } from 'vue';


const props = defineProps({
    /**
     * Identificador pasado por la url (params) de una senlleira
     */
    id: {
        type: String,
        required: true
    }
});

/**
 * Colección de rutas de las imágenes para cargar
 */
const rutas = reactive([]);
/**
 * Variable booleana que espera a la carga de imágenes. Mientras carga se mostrará un loader
 */
const loader = ref(false);

const senlleira = inject('senlleira');

/**
 * Obtención de las imágenes del storage de Firebase
 */
onMounted(async () => {
    try {
        loader.value = true;
        await getImages(props.id,rutas);
    } catch (error) {
        console.log(error)
    } finally {
        loader.value = false;
    }
});
</script>

<style scoped>
</style>