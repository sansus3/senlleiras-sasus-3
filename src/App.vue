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

<<<<<<< HEAD
<script setup>
//Dependencias
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue';
require('./assets/scss/general.scss');
</script>
=======
<style lang="scss">
/* CONFIGURACIÓN BÁSICA WEB */
@font-face {
  font-family: Montserrat;
  src: url(./assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li,
a {
  text-decoration: none;
  list-style-type: none;
}
body {
  font-family: Montserrat, "Open Sans";
  padding-top: 60px;
  
  
}
@media screen and (max-width:1080px){
        body{
            padding-top: 40px;
            padding-bottom: 50px;
        }  
    }  

:root {
  --colorprincipal: green;
  --colorsecundario: lightgray;
  --colortitulo: white;
}

</style>
>>>>>>> 6d30d453eb1eaa03d62f0ad277f95c3ce23d835c
