<template>
  <!-- Main Header -->
  <header-section></header-section>
  <!-- Content -->
  <router-view />
  <!-- Main Footer -->
  <footer-section></footer-section>
</template>

<script setup>
//Dependencias
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue';
require('./assets/scss/general.scss');
</script>