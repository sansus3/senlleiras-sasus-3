<template>
<HeaderSection />

    

    <div class="formulario-section">
        <form action="#" class="formulario-usuario-app">
            <h1>Subir  un árbol <i class="fa-solid fa-arrow-up-to-line"></i></h1>
            <fieldset class="formulario-usuario-caracteristicas">
                <legend>
                    <h2 class="h2-form">Nombre y características </h2>
                </legend>
                    <input type="text" id="nombre-arbol" placeholder="Nombre del árbol"><br>
                    <input type="text" id="nombre-referencia" placeholder="Nombre de referencia"> <br>
                    <span class="form-label">
                        <label for="especie">Especie</label>
                        <select id="especie">
                            <option value="0">No seleccionado</option>
                            <option value="1">Carballo</option>
                            <option value="3">Arbol 2</option>
                            <option value="4">Arbol 3</option>
                        </select>
                    </span>
                    <label for="description-arbol">Descripción</label> <br>
                    <textarea id="description-arbol" placeholder="Añadir descripción"></textarea> <br> 
            </fieldset>

            <fieldset class="formulario-usuario-imagenes">
                <legend><h2 class="h2-form">Cargar Imágenes</h2></legend>
                    <input type="file"> <br>
                    <input type="file"> <br>
                    <input type="file"> <br>
            </fieldset>
            
            <fieldset class="formulario-usuario-localizacion">
                <legend>
                    <h2 class="h2-form">Localización</h2>
                </legend>

                <span class="form-label">
                    <label for="arbol-provincia">Provincia</label>
                    <select disabled name="arbol-provincia" id="arbol-provincia">
                        <option value="0">No seleccionada</option>
                        <option selected value="1">A Coruña</option>
                        <option value="2">Lugo</option>
                        <option value="3">Ourense</option>
                        <option value="4">Pontevedra</option>
                    </select>
                </span> 
                <button type="button" class="location-button">Marcar mi ubicación &nbsp; <i class="fa-solid fa-location-dot"></i></button>

                <span class="label-form-input-location">
                    <label for="latitud">Latitud</label>
                        <input type="number" id="latitud" placeholder="-49,5443º">
                    <label for="longitud">Longitud</label>
                        <input type="number" id="longitud" placeholder="154,3275º">
                </span>
            </fieldset>

        <input  class="submit-arbol" type="submit">
        </form>
    </div>

<FooterSection />
  
</template>

<script setup>
import FooterSection from'../page_structure/FooterSection.vue'
import HeaderSection from '../page_structure/HeaderSection.vue'
import HeaderSection1 from '../page_structure/HeaderSection.vue';

</script>

<style>
.formulario-section{
    /* background-image: url(../images/Carballo-del-Bosque-del-Banquete-de-Conxo-SANTIAGO-DE-COMPOSTELA-GALICIA-set-2021-scaled.jpg); */
    object-fit: cover;
    margin: 0;
    padding: 0;
    min-height: calc(100vh - 90px) ;
    max-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.formulario-usuario-app{
    margin: 20px auto;
    backdrop-filter: blur(5px);
    background-color: rgba(240,240,240, .6);
    width: 340px;
    height: auto;
    padding: 10px;
    border-radius: 20px;
}

.formulario-usuario-app input[type=text]{
    width: 100%;
    margin-bottom:5px;
    font-size: 16px;   
}

/* Diseño estructura formulario */
   .formulario-usuario-app h1{
        text-align: center;
        text-transform: uppercase;
        font-size: 30px;
        padding-bottom: 10px;
    }
        .formulario-usuario-app  i{
            color: black;
            font-size: 30px;
        }
    .formulario-usuario-app fieldset{
        border: 2px solid white;
        padding: 10px;
    }
    .formulario-usuario-app fieldset legend{
        text-align: center;
    }
    .h2-form{
        text-align: center;
        font-size: 18px;
        text-transform: uppercase;
        padding: 0 10px;
        color: var(--colorprincipal)
    }

/* Nombre y caracteristicas */
    #description-arbol{
        width: 100%;
        height: 100px;
        resize: none;
        padding: 5px;
        font-family: montserrat;
        font-size: 16px;
    }
    .form-label{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
    }
        #especie{
            margin-bottom: 5px;
            font-size: 16px;
            width: calc(100% - 70px);
        }

/* Cargar imágenes */
.formulario-usuario-app input[type=file]{
    font-size: 12px;
}
.formulario-usuario-app  input#file-upload-button{
    font-size: 12px;
    width: 10px;
}

/* Localización   */
#arbol-provincia{
    margin-bottom: 5px;
    font-size: 16px;
    width: calc(100% - 80px);
}
.location-button{
    display: flex;
    padding: 5px 10px;
    margin: 5px auto;
}
    .location-button i{
        font-size: 16px;
    }

.label-form-input-location{
    display: grid;
    grid-template-columns: 1fr 2fr;

}
    #latitud, #longitud{
        width: 100%;
        margin-bottom: 5px;
        font-size: 16px;
    }
    .submit-arbol{
        display: flex;
        text-align: center;
        font-size: 16px;
        padding: 5px 10px;
        margin: 10px auto;
        border-radius: 5px;
    }


</style>