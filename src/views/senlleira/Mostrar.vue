<template>
    <section>
        <header-section></header-section>
        <template v-if="senlleira">
             <header>
                 <h2>{{senlleira.genus}} {{senlleira.specie}}</h2>
                 <h3>{{senlleira.nombreComun}}</h3>
             </header>
             <p>{{senlleira.comentarios}}</p>
             <images-senlleiras :id="$route.params.id"></images-senlleiras>
        </template>       
        <footer-section></footer-section>
    </section>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { onMounted,computed } from 'vue';
// @ is an alias to /src
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue';
import ImagesSenlleiras from '@/components/senlleira-components/ImagesSenlleiras.vue';

export default {
    components: {
        HeaderSection,
        FooterSection,
        ImagesSenlleiras
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        onMounted(() => {
            store.dispatch('setSenlleira',route.params.id);
            
        });

        const senlleira = computed(()=>{
            if(!store.state.senlleira){
                store.dispatch('setSenlleiras');
                store.dispatch('setSenlleira',route.params.id);
                //console.log("ohoh")
            }
            return store.state.senlleira;
        });
        return {
            senlleira
        }
    }
}
</script>