<template>
    <section class="section-header-web">
        <div class="header-carrusel-app">
            <!-- galeria -->
            <ul class="carrusel-images-galery">
                <li v-for="(item, index) in images" :key="index" :class="item.clases">
                    <img :src="item.url" alt="texto-ejemplo" />
                    <p v-if="showlegend" class="carrusel-description">{{ item.text }}</p>
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
        </div>
        <!-- indicador de posicion -->
        <ul class="div-carrusel-position">
            <li @click="change(index)" v-for="(item, index) in images" :key="index">
                <i class="fas fa-circle" :class="item.puntos"></i>
            </li>
        </ul>
        <div class="carrusel-txt">{{ carruseltext }}</div>
    </section>
</template>

<script setup>

const props = defineProps({
    /**
     * Array de objetos. Formato:
    [
        {
            url: './conxo.jpg',
            text: 'Carballo del Bosque del Banquete de Conxo',
            clases: { 'carrusel-image': true, 'carruselmostrado': true },//El primero mostrado
            puntos: { 'posicionado': true },
        },
    ]
     */
    images: {
        type: Array
    },
    /**
     * {Boolean} Muestra o no la leyenda de foto de la página
     */
    showlegend: {
        type: Boolean,
        default: true
    },
    carruseltext: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem nam quae libero beatae tenetur earum dolore ea minus, laboriosam conseqe nam!'
    }

});



let contador = 0;

const change = i => {
    limpiar();
    contador = i;
    props.images[i].clases['carruselmostrado'] = true;
    props.images[i].puntos['posicionado'] = true;
}

const turnLeft = () => {
    limpiar();
    contador--;
    //console.log(contador)
    if (contador < 0) {
        contador = props.images.length - 1;
        //console.log(contador)
    }
    props.images[contador].clases['carruselmostrado'] = true;
    props.images[contador].puntos['posicionado'] = true;
}

const turnRight = () => {
    limpiar();
    contador++
    if (contador > props.images.length - 1) {
        contador = 0
        //console.log(contador)
    }
    props.images[contador].clases['carruselmostrado'] = true;
    props.images[contador].puntos['posicionado'] = true;
}

const limpiar = () => {
    for (let i = 0, tam = props.images.length; i < tam; i++) {
        props.images[i].clases['carruselmostrado'] = false;
        props.images[i].puntos['posicionado'] = false;
    }
}

setInterval(() => {
    contador++;
    if (contador > props.images.length - 1) {
        contador = 0;
    }
    limpiar();
    props.images[contador].clases['carruselmostrado'] = true;
    props.images[contador].puntos['posicionado'] = true;
}, 12000)


</script>


<style scoped>
/* CARRUSEL     */

.header-carrusel-app {
    display: inline-block;
    position: relative;
    width: 100%;
}
.carrusel-images-galery {
    position: relative;
    height: 400px;
    width: inherit;
}
.carrusel-image {
    display: flex;
    width: inherit;
    height: inherit;
    position: absolute;
    opacity: 0;
}
.carruselmostrado {
    opacity: 1;
}
.carrusel-image img {
    width: 100%;
    height: inherit;
    object-fit: cover;
}
.carrusel-image .carrusel-description {
    display: flex;
    position: absolute;
    width: 70%;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    background-color: rgba(150, 150, 150, 0.6);
    color: var(--colortitulo);
    backdrop-filter: blur(1px);
}
/* Botones avance/retroceso carrusel  */

.carrusel-button {
    width: 30px;
    margin: 0 30px;
    font-size: 35px;
    text-align: center;
    color: var(--colorsecundario);
    opacity: 1;
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

@media screen and (max-width: 1080px) {
    .carrusel-images-galery {
        height: 250px;
    }
    .header-carrusel-app .carrusel-button {
        font-size: 22px;
        margin: 0 10px;
    }
}
</style>