<template>
    <div class="catalogo">
        <!-- Vista de la cabecera página -->
        <header-section></header-section>

        <!-- Catálogo -->
        <header class="opciones">
            <h2 class="opciones__titulo">
                Catálogo
            </h2>
            <ul>
                <li>
                    <router-link 
                    class="btn" 
                    :to="{ name: 'SolicitudSenlleira' }"
                    >
                    Nueva senlleira
                    </router-link>
                </li>
            </ul>
        </header>
        <table class="catalogo-administrativo">
            <tr class="table-header">
                <th>Nombre científico</th>
                <th>Nombres comunes</th>
                <th>Nombre del arbol</th>
                <th>Descripción</th>
                <th>Opciones</th>
            </tr>
            <tr v-for="item in senlleiras" :key="item.id">
                <td>{{item.genus}} {{item.specie}}</td>
                <td>{{item.nombreComun}}</td>
                <td>{{item.nombreArbol}} ({{item.provincia}})</td>
                <td>{{item.comentarios}}</td>
                <td>
                    <router-link
                        class="far fa-eye"
                        data-titulo="Mostrar"
                        :to="{
                            name: 'CatalogoSenlleira',
                            params: {
                                id: item.id
                            }
                        }"
                    >
                    </router-link>
                </td>
            </tr>          
        </table>
        <!-- End Catálogo -->

        <!-- Vista del pie de página -->
        <footer-section></footer-section>
    </div>
</template>

<script setup>
//Dependencias
import HeaderSection from '@/views/page_structure/HeaderSection.vue';
import FooterSection from '@/views/page_structure/FooterSection.vue';
import { onMounted,computed } from 'vue';
import { useStore } from 'vuex';

//Cargamos el store
const store = useStore();

//Variables
const senlleiras = computed(()=>{
    return store.state.senlleiras.senlleirasFiltradas;
});
//Ciclo de vida
onMounted(()=>{
    store.dispatch('senlleiras/listSenlleiras');
});
</script>

<style scoped>
.opciones{
   display: flex;
   background-color: var(--colorprincipal);
}
.opciones>*{
    flex: auto;
    box-shadow: inset 0 2px 2px black;
    background-color: orange;
}
.btn{
    display: block;
    width: fit-content;
    white-space: nowrap;
    background-color: red;
    
}
.catalogo-administrativo-section h2 {
    text-align: center;
    font-size: 30px;
    margin: 10px;
}

.catalogo-administrativo {
    width: 100%;
    font-size: 14px;
}
.catalogo-administrativo th {
    background-color: var(--colorprincipal);
    color: white;
    font-size: 22px;
}

.table-header th:nth-child(-n + 2) {
    width: 200px;
}
.table-subheader th {
    width: 200px;
    font-size: 18px;
}
.table-header th:last-child {
    width: 150px;
    margin: 0 auto;
}
tr:nth-child(odd) {
    background-color: var(--colorsecundario);
}
tr td {
    padding-left: 5px;
}

.table-icons {
    display: flex;
    width: 100px;
    justify-content: center;
    margin: auto;
    padding: auto;
    align-items: center;
    gap: 10px;
}
.table-icons i {
    font-size: 18px;
    color: var(--colorprincipal);
}

.mostrar {
    position: relative;
}
.mostrar:hover::before {
    content: attr(data-titulo);
    position: absolute;
    background-color: gray;
    color: white;
    font-size: 16px;
    padding: 0 5px;
    transform: translate(-50%, -50%);
    top: 30px;
    left: 50%;
    z-index: 1;
}
</style>
