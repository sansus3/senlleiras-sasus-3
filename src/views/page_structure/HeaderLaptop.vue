<template>
    <nav class="header-nav-app-laptop">
        <ul class="header-logo">
            <li>
                <router-link
                :to="{ name: 'Home' }"
               >
               <img src="@/assets/logo-cuadrado.png" alt="Senllapp" width="45" height="45">
               </router-link>
            </li>
        </ul>
        <ul class="menu-buttons-laptop">
            <li class="element-button-laptop">
                <router-link
                :to="{ name: 'Home' }"
               >
                    <i class="fas fa-home"></i>Inicio
                </router-link>
            </li>
            <li class="element-button-laptop">
               <router-link
                :to="{ name: 'CatalogoSenlleira' }"
               >
                <i class="fas fa-image"></i>
                Catálogo
                </router-link>
            </li>
            <li class="element-button-laptop">
                <router-link
                :to="{ name: 'MapaSenlleiras' }"
               >
                    <i class="fas fa-map-marked-alt"></i>Mapa
                </router-link>
            </li>
            <li class="element-button-laptop">
                <router-link 
                :to="{ name: 'SolicitudSenlleira' }"
                >
                    <i class="fa-solid fa-upload"></i>Cargar Arbol
                </router-link>
            </li>
             <li 
                class="header-search-laptop" 
                :class="{'search-li-animation':showSearch}"
                v-if="$route.name==='CatalogoSenlleira' || $route.name==='MapaSenlleiras'"
            >
                <a class="btn-search-laptop" href="#">
                  <i
                    title="Nome, especie, referencia, lugar"
                    class="fa-solid" 
                    :class="{
                            'fa-solid fa-magnifying-glass-plus':!showSearch,
                            'fa-magnifying-glass-minus':showSearch,
                            }" 
                            @click="showSearch=!showSearch"></i> 
                </a>
                <the-search></the-search>
            </li>
 
        </ul>
    </nav>
</template>
<script setup>
import { ref } from 'vue';
import TheSearch from '@/components/senlleira-components/TheSearch.vue';
//Variable que indica si el buscador es visible
const showSearch = ref(false);
</script>
<style lang="scss" scoped>
    @import url(../../assets/scss/header-laptop.scss);
</style>