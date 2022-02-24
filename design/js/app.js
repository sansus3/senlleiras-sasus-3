"use strict"
//cabecera que se esconde - expande cuando el usuario sube o baja (movil)
const menuHeader = document.querySelector(".header-nav-app");
var lastScrolltop = 0; 

document.addEventListener(
    "scroll",
    ()=>{
     
    var st = window.pageXOffset || document.documentElement.scrollTop;
        if(st > lastScrolltop){
            menuHeader.classList.add("reduced");
           
        }else{
            menuHeader.classList.remove("reduced");
            
        };     
        lastScrolltop = st <= 40 ? 40 : st;
       
    }
)
  
//Buscador menu laptop

const buscadorIcon = document.querySelector(".btn-search-laptop");
const buscadorLi = document.querySelector(".header-search-laptop")

buscadorIcon.addEventListener(
    "click",
    ()=>{
        buscadorLi.classList.toggle("search-li-animation");
        console.log("a")
    }
)


// Carrusel

const imagenesCarrusel = document.querySelectorAll(".carrusel-image");
const puntosCarrusel = document.querySelectorAll(".carrusel-position");
const botonatras = document.querySelector(".carrusel-prev");
const botonadelante = document.querySelector(".carrusel-next");

var contador = 0;

window.onload = function(){
    puntosCarrusel[0].classList.add("posicionado");
    imagenesCarrusel[contador].classList.add("carruselmostrado");
}
const limpiar = () => {
    puntosCarrusel.forEach(
        elemento =>{
            elemento.classList.remove("posicionado")
        }
    );
    imagenesCarrusel.forEach(
        elemento =>{
            elemento.classList.remove("carruselmostrado")
        }
    );  
}
botonatras.addEventListener(
    "click",
    ()=>
    {
        limpiar();
        contador--
        if(contador <0){
            contador = 3
        }
        puntosCarrusel[contador].classList.add("posicionado")
        imagenesCarrusel[contador].classList.add("carruselmostrado");
    }
);
botonadelante.addEventListener(
    "click",
    ()=>{
        limpiar();
        contador++
        if(contador >3){
            contador = 0
        }
        puntosCarrusel[contador].classList.add("posicionado")
        imagenesCarrusel[contador].classList.add("carruselmostrado")
    }
);
setInterval(function(){
    contador++;
    if(contador >3){
        contador = 0;
    }
    limpiar();
    puntosCarrusel[contador].classList.add("posicionado")
    imagenesCarrusel[contador].classList.add("carruselmostrado")
},12000)

//ANIMACION GALERIA

const verticalItem = document.querySelectorAll(".animation-vertical");
const flipItem = document.querySelectorAll(".animation-flip");
const horizontalItem = document.querySelectorAll(".animation-horizontal");
const verticalFlipItem = document.querySelectorAll(".animation-flip-vertical")

//Animaciones
const horizontalMovement = "horizontalMovement";
const verticalMovement = "verticalMovement";
const horizontalFlip = "horizontalFlip";
const verticalFlip = "verticalFlip";

var execAnimation = (item,transition,interval) => {
    (item).forEach(
        (animation) => {
            setInterval(()=>{
                animation.classList.toggle(transition)
            },interval)  
    });
};

execAnimation(horizontalItem,horizontalMovement,15000);
execAnimation(verticalItem,verticalMovement,10500);
execAnimation(flipItem,horizontalFlip,5000);
execAnimation(verticalFlipItem,verticalFlip,7000);
