<template>
    <input @keyup="filtrar" type="search" v-model.trim="search.text">
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

//Métodos
const filtrar = () => {
    store.dispatch('senlleiras/senlleiraSearch',search.text);}
</script>