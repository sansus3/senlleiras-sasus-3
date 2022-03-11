<template>
    <div class="ficha">
        <template v-if="senlleira">
            <h2 class="ficha__title title">Ficha del arbol</h2>
            <!-- Datos de la tabla -->
            <div class="ficha__datos">
                <table class="ficha-tecnica-table">
                    <tr>
                        <th>Nombre del árbol:</th>
                        <td>{{ senlleira.nombreComun }}</td>
                    </tr>
                    <tr>
                        <th>Especie:</th>
                        <td>{{ senlleira.genus }} {{ senlleira.specie }}</td>
                    </tr>
                    <tr>
                        <th>Tipo de hoja:</th>
                        <td>{{ senlleira.specieData.hojaPerenne ? 'Perenne' : 'Caduca' }}</td>
                    </tr>
                    <tr>
                        <th>Ubicación:</th>
                        <td>{{ senlleira.lugar }}</td>
                    </tr>
                    <tr>
                        <th>Edad estimada:</th>
                        <td>{{ senlleira.edadEstimada }}</td>
                    </tr>
                    <tr>
                        <th>Altura estimada:</th>
                        <td>{{ senlleira.altura }}</td>
                    </tr>
                </table>
            </div>

            <!-- Imágenes -->
            <div class="ficha__images">
                <images-senlleiras :id="$route.params.id"></images-senlleiras>
            </div>
                
            <!-- Descripción de la senlleira -->
            <div class="ficha__description">
                <table class="ficha-tecnica-table-description">
                    <tr>
                        <th colspan="2">Historias leyendas y curiosidades</th>
                    </tr>
                    <tr>
                        <td colspan="2">{{ senlleira.comentarios }}</td>
                    </tr>
                    <tr>
                        <td class="table-usuario" colspan="2">
                            Ficha subida por:
                            <span id="name-user">{{senlleira.nombrePila}} {{senlleira.apellidos}}</span>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Mapa de coordenadas Leaflet -->
            <div class="ficha__mapa">
                <leaflet-vue
                    :location="[
                        {
                            tooltip: senlleira.nombreReferencia,
                            latLong:[senlleira.location.latitude, senlleira.location.longitude]
                        }
                    ]"
                >
                </leaflet-vue>
            </div>           
        </template>
    </div>
</template>

<script setup>
//Dependencias
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, onMounted, provide } from 'vue';
import LeafletVue from '@/components/leaflet/LeafletVue.vue';
import ImagesSenlleiras from '@/components/senlleira-components/ImagesSenlleiras.vue';
//Cargamos el store y el route
const store = useStore();
const route = useRoute();

//Ciclo de vida onCreated

onMounted(async () => {
    try {
        await store.dispatch('species/getListadoEspecies');
        store.dispatch('senlleiras/setSenlleira', route.params.id);
    } catch (error) {
        console.log('Mostrar.vue', error);
    }
});





//Varibables
/**
 * Obtenemos el Objeto con todos los datos "da árbore senlleira"
 */
const senlleira = computed(() => {
    let sen = store.state.senlleiras.senlleira;
    const sp = store.state.species.species.find(specie => specie.id === sen.idSpecie);
    return { ...sen, specieData: { ...sp } };
});

provide('senlleira', senlleira);
</script>

<style scoped lang="scss">
@import url(../../assets/scss/mostrar.scss);
</style>