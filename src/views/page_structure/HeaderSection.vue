<template>
    <header class="main-header">
        <nav class="header-nav-app">
            <router-link class="header-logo" :to="{ name: 'Home' }">LOGO</router-link>
            <ul class="header-nav-buttons">
                <li class="header-search">
                    <i class="fas fa-search"></i>
                    <the-search></the-search>
                </li>
                <li class="header-upload">
                    <router-link 
                    :to="{ name: 'SolicitudSenlleira' }"
                    >
                    <i class="fas fa-tree"></i>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import TheSearch from '@/components/senlleira-components/TheSearch.vue';
</script>

<style scoped lang="scss">
@import url(../../assets/scss/main-header.scss);
</style>