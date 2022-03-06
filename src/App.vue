<template>
  <!-- Main Header -->
  <header-section></header-section>
  <!-- Content -->
  <div class="container-fluid">
    <router-view />
  </div>
  <!-- Main Footer -->
  <footer-section></footer-section>
</template>

<script setup>
//Dependencias
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue';
require('./assets/scss/general.scss');
</script>