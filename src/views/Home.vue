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
        text: 'Carballo del Bosque del Banquete de Conxo',
        clases: { 'carrusel-image': true, 'carruselmostrado': true },
        puntos: { 'posicionado': true },
    },
    {
        url: 'http://placekitten.com/320/249',
        text: 'chámome Gusifredo, e levei un bo susto',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
    {
        url: 'http://placekitten.com/320/248',
        text: 'Ese do espello son eu? Pensei que era unha Galiña',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
    {
        url: 'http://placekitten.com/320/247',
        text: 'A eso lle chamas pienso? comeo tí lambón',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
]);
</script>