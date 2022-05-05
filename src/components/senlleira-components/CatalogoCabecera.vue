<template>
    <caption class="title">
        Catálogo de Árbores senlleiras. <strong>Total: {{countRows}}</strong>       
    </caption>
    <thead role="rowgroup">
        <tr role="row">
            <th> 
                <router-link 
                    :to="{ name: 'SolicitudSenlleira' }" 
                    v-slot="{ navigate }">
                        <button
                            class="btn btn-primary"
                            @click="navigate" 
                            @keypress.enter="navigate">
                            Nova senlleira
                        </button>
                </router-link>
            </th>
            <th role="columnheader">
                <a href="#" @click.prevent="ordernar('genus')">Xénero</a>
                e
                <a href="#" @click.prevent="ordernar('specie')">especie</a>
            </th>
            <th role="columnheader">
                <a href="#" @click.prevent="ordernar('nombreComun')">Nomes comúns</a>
            </th>
            <th role="columnheader">
                <a href="#" @click.prevent="ordernar('nombreReferencia')">Referencia</a>
            </th>
            <th role="columnheader">
                <a href="#" @click.prevent="ordernar('lugar')">Lugar</a>
            </th>
            <th role="columnheader">Información</th>
        </tr>
    </thead>
</template>

<script setup>
//Dependencias
import { reactive,computed } from 'vue';
import { useStore } from 'vuex';
//Carga de vuex/store
const store = useStore();
//Variables
const orden = reactive({
    genus: true,
    specie: true,
    nombreComun: true,
    nombreReferencia: true,
    concello: true,
});

//Total de senlleiras del catálogo
const countRows = computed(()=>store.getters['senlleiras/getSenlleirasLength']);

/**
 * Método que obtiene los registros de una "Senlleira"
 * @returns Género, especie, nombre común, nombre de referencia, lugar
 */
const ordernar = (genus) => {
    orden[genus] = !orden[genus];
    store.dispatch('senlleiras/senlleiraSort', { field: genus, sort: orden[genus] })
};
</script>