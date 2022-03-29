<!-- 
    Buscador de Senllerias: Género, especie, nombre común, nombre de referencia, localidad
 -->
<template>
    <input placeholder="Nome, especie, referencia, lugar" @keyup="filtrar" type="search" class="the-search" v-model.trim="search.text">
</template>

<script setup>
//Dependencias
import { reactive } from 'vue';
import { useStore } from 'vuex';
//Carga de vuex/store
const store = useStore();
//Variables
const search = reactive({
    text: ''
})

/**
 * Método que obtiene los registros de una "Senlleira"
 * @returns Género, especie, nombre común, nombre de referencia, localidad
 */
const filtrar = () => store.dispatch('senlleiras/senlleiraSearch',search.text);
</script>

<style scoped>
.the-search::placeholder{
 color: var(--colorPrincipal);
 font-size: .8rem;
}
</style>