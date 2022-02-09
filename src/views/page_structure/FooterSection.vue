<template>
    <footer class="main-footer">
        <nav class="menu-principal">
            <a href="#" class="menu-display">
                <i class="fas fa-chevron-up"></i>
            </a>
            <ul class="menu-elements">
                <li>
                    <a href="#" class="menu-catalogo">
                        <i class="fas fa-image"></i>Catalogo
                    </a>
                </li>
                <li>
                     <router-link class="menu-inicio" :to="{name:'Home'}">
                        <i class="fas fa-home"></i>Inicio
                     </router-link>                    
                </li>
                <li>
                    <a href="#" class="mapa">
                        <i class="fas fa-map-marked-alt"></i>Mapa
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
</template>