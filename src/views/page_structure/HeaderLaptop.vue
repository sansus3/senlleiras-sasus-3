<template>
    <nav class="header-nav-app-laptop">
        <ul class="header-logo">
            <li>
                <router-link
                :to="{ name: 'Home' }"
               >
               LOGO
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
                :to="{ name: 'Mapas' }"
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
            <li class="header-search-laptop">
                <a class="btn-search-laptop" href="#">
                    <i class="fas fa-search"></i>
                </a>
                <the-search></the-search>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import TheSearch from '@/components/senlleira-components/TheSearch.vue';
</script>
<style lang="scss" scoped>
    @import url(../../assets/scss/header-laptop.scss);
</style>