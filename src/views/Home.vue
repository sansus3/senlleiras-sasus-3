<template>
  <div class="home">
    <!-- Carrusel de fotos -->
    <carrusel-vue :images="images"></carrusel-vue>
    <!-- Galeria de contenido -->
    <galeria-vue></galeria-vue>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import CarruselVue from '@/components/senlleira-components/Carrusel.vue';
import GaleriaVue from "@/components/galeria/galeria.vue"

const images = reactive([
    {
        url: './conxo.jpg',
        text: 'Árbore sen flor, día sen sol.',
        clases: { 'carrusel-image': true, 'carruselmostrado': true },
        puntos: { 'posicionado': true },
    },
    {
        url: './gallery/senlleiras_1.jpg',
        text: 'De tal árbore, tal acha.',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
    {
        url: './gallery/senlleiras_2.jpg',
        text: 'Árbore  trasplantado, ben regado.',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
    {
        url: './gallery/senlleiras_4.jpg',
        text: 'Quen ten árbore, ten paxaros.',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
]);
</script>
