<template>
    <div class="carrusel">
        <!-- galeria -->
        <ul class="carrusel-images-galery">
            <li v-for="(item, index) in images" :key="index" :class="item.clases">
                <img
                    class="carrusel__image"
                    :src="item.url"
                    :title="title"
                    :alt="alt"
                />
                <p v-if="showlegend" class="carrusel__description">{{ item.text }}</p>
            </li>
        </ul>

        <!-- botones -->
        <a @click.prevent="turnLeft" href="#" class="carrusel__button carrusel__button--prev">
            <i class="fas fa-chevron-circle-left"></i>
        </a>
        <a @click.prevent="turnRight" href="#" class="carrusel__button carrusel__button--next">
            <i class="fas fa-chevron-circle-right"></i>
        </a>

        <!-- indicador de posicion -->
        <ul class="position">
            <li
                class="position__item"
                @click="change(index)"
                v-for="(item, index) in images"
                :key="index"
            >
                <i class="fas fa-circle" :class="item.puntos"></i>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    /**
     * 
     * @param {Array} images - Array de objetos con el formato descrito abajo
     * @description Array de objetos. Formato:
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
    /**
     * {String} La altura mínima que ponemos al carrusel
     */
    minHeight: {
        type: String,
        default: '300px'
    },
    /**
     * {String} title - Atributo title de las imágenes
     */
    title: {
        type: String,
        default: ''
    },
    /**
     * {String} alt - Atributo alt de las imágens
     */
    alt: {
        type: String,
        default: ''
    },
    /**
     * {Number} contadorInit - Donde situar el contador por defecto
     */
    contadorInit: {
        type: Number,
        default: 0
    }

});



let contador = props.contadorInit;

const change = i => {
    limpiar();
    contador = i;
    props.images[i].clases['carruselmostrado'] = true;
    props.images[i].puntos['posicionado'] = true;
    //
    deleteInterval();
    galeriaLoad();
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

    //
    deleteInterval();
    galeriaLoad();
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

    //
    deleteInterval();
    galeriaLoad();
}

const limpiar = () => {
    for (let i = 0, tam = props.images.length; i < tam; i++) {
        props.images[i].clases['carruselmostrado'] = false;
        props.images[i].puntos['posicionado'] = false;
    }
}

let interval = null;
const deleteInterval = () => {
    clearInterval(interval);
}
const galeriaLoad = () => {
    interval = setInterval(() => {
        contador++;
        if (contador > props.images.length - 1) {
            contador = 0;
        }
        limpiar();
        props.images[contador].clases['carruselmostrado'] = true;
        props.images[contador].puntos['posicionado'] = true;
    }, 12000)
}

galeriaLoad();


</script>


<style scoped lang="scss">
@import url(../../assets/scss/carrusel.scss);
</style>