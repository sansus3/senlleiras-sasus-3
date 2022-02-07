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
        lastScrolltop = st <= 0 ? 0 : st;
    }
)

