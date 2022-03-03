<!-- 
    Componente de subida de imágenes
    Cargamos imágenes y comprobamos errores: Formato correcto y peso mínimo
 -->
<template>
    <fieldset class="card p-3 mb-3">
            <the-uploader
                @obtenerImagen="obtenerImagen"
                :title="'Imagen 1'"
                :required="true"
                cod="uno"
            ></the-uploader>
            <the-uploader @obtenerImagen="obtenerImagen" :title="'Imagen 2'" cod="dos"></the-uploader>
            <the-uploader @obtenerImagen="obtenerImagen" :title="'Imagen 3'" cod="tres"></the-uploader>
            <div
                v-if="errores.errorImg"
                class="alert alert-danger"
                role="alert"
            >{{ errores.errorImgStr }}</div>
        </fieldset>
</template>

<script setup>
//Dependencias
import {inject} from "vue";
import TheUploader from '@/components/senlleira-components/TheUploader.vue';

//Variables del componennte padre
const images = inject('images');
const errores = inject('errores');
//Métodos
/**
 * @description Envento emitido del evento onchange de componente hijo TheUploader
 * @param {Object} item Formato {id: string, file: Object File}
 */
const obtenerImagen = (item) => {
    const { id, file } = item;
    images[id] = file;
    cargaImagenes();
}
/**
 * @description Si el formulario es validado procedemos a subir los ficheros
 * @returns {Boolean} Si la subida es correcta o no
 */
const cargaImagenes = () => {
    errores.errorImg = false;
    errores.errorImgStr = '';
    for (let item in images) {
        if (images[item]!==null) {
            //console.log(images[item][0])
            if (images[item].size > errores.maxsize) {
                const error = `${images[item].name} excede el máximo tamaño permitido ${images[item].size}. (Máximo: ${errores.maxsize}).`;
                errores.errorImg = true;
                errores.errorImgStr = error;
                console.log("¡Oppss!");
            }
        }
    }
}
</script>