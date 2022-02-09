<template>
  <div class="home">
    <!-- Vista de la cabecera página -->
    <header-section></header-section>

    <!-- Carrusel de fotos -->
    <carrusel-vue></carrusel-vue>
  

    <!-- Vista del pie de página -->
    <footer-section></footer-section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from './page_structure/HeaderSection.vue';
import FooterSection from './page_structure/FooterSection.vue'
import CarruselVue from './Carrusel.vue';

export default {
  name: 'Home',
  components: {
    HeaderSection,
    FooterSection,
    CarruselVue
  }
}
</script>
