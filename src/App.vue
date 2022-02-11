<template>
  <router-view />
</template>

<style lang="scss">
/* CONFIGURACIÓN BÁSICA WEB */
@font-face {
  font-family: Montserrat;
  src: url(./assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li,
a {
  text-decoration: none;
  list-style-type: none;
}
body {
  font-family: Montserrat, "Open Sans";
  padding-top: 40px;
  padding-bottom: 60px;
}

:root {
  --colorprincipal: green;
  --colorsecundario: gray;
  --colortitulo: white;
}

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
  position: absolute;
  width: 70%;
  height: 90px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  background-color: rgba(150, 150, 150, 0.4);
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

/* CATALOGO ARBOLES  */

.catalogo-especies-section {
  display: grid;
  align-self: center;
}
.catalogo-especies-section h2 {
  text-align: center;
  text-transform: uppercase;
  margin: 20px;
}

.catalogo-arboles {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(2, 150px);
  gap: 10px;
  align-self: center;
  align-content: center;
  margin: auto;
}
.catalogo a img {
  border: 2px solid black;
}
</style>
