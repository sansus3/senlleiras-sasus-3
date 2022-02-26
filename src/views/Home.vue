<template>
  <div class="home">
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
  </div>
</template>

<script setup>
// @ is an alias to /src
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue'
import CarruselVue from '@/components/senlleira-components/Carrusel.vue';
import GaleriaVue from "@/components/galeria/galeria.vue"
import Menuweb from './menu-top-web/Menuweb.vue';
import Carrusel from '../components/senlleira-components/Carrusel.vue';
import Galeria from '../components/galeria/galeria.vue';
</script>
