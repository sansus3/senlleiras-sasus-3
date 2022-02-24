<template>
    <header class="main-header">
        <nav class="header-nav-app">
            <router-link class="header-logo" :to="{ name: 'Home' }">LOGO</router-link>
            <ul class="header-nav-buttons">
                <li class="header-search">
                    <i class="fas fa-search"></i>
                    <input type="search" placeholder="Buscar" />
                </li>
                <li class="header-upload">
                    <router-link 
                    :to="{ name: 'Form' }"
                    >
                    <i class="fas fa-tree"></i>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
/* CABECERA TOP */

.header-nav-app {
    position: fixed;
    top: 0;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    background-color: var(--colorprincipal);
    transition: all ease-in-out 0.3s;
    z-index: 1;
}
.header-nav-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.header-nav-app .header-logo {
    font-size: 30px;
    width: 60px;
    color: var(--colortitulo);
    text-transform: uppercase;
    font-weight: 900;
    margin: 0;
    padding: 0 10px;
}
.header-nav-buttons .header-search {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    color: var(--colortitulo);
    font-size: 15px;
    padding: 5px;
}
.header-nav-buttons .header-search i {
    padding: 3px;
    color: white;
}
.header-nav-buttons .header-search input {
    width: 60%;
}
.header-nav-buttons .header-search input:focus {
    outline: none;
}
.header-nav-buttons .header-upload a {
    font-size: 20px;
    color: var(--colortitulo);
    padding: 10px;
}

/* Cabecera se encoge/ensancha */

.reduced {
    height: 0px;
    transition: all ease-in-out 0.3s;
}
.reduced .header-logo {
    display: none;
}
.reduced .header-nav-buttons {
    display: none;
}

.router-link-exact-active{
    font-size: .8em;
    text-shadow: 5px 1px 2px black, 8px 3px 4px #808080;
    transform: skew(30deg, 0);
}

@media screen and (max-width:1080px){
        .header-nav-app-laptop{
            display: none;
        }
        .header-nav-app{
            display: flex;
        }
        .menu-principal{
            display: flex;
        }
        body{
            padding-top: 40px;
            padding-bottom: 50px;
        }  
    }  
</style>