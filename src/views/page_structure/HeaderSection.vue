<template>
    <header class="main-header">
        <nav class="header-nav-app" :class="{ 'reduced': show }">
            <router-link class="header-logo" :to="{ name: 'Home' }"><img src="@/assets/img/logo-senlleirapp.png" alt="Senllapp"></router-link>
            <ul class="header-nav-buttons">
                <li 
                    class="header-search" 
                    v-if="$route.name==='CatalogoSenlleira' || $route.name==='MapaSenlleiras'">
                    <i title="Nome, especie, referencia, lugar" class="fas fa-search"></i>
                    <the-search></the-search>
                </li>
                <li class="header-upload">
                    <router-link :to="{ name: 'SolicitudSenlleira' }">
                        <i class="fa-solid fa-plus"></i>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
//Dependencias
import TheSearch from '@/components/senlleira-components/TheSearch.vue';
import { ref } from 'vue';

//Subida y bajada del menú superior
const show = ref(false);


let lastScrolltop = 0;
window.addEventListener('scroll', e => {
    const st = window.pageXOffset || document.documentElement.scrollTop;
    //console.log(menuHeader)
    if (st > lastScrolltop) {
        show.value = true;

    } else if (st <= lastScrolltop) {
        show.value = false;
        //menuHeader.classList.remove("reduced");
        //console.log("no reduced")

    };
    lastScrolltop = st <= 40 ? 40 : st;
});



</script>

<style scoped lang="scss">
@import url(../../assets/scss/main-header.scss);
</style>