//cabecera que se esconde - expande cuando el usuario sube o baja (movil)
const menuHeader = document.querySelector(".header-nav-app");
var lastScrolltop = 0; 

document.addEventListener(
    "scroll",
    ()=>{
     
    var st = window.pageXOffset || document.documentElement.scrollTop;
        if(st > lastScrolltop && menuHeader){
            menuHeader.classList.add("reduced");
            //console.log("reduced")
           
        }else if(st <= lastScrolltop && menuHeader){
            menuHeader.classList.remove("reduced");
            //console.log("no reduced")
            
        };     
        lastScrolltop = st <= 40 ? 40 : st;
       
    }
);

//Buscador menu laptop
const buscadorIcon = document.querySelector(".btn-search-laptop");
const buscadorLi = document.querySelector(".header-search-laptop")
if(buscadorIcon){
    buscadorIcon.addEventListener(
        "click",
        ()=>{
            buscadorLi.classList.toggle("search-li-animation");
            console.log("a")
        }
    );
}