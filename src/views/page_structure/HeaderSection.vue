<template>
    <nav class="main-header header-nav-app">
        <a href="#" class="header-logo">lOGO</a>
        <ul class="header-nav-buttons">
            <li class="header-search">
                <i class="fas fa-search"></i>
                <input type="search" placeholder="Buscar" />
            </li>
            <li class="header-upload">
                <router-link :to="{ name: 'About' }">
                    <i class="fas fa-tree"></i>
                </router-link>
            </li>
            <li class="header-profile">
                <i class="fas fa-user-circle"></i>
            </li>
        </ul>
    </nav>
</template>