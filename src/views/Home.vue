<template>
  <div class="home">
    <!-- Vista de la cabecera página -->
    <header-section></header-section>

    <!-- Carrusel de fotos -->
    <carrusel-vue></carrusel-vue>
    <ul>
      <li>
        <router-link 
        class="menu-inicio" 
        :to="{ name: 'SolicitudSenlleira' }"
        >
          Nueva senlleira
        </router-link>
      </li>
    </ul>

    <!-- Vista del pie de página -->
    <footer-section></footer-section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue'
import CarruselVue from '@/views/Carrusel.vue';

export default {
  name: 'Home',
  components: {
    HeaderSection,
    FooterSection,
    CarruselVue
  }
}
</script>
