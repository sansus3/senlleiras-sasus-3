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
  --colortitulo: rgb(31, 30, 30);
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
