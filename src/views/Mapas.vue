<template>
  <div class="home">
    <!-- Vista de la cabecera página -->
    <header-section></header-section>

   
      Mapas

    <!-- Vista del pie de página -->
    <footer-section></footer-section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue'

export default {
  name: 'Home',
  components: {
    HeaderSection,
    FooterSection,
  }
}
</script>
