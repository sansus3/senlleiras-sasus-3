<template>
  <section class="catalogo-especies-section">
        <h2 class="title">Catalogo de árbores</h2>
        <div class="catalogo-arboles-app">
            
            <div class="arboles-card animation-flip-vertical" :class="flipVertical">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_1.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_2.jpg" alt=""></div>
                </div>
            </div>
            <div class="arboles-card animation-horizontal" :class="animationHorizontal">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_3.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_4.jpg" alt=""></div>
                </div>
            </div>
            <div class="arboles-card animation-horizontal" :class="animationHorizontal">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_5.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_6.jpg" alt=""></div>
                </div>
            </div>
            <div class="arboles-card animation-vertical" :class="animationVertical">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_7.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_8.jpg" alt=""></div>
                </div>
            </div>
            <div class="arboles-card animation-flip" :class="flipHorizontal">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_9.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_10.jpg" alt=""></div>
                </div>
            </div>
            <div class="arboles-card animation-flip-vertical" :class="flipVertical">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_11.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_12.jpg" alt=""></div>
                </div>
            </div>
            <div class="arboles-card animation-vertical" :class="animationVertical">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_13.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_14.jpg" alt=""></div>
                </div>
            </div>
            <div class="arboles-card animation-flip-vertical" :class="flipVertical">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_15.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_16.jpg" alt=""></div>
                </div>
            </div>
            <div class="arboles-card animation-flip" :class="flipHorizontal">
                <div class="arboles-inner">
                        <div class="arboles-front"><img src="../../assets/gallery/senlleiras_17.jpg" alt="imagen-ejemplo"></div>
                        <div class="arboles-back"><img src="../../assets/gallery/senlleiras_18.jpg" alt=""></div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>

import { onMounted,reactive } from "vue";

const animationHorizontal = reactive({
    horizontalMovement: true,
});
const animationVertical = reactive({
    verticalMovement: true,
})
const flipVertical = reactive({
    verticalFlip: true,
})
const flipHorizontal = reactive({
    horizontalFlip: true,
})
onMounted(()=>{
    setInterval(()=>{
      animationHorizontal.horizontalMovement=!animationHorizontal.horizontalMovement;},7000)
    setInterval(()=>{animationVertical.verticalMovement=!animationVertical.verticalMovement;},9000)
    setInterval(()=>{flipVertical.verticalFlip=!flipVertical.verticalFlip;},12000)
    setInterval(()=>{flipHorizontal.horizontalFlip=!flipHorizontal.horizontalFlip;},5000)
});

</script>

<style>
/* CATALOGO ARBOLES  */
.catalogo-especies-section{
    user-select: none;
}

.catalogo-especies-section h2{
    text-align: center;
    text-transform: uppercase;
    padding: 10px;
    font-size: var(--titulosize); 

}

.catalogo-arboles-app{
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3 , minmax(100px,300px));
    grid-template-rows: repeat(3, minmax(100px,300px));
    justify-content: center;
    max-width: 90%;
}

@media screen and (max-width:1000px){
    .catalogo-arboles-app{
        grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(3,150px);
    }
}
@media screen and (max-width:450px){
    .catalogo-arboles-app{
        grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3,100px);
    }
}

/* Tarjeta de los arboles individual */
.arboles-card{
    background-color: transparent;
    display: flex;
    width: 100%;
    height: 100%;
    perspective: 1000px;
    overflow: hidden;
}
.arboles-inner{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
}
     .arboles-front, .arboles-back{
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden; 
    }
    .arboles-front  img, .arboles-back img{
        width: 100%;
        height: 100%;
        object-fit: cover;    
    }
        .arboles-back{
            transform: rotateY(180deg);
            
        }

/* ANIMACIONES   */

/* Tarjeta deslizamiento vertical */

.verticalMovement .arboles-inner{
    transform: translateY(-100%);
}
.animation-vertical .arboles-inner .arboles-back{
    transform: translateY(100%);
}  

/* Tarjeta deslizamiento horizontal */

.horizontalMovement .arboles-inner{
    transform: translateX(-100%);
}
.animation-horizontal .arboles-inner .arboles-back{
    transform: translateX(100%);
}

/* Tarjeta flip horizontal */

.horizontalFlip .arboles-inner{
    transform: rotateY(180deg);
}
.animation-flip .arboles-inner .arboles-back{
    transform: rotateY(180deg);
}

/* Tarjeta flip vertical */
.verticalFlip .arboles-inner{
    transform: rotateX(180deg);
}
.animation-flip-vertical .arboles-inner .arboles-back{
    transform: rotateX(180deg);
}
</style>