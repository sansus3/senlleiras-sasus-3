<template>
    <div>
        <template v-if="senlleira">
            <header>
                <h2>{{ senlleira.genus }} {{ senlleira.specie }}</h2>
                <h3>{{ senlleira.nombreComun }}</h3>
                {{senlleira.nombreReferenica}}
            </header>
            <p>{{ senlleira.comentarios }}</p>
            <images-senlleiras :id="$route.params.id"></images-senlleiras>
        </template>
    </div>
</template>

<script setup>
//Dependencias
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import ImagesSenlleiras from '@/components/senlleira-components/ImagesSenlleiras.vue';


const store = useStore();
const route = useRoute();
onMounted(() => {
    store.dispatch('senlleiras/setSenlleira', route.params.id);

});

const senlleira = computed(() => {
    if (!store.state.senlleira) {
        store.dispatch('senlleiras/listSenlleiras');
        store.dispatch('senlleiras/setSenlleira', route.params.id);
        //console.log("ohoh")
    }
    return store.state.senlleiras.senlleira;
});
</script>