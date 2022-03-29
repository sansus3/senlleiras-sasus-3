<!-- 
    Componente donde cargamos las imágenes de "unha árbore senlleria"
 -->
<template>
    <div class="covertura__imagenes">        
        <div class="covertura__imagenes loader">
            <the-loader :loading="loader"></the-loader>
        </div>
        <div class="covertura__imagenes componente-carrusel">
            <carrusel 
                :carruseltext="`${senlleira.nombreReferencia} 🌳 ${senlleira.nombreComun}`"
                :showlegend="false"
                :images="rutas"
                :alt = "`${senlleira.genus} ${senlleira.specie}`"
                :title = "`${senlleira.genus} ${senlleira.specie}`"
                :contadorInit="-1"
            ></carrusel>
        </div>      
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
.covertura__imagenes{
    display: grid;
    height:100%;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    position: relative;
}
.carrusel{
    height: 100% !important;
}
    .covertura__imagenes.loader{
        position: absolute;
        transform: translate(50% 50%);
        width: 100%;
        height:100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;   
        color: green;   
    }
    .covertura__imagenes.componente-carrusel{
        width: 100%;
        height:100%;
    }
</style>