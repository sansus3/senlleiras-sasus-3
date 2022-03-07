<!-- 
    Vista donde mostraremos la información de una "árbore senlleria"
    Módulos: @/components/~/ImagesSenlleiras.vue
 -->
<template>
    <div class="p-3">
        <template v-if="senlleira">
            <header>
                <h1 class="main-title">{{ senlleira.genus }} {{ senlleira.specie }}</h1>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Datos técnicos</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ senlleira.nombreReferencia }}</h6>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <em>Latitud:</em>
                                {{ senlleira.location.latitude }}
                            </li>
                            <li class="list-group-item">
                                <em>Longitud:</em>
                                {{ senlleira.location.longitude }}
                            </li>
                            <li class="list-group-item">{{ senlleira.lugar }}</li>
                        </ul>
                        <p class="card-text">{{ senlleira.comentarios }}</p>
                        <a href="#" class="card-link">Card link</a>
                    </div>
                </div>
                <h2 class="secondary-title">{{ senlleira.nombreComun }}</h2>
                {{ senlleira.nombreReferenica }}
            </header>
            <images-senlleiras :id="$route.params.id"></images-senlleiras>
        </template>
    </div>
</template>

<script setup>
//Dependencias
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, provide } from 'vue';
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

provide('senlleira', senlleira);
</script>

<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}
.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
}
.card-title {
    margin-bottom: 0.5rem;
}

.card-subtitle {
    margin-top: -0.25rem;
    margin-bottom: 0;
}

.card h6 {
    font-size: 1rem;
}

.card h5 {
    font-size: 1.25rem;
}

.card h5,
.card h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
.card p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 0.5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>