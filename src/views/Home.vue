<template>
  <div class="home">
    <header-section></header-section>
    <footer-section></footer-section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from './page_structure/HeaderSection.vue';
import FooterSection from './page_structure/FooterSection.vue'

export default {
  name: 'Home',
  components: {
    HeaderSection,
    FooterSection
  }
}
</script>
