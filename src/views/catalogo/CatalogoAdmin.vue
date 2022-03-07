<template>

<HeaderSection/>
<Menuweb/>
<section class="catalogo-administrativo-section">
    
<h2>Listado de categorías arbóreas</h2>
<table class="catalogo-administrativo">
    

    <tr class="table-header">
        <th>Especie</th>
        <th>Provincia</th>
        <th>Nombre</th>
        <th>Descripción</th>
               
    </tr>
    <tr v-for="item in arboles" :key="item.id">
        <td>{{item.especie}}</td>
        <td>{{item.arbolProvincia}}</td>
        <td>{{item.nombreArbol}}</td>
        <td>{{item.descriptionArbol}}</td>

    </tr>
  

   
   

    

</table>
{{arboles}}

</section>

<FooterSection />

</template>

<script setup>
import FooterSection from "../page_structure/FooterSection.vue";
import HeaderSection from "../page_structure/HeaderSection.vue";
import Menuweb from "../menu-top-web/Menuweb.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
//onCreated
store.dispatch('arboles/leerDatos');
//Variables
const arboles = computed(() =>{
    return store.state.arboles.arboles;
});




</script>



<style>
.catalogo-administrativo-section h2{
    text-align: center;
    font-size: var(--titulosize);
    margin: 10px;
}

.catalogo-administrativo{
    width: 100%;
    font-size: var(--textosize);
}
    .catalogo-administrativo th{
        background-color: var(--colorprincipal);
        color: white;
        font-size: var(--textosize);
    }

    .table-header th:nth-child(-n+2){
        width: 200px;
    }
        .table-subheader th{
            width: 200px;
            font-size: var(--textosize);
        }
    .table-header th:last-child{
        width: 150px;
        margin: 0 auto;
    }
tr:nth-child(odd){
    background-color: var(--colorsecundario);
}
tr td {
    padding-left: 5px;
}


 .table-icons{
     display: flex;
     width: 100px;
     justify-content: center;
     margin: auto;
     padding: auto;
     align-items: center;
     gap: 10px;
 }
    .table-icons i{
        font-size: var(--textosize);
        color: var(--colorprincipal);
    }

    .mostrar{
       position: relative;
    }
    .mostrar:hover::before{
        content: attr(data-titulo);
        position: absolute;
        background-color: gray;
        color: white;
        font-size: var(--textosize);
        padding: 0 5px;
        transform: translate(-50% , -50%);
        top: 30px;
        left: 50%;
        z-index: 1;
    }



</style>
