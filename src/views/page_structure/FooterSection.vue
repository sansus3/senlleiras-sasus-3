<template>
    <footer class="main-footer">               
        <nav class="menu-principal">
            <!-- <a href="#" class="menu-display"><i class="fas fa-chevron-up"></i></a> -->
            <ul class="menu-elements">
                <li>
                    <router-link class="menu-catalogo" :to="{ name: 'CatalogoAdmin' }">
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
                    <router-link class="mapa" :to="{ name: 'Mapas' }">
                         <i class="fas fa-map-marked-alt"></i>
                        <p>Mapa</p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
.menu-principal{
    position: fixed;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 7px solid var(--colortitulo);
    box-shadow: 0px 0px 6px 0 white;
}
    .menu-principal .menu-elements{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        background-color: var(--colorprincipal);
        justify-content: space-around;
        align-items: center;
        
    }
    .menu-principal .menu-elements li{
        width: 33%;
        display: flex;
        justify-content: center;
        text-align: center;
         
    }
    .menu-principal .menu-elements li a{
        display: flex;
        flex-direction: column;
        width: 100px;
        height: 100%;
        justify-content: center;
        align-items: center;
        color: var(--colortitulo);
        position: relative;
        transition: all .2s ease-in-out; 
        
    }
    .menu-principal .menu-elements li a p{
        position: absolute;
        bottom: 7px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
    }
        .menu-principal .menu-elements li a i{
            
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            color: var(--colortitulo);
            width: 50px;
            height: 50px;
            border: 5px solid transparent;
            transition: all .2s ease-in-out;  
        }
        .menu-principal .menu-elements li a:hover::before{  
            content: "";
            position: absolute;
            background-color: transparent;
            border-top-right-radius: 100%;
            width: 25px;
            height: 20px;
            top: 2px;
            left:7px;
            box-shadow: 0 -6px 0 0 var(--colortitulo);  
        }
        .menu-principal .menu-elements li a:hover::after{
            content: "";
            position: absolute;
            background-color: transparent;
            border-top-left-radius: 100%;
            width: 25px;
            height: 20px;
            top: 2px;
            right:7px;
            box-shadow: 0 -6px 0 0 var(--colortitulo); 
        }

/* NAVEGADOR HOVER */

.menu-principal .menu-elements li a:hover i{
    transform: translateY(-25px);
    background-color: var(--colorprincipal);
    border: 4px solid var(--colortitulo);
    border-radius: 100%;
    box-shadow: 0px -1px 6px 0 var(--colortitulo);
}
    .menu-principal .menu-elements li a:hover p{
        display: block;
        font-size: 13px;
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