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
import { storage } from '@/hooks/firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { ref as referencia, inject } from 'vue';
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
const loader = referencia(false);

const senlleira = inject('senlleira');

/**
 * Obtención de las imágenes del storage de Firebase
 */
onMounted(async () => {
    try {
        loader.value = true;
        await images();
    } catch (error) {
        console.log(error)
    } finally {
        loader.value = false;
    }
});

/**
 * Método que almacena las imágenes del storage de firebase
 */
const images = async () => {
    // Create a reference under which you want to list
    const listRef = ref(storage, props.id);
    // Find all the prefixes and items.
    const res = await listAll(listRef)
    //console.log(res)
    res.items.forEach((itemRef) => {
        // All the items under listRef.
        //console.log(itemRef.fullPath)
        (async () => {
            const url = await getDownloadURL(ref(storage, itemRef.fullPath));
            const bool = rutas.length ? false : true;
            rutas.push(
                {
                    url,
                    text: 'Carballo del Bosque del Banquete de Conxo',
                    clases: { 'carrusel-image': true, 'carruselmostrado': bool },
                    puntos: { 'posicionado': true },
                },
            );
        })()
    });
}
</script>