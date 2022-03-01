<template>
    <div style="overflow-x:auto;">
        <table role="table">
            <caption>
                Catálogo de Árbores senlleiras
                <router-link type="button" :to="{ name: 'SolicitudSenlleira' }">Nueva senlleira</router-link>
            </caption>
            <thead role="rowgroup">
                <tr role="row">
                    <th></th>
                    <th role="columnheader">Nombre científico</th>
                    <th role="columnheader">Nombres comunes</th>
                    <th role="columnheader">Nombre del arbol</th>
                    <th role="columnheader">Concello</th>
                    <th role="columnheader">Información</th>
                </tr>
            </thead>

            <tbody role="rowgroup">
                <tr class="row" v-for="(item, index) in senlleiras" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td role="cell" data-th="Género y especie">{{ item.genus }} {{ item.specie }}</td>
                    <td role="cell" data-th="Nombre común">{{ item.nombreComun }}</td>
                    <td role="cell" data-th="Nombre de referencia">{{ item.nombreReferencia }}</td>
                    <td role="cell" data-th="Concello">{{ item.concello }}</td>
                    <td role="cell" data-th="Opciones">
                        <router-link
                            class="far fa-eye"
                            data-titulo="Mostrar"
                            :to="{
                                name: 'Senlleira',
                                params: {
                                    id: item.id
                                }
                            }"
                        ></router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
//Dependencias
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

//Cargamos el store
const store = useStore();

//Variables
const senlleiras = computed(() => {
    return store.state.senlleiras.senlleirasFiltradas;
});
//Ciclo de vida
onMounted(() => {
    store.dispatch('senlleiras/listSenlleiras');
});
</script>

<style scoped>
table {
    width: 100%;
}

table,
th,
td {
    border: 1px solid darkseagreen;
    border-collapse: collapse;
    padding: 5px;
    color: forestgreen;
}

th {
    border: 1px solid white;
    border-bottom-color: forestgreen;
}

td:nth-child(odd) {
    background-color: forestgreen;
    color: white;
}
</style>
