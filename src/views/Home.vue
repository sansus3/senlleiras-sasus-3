<template>
  <div class="home">
<<<<<<< HEAD
    <!-- Carrusel de fotos -->
    <carrusel-vue :images="images"></carrusel-vue>
    <!-- Galeria de contenido -->
    <galeria-vue></galeria-vue>
=======
    <!-- Vista de la cabecera página -->
    <HeaderSection/>
    <Menuweb/>

    <!-- Carrusel de fotos -->
    <Carrusel/>
    <!-- <ul>
      <li>
        <router-link 
        class="menu-inicio" 
        :to="{ name: 'SolicitudSenlleira' }"
        >
          Nueva senlleira
        </router-link>
      </li>
    </ul> -->

    <!-- Galeria de contenido -->
    <Galeria/>
    <!-- Vista del pie de página -->
    <FooterSection/>
>>>>>>> 6d30d453eb1eaa03d62f0ad277f95c3ce23d835c
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import CarruselVue from '@/components/senlleira-components/Carrusel.vue';
import GaleriaVue from "@/components/galeria/galeria.vue"
<<<<<<< HEAD

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
=======
import Menuweb from './menu-top-web/Menuweb.vue';
import Carrusel from '../components/senlleira-components/Carrusel.vue';
import Galeria from '../components/galeria/galeria.vue';
</script>
>>>>>>> 6d30d453eb1eaa03d62f0ad277f95c3ce23d835c
