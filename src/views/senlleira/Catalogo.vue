<template>
    <div style="overflow-x:auto;">
        <table role="table">
            <caption>
                Catálogo de Árbores senlleiras
                <router-link type="button" :to="{ name: 'SolicitudSenlleira' }">Nueva senlleira</router-link>
            </caption>
            <thead role="rowgroup">
                <tr role="row">
                    <th>

                    </th>
                    <th role="columnheader">Nombre científico</th>
                    <th role="columnheader">Nombres comunes</th>
                    <th role="columnheader">Nombre del arbol</th>
                    <th role="columnheader">Concello</th>
                    <th role="columnheader">Información</th>
                </tr>
            </thead>

            <tbody role="rowgroup">
                <tr class="row" v-for="(item,index) in senlleiras" :key="item.id">
                    <td>
                        {{index+1}}
                    </td>
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
@media only screen and (min-width: 760px),
    (max-device-width: 768px) and (min-device-width: 1024px) {
        table,
        th,
        td {
            border: 1px solid darkseagreen;
            border-collapse: collapse;
            padding: 5px;
            color: forestgreen;
        }

        th{
           border: 1px solid white; 
           border-bottom-color: forestgreen;
        }
 
        td:nth-child(odd) {
            background-color: forestgreen;
            color: white;
        }
}
/*
	Max width before this PARTICULAR table gets nasty. This query will take effect for any screen smaller than 760px and also iPads specifically.
	*/
@media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr,
    caption {
        display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    tr {
        margin: 0 0 1rem 0;
    }

    tr:nth-child(odd) {
        background: forestgreen;
        color: white;
    }

    td {
        /* Behave  like a "row" */
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
    }

    td:before {
        /* Now like a table header */
        position: absolute;
        /* Top/left values mimic padding */
        top: 0;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
    }

    /*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
		*/
    td::before {
        font-weight: bold;
    }
    td:nth-of-type(1):before {
        content: "Fila";
    }
    td:nth-of-type(2):before {
        content: "Nombre científico";
    }
    td:nth-of-type(3):before {
        content: "Nombres comunes";
    }
    td:nth-of-type(4):before {
        content: "Nombre del árbol";
    }
    td:nth-of-type(5):before {
        content: "Concello";
    }
    td:nth-of-type(6):before {
        content: "Visualización";
    }
    td:nth-of-type(7):before {
        content: "Secret Alias";
    }
    td:nth-of-type(8):before {
        content: "Date of Birth";
    }
    td:nth-of-type(9):before {
        content: "Dream Vacation City";
    }
    td:nth-of-type(10):before {
        content: "GPA";
    }
    td:nth-of-type(11):before {
        content: "Arbitrary Data";
    }
}
</style>
