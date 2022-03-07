<!-- 
    Buscador de Senllerias: Género, especie, nombre común, nombre de referencia, localidad
 -->
<template>
    <input placeholder="Búsqueda ..." @keyup="filtrar" type="search" v-model.trim="search.text">
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