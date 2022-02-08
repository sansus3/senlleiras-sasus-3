<template>
  <div class="about">
    <header-section></header-section>
    <h1>This is an about page</h1>
    <footer-section></footer-section>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from './page_structure/HeaderSection.vue';
import FooterSection from './page_structure/FooterSection.vue'

export default {
  name: 'About',
  components: {
    HeaderSection,
    FooterSection
  }
}
</script>

