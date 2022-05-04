<template>
    <div class="ficha">
        <template v-if="senlleira">
            <h2 class="ficha__title title">Ficha da árbore</h2>
            <!-- Datos de la tabla -->
            <div class="ficha__datos">
                <table class="ficha-tecnica-table">
                    <tr>
                        <th>Nome da árbore:</th>
                        <td>{{ senlleira.nombreComun }}</td>
                    </tr>
                    <tr>
                        <th>Especie:</th>
                        <td>{{ senlleira.genus }} {{ senlleira.specie }}</td>
                    </tr>
                    <tr>
                        <th>Tipo da folla:</th>
                        <td>{{ senlleira.specieData.hojaPerenne ? 'Perenne' : 'Caduca' }}</td>
                    </tr>
                    <tr>
                        <th>Tipo de flor:</th>
                        <td>{{ senlleira.specieData.ginnospermas ? 'Gimnospermas' : 'Angiospermas' }}</td>
                    </tr>
                    <tr>
                        <th>Ubicación:</th>
                        <td>{{ senlleira.lugar }}</td>
                    </tr>
                    <tr v-if="senlleira.edadEstimada > 0">
                        <th>Idade estimada:</th>
                        <td>{{ senlleira.edadEstimada }}</td>
                    </tr>
                    <tr v-if="senlleira.diametro > 0">
                        <th>Diámetro da copa:</th>
                        <td>{{ senlleira.diametro }}</td>
                    </tr>
                    <tr v-if="senlleira.perimetroTronco > 0">
                        <th>Perímetro do tronco:</th>
                        <td>{{ senlleira.perimetroTronco }}</td>
                    </tr>
                    <tr v-if="senlleira.altura > 0">
                        <th>Altura estimada :</th>
                        <td>{{ senlleira.altura }}</td>
                    </tr>
                     <tr v-if="(senlleira.destacaAntiguedad==true || senlleira.destacaTamano == true || senlleira.destacaSituacion == true || senlleira.destacaContexto ==true)" >
                        <th>Motivo pola elección da árbore:</th>
                        <td> {{'Antiguedad'}}, {{'Situación'}}, {{'Tamaño'}}, {{'Contexto histórico'}}</td>
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
                        <th colspan="2">Historias lendas e curiosidades</th>
                    </tr>
                    <tr>
                        <td colspan="2">{{ senlleira.usosCuriosidades }}</td>
                    </tr>
                </table>
           
            
                <table class="ficha-tecnica-table-description">
                    <tr>
                        <th colspan="2">Outros Datos</th>
                    </tr>
                    <tr>
                        <td colspan="2">{{ senlleira.comentarios }}</td>
                    </tr>
                    <tr v-if="(senlleira.nombrePila != '' || senlleira.apellidos != '' || senlleira.comentarios!= '')">
                        <td class="table-usuario" colspan="2">
                            Ficha subida por:
                            <span id="name-user">{{ senlleira.nombrePila }} {{ senlleira.apellidos }}</span>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- Mapa de coordenadas Leaflet -->
            <div class="ficha__mapa">
                <leaflet-vue :location="[
                    {
                        tooltip: senlleira.nombreReferencia,
                        latLong: [senlleira.location.latitude, senlleira.location.longitude]
                    }
                ]" :centrado="[senlleira.location.latitude, senlleira.location.longitude]">
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
import LeafletVue from '@/components/maps/LeafletVue.vue';
import ImagesSenlleiras from '@/components/senlleira-components/ImagesSenlleiras.vue';
//Cargamos el store y el route
const store = useStore();
const route = useRoute();



const getListadoSenlleiras = async () => {
    try {
        await store.dispatch('senlleiras/listSenlleiras');
    } catch (error) {
        console.log('Mostrar.vue', error);
    }
}

//Ciclo de vida
onMounted(async () => {
    await store.dispatch('species/getListadoEspecies');//Listado del modelo de datos de senlleiras para rellenar la ficha
    await store.dispatch('senlleiras/getSenlleira', route.params.id);
});







//Varibables
/**
 * Obtenemos el Objeto con todos los datos "da árbore senlleira"
 */
const senlleira = computed(() => {
    const sen = store.state.senlleiras.senlleira;
    const sp = store.state.species.species.find(specie => specie.id === sen.idSpecie);

    return { ...sen, specieData: { ...sp } };
});



provide('senlleira', senlleira);
</script>

<style scoped lang="scss">
@import url(../../assets/scss/ficha-tecnica.scss);
</style>