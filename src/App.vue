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
  --colorsecundario: lightgray;
  --colortitulo: white;
}

</style>
