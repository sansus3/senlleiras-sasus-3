<!-- 
    Componente donde cargamos las imágenes de "unha árbore senlleria"
 -->
<template>
    <div class="images">Images {{ id }}</div>
    <div class="imagenes">
        
        <img class="imagen" v-for="(src,index) in rutas" :key="index" :src="src" :alt="`Imagen ${index}`">
        <the-loader :loading="loader"></the-loader>
        
    </div>
    
</template>

<script setup>
//Dependencias
import TheLoader from '../TheLoader.vue';
import { storage } from '@/hooks/firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { ref as referencia } from 'vue';
import { reactive,onMounted } from 'vue';


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

/**
 * Obtención de las imágenes del storage de Firebase
 */
onMounted(async ()=>{
    try {
        loader.value=true;
        await images();
    } catch (error) {
        console.log(error)
    } finally{
        loader.value=false;
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
            rutas.push(url);
        })()
    });
}
</script>

<style lang="scss" scoped>
.imagenes{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    gap: 5px;
    margin: 0 auto;
    
    // border: 1px solid black;
    .imagen{
        object-fit: cover;
        width: 200px;
        height: 150px;
    }
}
</style>