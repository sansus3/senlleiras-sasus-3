<template>
    <div>
        <header-section></header-section>
        <formulario-senlleira></formulario-senlleira>
        <footer-section></footer-section>
    </div>  
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue';
import FormularioSenlleira from '@/components/senlleira-components/FormularioSenlleira';

export default {
  components: {
    HeaderSection,
    FooterSection,
    FormularioSenlleira
  }
}
</script>