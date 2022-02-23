<template>
  <div class="home">
    <!-- Vista de la cabecera página -->
    <header-section></header-section>

    <!-- Carrusel de fotos -->
    <carrusel-vue></carrusel-vue>
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
<galeria-vue> </galeria-vue>
    <!-- Vista del pie de página -->
    <footer-section></footer-section>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue'
import CarruselVue from '@/components/senlleira-components/Carrusel.vue';
import GaleriaVue from "@/components/galeria/galeria.vue"
</script>
