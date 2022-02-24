<template>

<HeaderSection/>

<section class="catalogo-administrativo-section">
    
<h2>Listado de categorías arbóreas</h2>
<table class="catalogo-administrativo">
    <input type="text" 
    name="" 
    id=""
    placeholder="Genero, especie, nombre"
    >

    <hr>

    <tr class="table-header">
        <th rowspan="2">Género</th>
        <th rowspan="2">Especie</th>
        <th colspan="2" >Nombre</th>
        <th rowspan="2">Descripción</th>
        
    </tr>
    <tr class="table-subheader">
        <th>Gallego</th>
        <th>Castellano</th>
    </tr>

    <tr>
        <td>Quercus</td>
        <td>Robur</td>
        <td>Carballo</td>
        <td>Roble</td>
        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quia.</td>
        <td>
            <ul class="table-icons">
                <li><a href="#" class="mostrar" data-titulo="Mostar"><i class="far fa-eye"></i></a></li>
                <li><a href="#" class="mostrar" data-titulo="Editar"><i class="fas fa-edit"></i></a></li>
                <li><a href="#" class="mostrar" data-titulo="Eliminar"><i class="fas fa-trash-alt"></i></a> </li>
            </ul> 
        </td>
    </tr>
    <tr>
        <td>Quercus</td>
        <td>Robur</td>
        <td>Carballo</td>
        <td>Roble</td>
        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quia.</td>
        <td>
            <ul class="table-icons">
                <li><a href="#" class="mostrar" data-titulo="Mostar"><i class="far fa-eye"></i></a></li>
                <li><a href="#" class="mostrar" data-titulo="Editar"><i class="fas fa-edit"></i></a></li>
                <li><a href="#" class="mostrar" data-titulo="Eliminar"><i class="fas fa-trash-alt"></i></a> </li>
            </ul> 
        </td>
    </tr>

    <tr>
        <td>Quercus</td>
        <td>Robur</td>
        <td>Carballo</td>
        <td>Roble</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error vitae in sint accusantium totam natus atque porro deleniti obcaecati.</td>
        <td>
            <ul class="table-icons">
                <li><a href="#" class="mostrar" data-titulo="Mostar"><i class="far fa-eye"></i></a></li>
                <li><a href="#" class="mostrar" data-titulo="Editar"><i class="fas fa-edit"></i></a></li>
                <li><a href="#" class="mostrar" data-titulo="Eliminar"><i class="fas fa-trash-alt"></i></a> </li>
            </ul> 
        </td>
    </tr>

</table>

</section>

<FooterSection />

</template>

<script>
import FooterSection from "../page_structure/FooterSection.vue";
import HeaderSection from "../page_structure/HeaderSection.vue";
export default {
    components: { FooterSection, HeaderSection }
}


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
