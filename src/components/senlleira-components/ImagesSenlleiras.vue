<template>
    <div class="images">Images {{ id }}</div>
    <div class="imagenes">
        <img class="imagen" v-for="(src,index) in rutas" :key="index" :src="src" :alt="`Imagen ${index}`">
    </div>
</template>

<script setup>
import { storage } from '@/firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { reactive,onMounted } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const rutas = reactive([]);

onMounted(()=>{
    try {
        images();
    } catch (error) {
        console.log(error)
    }
});

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
    display: flex;
    flex-wrap: wrap;
    gap: .5em;
    .imagen{
        object-fit: cover;
        width: 20vw;
        height: 20vh;
    }
}
</style>