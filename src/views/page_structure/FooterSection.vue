<template>
    <footer class="main-footer">               
        <nav class="menu-principal">
            <ul class="menu-elements">
                <li>
                    <router-link class="menu-catalogo" :to="{ name: 'CatalogoSenlleira' }">
                        <i class="fas fa-image"></i>
                        <p>Catálogo</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="menu-inicio" :to="{ name: 'Home' }">
                        <i class="fas fa-home"></i><p>Inicio</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="mapa" :to="{ name: 'Mapas' }">
                         <i class="fas fa-map-marked-alt"></i>
                        <p>Mapa</p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped lang="scss">
    @import url(../../assets/scss/main-footer.scss);
</style>