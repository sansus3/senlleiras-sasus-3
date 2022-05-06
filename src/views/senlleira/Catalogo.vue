<!-- 
    Vista donde mostramos el catálogo de senlleiras.
 -->
<template>
    <div class="table-container">
        <table role="table">           
            <!-- thead Componente -->
            <catalogo-cabecera></catalogo-cabecera>
            <!-- tbody -->
            <tbody role="rowgroup">
                <tr class="row" v-for="(item, index) in senlleiras" :key="item.id">
                    <td :data-set="index+1"><span class="indice">{{ index + 1 }}</span></td>
                    <td role="cell" data-th="Género y especie">
                        <strong>{{ item.genus }}</strong>
                        {{ item.specie }}
                    </td>
                    <td role="cell" data-th="Nombre común">{{ item.nombreComun }}</td>
                    <td role="cell" data-th="Nombre de referencia">{{ item.nombreReferencia }}</td>
                    <td role="cell" data-th="Lugar">{{ item.lugar }}</td>
                    <td role="cell" data-th="Opciones">
                        <router-link
                            data-titulo="Mostrar"
                            title="Máis info"
                            :to="{
                                name: 'Senlleira',
                                params: {
                                    id: item.id
                                }
                            }"
                        >👈</router-link>
                        <a title="Xeolocalización" target="blank" :href="`https://maps.google.com/?q=${item.location.latitude},${item.location.longitude}`">
                        🎯
                        </a>
                    </td>
                </tr>
            </tbody>
            <caption v-if="fetchError">
                <div class="msg-error" role="alert">Problema de conexión. Comprobe a súa rede</div>
            </caption> 
        </table>
        <div style="text-align: center;">
            <the-loader foreground="green" :loading="loading"></the-loader>
        </div>
    </div>
    <!-- <button @click="nextGo(senlleiras.slice(-1))">Siguiente</button> -->
</template>

<script setup>
//Dependencias
import TheLoader from '@/components/TheLoader.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import CatalogoCabecera from '@/components/senlleira-components/CatalogoCabecera.vue';
//Cargamos el store
const store = useStore();


/**
 * Obtenemos el catálogo de las senlleiras filtrados
 */
const senlleiras = computed(() => {
    return store.state.senlleiras.senlleirasFiltradas;
});
const loading = ref(false); //Variable que carga un loader en función de la carga asíncrona de los datos
const fetchError = ref(false);

/**
 * Lanzamos la acción vuex/store para obtener los datos
 */
(async () => {
    try {
        loading.value = true;
        //Este await es importante para poder controlar el error del catch
        await store.dispatch('senlleiras/listSenlleiras');
    } catch (error) {
        console.log('Catalogo.vue-------->',error);
        fetchError.value=true;
    } finally {
        loading.value = false;
    }

})();

</script>

<style scoped lang="scss">
@import url(../../assets/scss/table.scss);
</style>
