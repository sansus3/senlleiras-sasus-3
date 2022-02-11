<template>
    <section class="section-header-web">
        <div class="header-carrusel-app">
            <!-- galeria -->
            <ul class="carrusel-images-galery">
                <li v-for="(item,index) in images" :key="index" :class="item.clases">
                    <img :src="item.url" alt="texto-ejemplo" />
                    <p class="carrusel-description">{{item.text}}</p>
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
                 <li v-for="(item,index) in images" :key="index">
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
            text: 'Son un michi-michi sentado sobre unha tela vermella',
            clases: {'carrusel-image':true,'carruselmostrado':true},
            puntos: {'posicionado':true},
        },
        {
            url: 'http://placekitten.com/320/249',
            text: 'chámome Gusifredo, e levei un bo susto',
            clases: {'carrusel-image':true,'carruselmostrado':false},
            puntos: {'posicionado':false},
        },
        {
            url: 'http://placekitten.com/320/248',
            text: 'Ese do espello son eu? Pensei que era unha Galiña',
            clases: {'carrusel-image':true,'carruselmostrado':false},
            puntos: {'posicionado':false},
        },
        {
            url: 'http://placekitten.com/320/247',
            text: 'A eso lle chamas pienso? comeo tí lambón',
            clases: {'carrusel-image':true,'carruselmostrado':false},
            puntos: {'posicionado':false},
        },
    ]);

    let contador = 0;

    const turnLeft = () => {
        limpiar();
        contador--;
        console.log(contador)
        if(contador <0){
            contador = 3
            console.log(contador)
        }
        images[contador].clases['carruselmostrado']=true;
        images[contador].puntos['posicionado']=true;
    }

    const turnRight = () => {
        limpiar();
        contador++
        if(contador >3){
            contador = 0
            console.log(contador)
        }
        images[contador].clases['carruselmostrado']=true;
        images[contador].puntos['posicionado']=true;
    }

    const limpiar = () => {
        for(let i = 0, tam = images.length; i< tam; i++){
            images[i].clases['carruselmostrado']=false;
            images[i].puntos['posicionado']=false;
        }
    }

</script>
