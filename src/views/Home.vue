<template>
  <div class="home">  
      <ArbolStories></ArbolStories>   
    <!-- Carrusel de fotos -->
    <carrusel-vue minHeight="350px" :images="images"></carrusel-vue>
    <!-- Galeria de contenido -->
    <galeria-vue @click="catalogoGo"></galeria-vue>
    <!-- Solicitud -->
  </div>
</template>

<script setup>
//Dependencias
import { reactive } from 'vue';
import { useRouter } from "vue-router";
import CarruselVue from '@/components/senlleira-components/Carrusel.vue';
import GaleriaVue from "@/components/galeria/galeria.vue";
import ArbolStories from  "@/components/senlleira-components/ArbolStories.vue";
//Cargamos el router
const router = useRouter();

//Imágenes de la galería
const images = reactive([
    {
        url: './conxo.jpg',
        text: 'Árbore sen flor, día sen sol.',
        clases: { 'carrusel-image': true, 'carruselmostrado': true },
        puntos: { 'posicionado': true },
    },
    {
        url: './senlleiras_1.jpg',
        text: 'De tal árbore, tal acha.',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
    {
        url: './senlleiras_2.jpg',
        text: 'Árbore  trasplantado, ben regado.',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
    {
        url: './senlleiras_5.jpg',
        text: 'Quen ten árbore, ten paxaros.',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
]);
//Router para la galería. Al hacer click entrar en el catálogo
const catalogoGo = () => {
    router.push({
        name: 'CatalogoSenlleira',
      })
}
</script>
