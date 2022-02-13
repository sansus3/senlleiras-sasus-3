<template>
    <section class="section-header-web">
        <div class="header-carrusel-app">
            <!-- galeria -->
            <ul class="carrusel-images-galery">
                <li v-for="(item, index) in images" :key="index" :class="item.clases">
                    <img :src="item.url" alt="texto-ejemplo" />
                    <p class="carrusel-description">{{ item.text }}</p>
                </li>
            </ul>
            <!-- botones -->
            <div>
                <a @click.prevent="turnLeft" href="#" class="carrusel-button carrusel-prev">
                    <i class="fas fa-chevron-circle-left"></i>
                </a>
                <a @click.prevent="turnRight" href="#" class="carrusel-button carrusel-next">
                    <i class="fas fa-chevron-circle-right"></i>
                </a>
            </div>
            <!-- indicador de posicion -->
            <ul class="div-carrusel-position">
                <li @click="change(index)" v-for="(item, index) in images" :key="index">
                    <i class="fas fa-circle" :class="item.puntos"></i>
                </li>
            </ul>
        </div>
        <div
            class="carrusel-txt"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem nam quae libero beatae tenetur earum dolore ea minus, laboriosam conseqe nam!</div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
const images = reactive([
    {
        url: './conxo.jpg',
        text: 'Carballo del Bosque del Banquete de Conxo',
        clases: { 'carrusel-image': true, 'carruselmostrado': true },
        puntos: { 'posicionado': true },
    },
    {
        url: 'http://placekitten.com/320/249',
        text: 'chámome Gusifredo, e levei un bo susto',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
    {
        url: 'http://placekitten.com/320/248',
        text: 'Ese do espello son eu? Pensei que era unha Galiña',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
    {
        url: 'http://placekitten.com/320/247',
        text: 'A eso lle chamas pienso? comeo tí lambón',
        clases: { 'carrusel-image': true, 'carruselmostrado': false },
        puntos: { 'posicionado': false },
    },
]);

let contador = 0;

const change = i => {
    limpiar();
    contador = i;
    images[i].clases['carruselmostrado'] = true;
    images[i].puntos['posicionado'] = true;
}

const turnLeft = () => {
    limpiar();
    contador--;
    console.log(contador)
    if (contador < 0) {
        contador = 3
        console.log(contador)
    }
    images[contador].clases['carruselmostrado'] = true;
    images[contador].puntos['posicionado'] = true;
}

const turnRight = () => {
    limpiar();
    contador++
    if (contador > 3) {
        contador = 0
        console.log(contador)
    }
    images[contador].clases['carruselmostrado'] = true;
    images[contador].puntos['posicionado'] = true;
}

const limpiar = () => {
    for (let i = 0, tam = images.length; i < tam; i++) {
        images[i].clases['carruselmostrado'] = false;
        images[i].puntos['posicionado'] = false;
    }
}

</script>


<style scoped>
/* CARRUSEL     */

.header-carrusel-app {
    display: inline-block;
    position: relative;
    height: 250px;
    width: 100%;
}
.carrusel-images-galery {
    position: relative;
    height: inherit;
    width: inherit;
}
.carrusel-image {
    width: inherit;
    position: absolute;
    opacity: 0;
    transition: all ease-in-out 0.9s;
}
.carruselmostrado {
    opacity: 1;
}
.carrusel-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.carrusel-image .carrusel-description {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 70%;
    height: 90px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 5px;
    font-size: clamp(1rem, 2.5vw, 2rem);
    text-align: center;
    font-weight: bold;
    background-color: rgba(150, 150, 150, 0.7);
    color: var(--colortitulo);
}
/* Botones avance/retroceso carrusel  */

.carrusel-button {
    width: 30px;
    margin: 0 10px;
    font-size: 20px;
    text-align: center;
    color: var(--colortitulo);
    opacity: 0.7;
}
.header-carrusel-app .carrusel-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
}
.header-carrusel-app .carrusel-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}

/* Indicador de posicion */

.div-carrusel-position {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 5px;
    height: 15px;
}
.div-carrusel-position .fa-circle:hover{
    color: var(--colorsecundario);
    cursor: pointer;
}
.carrusel-position {
    font-size: 10px;
    color: var(--colorsecundario);
    transition: all ease-in-out 0.2s;
}

.posicionado {
    color: var(--colorprincipal);
    font-size: 12px;
    transition: all ease-in-out 0.2s;
}
/* texto */

.carrusel-txt {
    font-size: 18px;
    text-align: justify;
    padding: 10px;
}
</style>