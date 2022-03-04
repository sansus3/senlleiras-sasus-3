<!-- 
    Vista donde mostraremos la información de una "árbore senlleria"
    Módulos: @/components/~/ImagesSenlleiras.vue
 -->
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
import { computed,provide } from 'vue';
import ImagesSenlleiras from '@/components/senlleira-components/ImagesSenlleiras.vue';
//Cargamos el store y el route
const store = useStore();
const route = useRoute();

//Ciclo de vida onCreated
store.dispatch('senlleiras/setSenlleira', route.params.id);

//Varibables
/**
 * Obtenemos el Objeto con todos los datos "da árbore senlleira"
 */
const senlleira = computed(() => {
    if (!store.state.senlleira) { //Si la propiedad "senlleira" es null en el store
        store.dispatch('senlleiras/listSenlleiras');
        store.dispatch('senlleiras/setSenlleira', route.params.id);
    }
    return store.state.senlleiras.senlleira;
});

provide('senlleira',senlleira);
</script>