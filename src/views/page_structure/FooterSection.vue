<template>
    <footer class="main-footer">               
        <nav class="menu-principal">
            <!-- <a href="#" class="menu-display"><i class="fas fa-chevron-up"></i></a> -->
            <ul class="menu-elements">
                <li>
                    <router-link class="menu-catalogo" :to="{ name: 'Catalogo' }">
                        <i class="fas fa-image"></i>
                        <p>Catalogo</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="menu-inicio" :to="{ name: 'Home' }">
                        <i class="fas fa-home"></i><p>Inicio</p>
                    </router-link>
                </li>
                <li>
                    <a href="#" class="mapa">
                        <i class="fas fa-map-marked-alt"></i>
                        <p>Mapa</p>
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
.menu-principal {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 9px solid var(--colorsecundario);
}
.menu-principal .menu-elements {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: var(--colorprincipal);
    justify-content: space-around;
    align-items: center;
}
.menu-principal .menu-elements li {
    width: 33%;
    display: flex;
    justify-content: center;
    text-align: center;
}
.menu-principal .menu-elements li a {
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: var(--colortitulo);
    position: relative;
    transition: all 0.2s ease-in-out;
}
.menu-principal .menu-elements li a p {
    position: absolute;
    bottom: 0px;
    text-transform: uppercase;
    display: block;
    font-size: 16px;
    display: none;
}
.menu-principal .menu-elements li a i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: var(--colortitulo);
    width: 60px;
    height: 60px;
    border: 5px solid transparent;
    transition: all 0.2s ease-in-out;
}
.menu-principal .menu-elements li a:hover::before {
    content: "";
    position: absolute;
    background-color: transparent;
    border-top-right-radius: 25px;
    width: 20px;
    height: 20px;
    top: 4px;
    left: 5px;
    box-shadow: 0 -8px 0 0 var(--colorsecundario);
}

.menu-principal .menu-elements li a:hover::after {
    content: "";
    position: absolute;
    background-color: transparent;
    border-top-left-radius: 25px;
    width: 20px;
    height: 20px;
    top: 4px;
    right: 5px;
    box-shadow: 0 -8px 0 0 var(--colorsecundario);
}

.menu-principal .menu-elements li a:hover i {
    transform: translateY(-20px);
    background-color: var(--colorprincipal);
    border: 5px solid var(--colorsecundario);
    border-radius: 100%;
}
.menu-principal .menu-elements li a:hover p {
    display: block;
    font-size: .8em;
    padding-bottom: .3em;
}

/**Active */
.router-link-exact-active i {
    transform: translateY(-20px);
    background-color: var(--colorprincipal);
    border: 5px solid var(--colorsecundario) !important;
    border-radius: 100%;
}
</style>