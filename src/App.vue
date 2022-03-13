<template>
  <!-- Main Header -->
  <header-section v-if="screen.width < 600"></header-section>
  <header-laptop v-else></header-laptop>
  
  <!-- Content -->
  <div class="container-fluid">
    <router-view />
  </div>
  <!-- Main Footer -->
  <footer-section v-if="screen.width < 600"></footer-section>
</template>

<script setup>
//Dependencias
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue';
import HeaderLaptop from '@/views/page_structure/HeaderLaptop.vue';
import { reactive } from 'vue';
require('./assets/scss/general.scss');

//Detectamos el ancho de pantalla
const screen = reactive({
  width: document.documentElement.scrollWidth,
  height: document.documentElement.scrollHeight,
});

window.onresize = () => {
  screen.width = document.documentElement.scrollWidth;
  screen.height = document.documentElement.scrollHeight;
}
</script>
