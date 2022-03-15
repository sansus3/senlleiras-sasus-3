<!-- 
    Componente de subida de imágenes
    Cargamos imágenes y comprobamos errores: Formato correcto y peso mínimo
 -->
<template>
    <fieldset class="card p-3 mb-3">
            <the-uploader
                @obtenerImagen="obtenerImagen"
                :title="'Imaxe 1'"
                :required="true"
                cod="uno"
            ></the-uploader>
             <the-uploader
                @obtenerImagen="obtenerImagen"
                :title="'Imaxe 2'"
                cod="dos"
            ></the-uploader>
             <the-uploader
                @obtenerImagen="obtenerImagen"
                :title="'Imaxe 3'"
                cod="tres"
            ></the-uploader>
            <div
                v-if="errores.errorImg"
                class="alert alert-danger"
                role="alert"
            >{{ errores.errorImgStr }}</div>
        </fieldset>
</template>

<script setup>
//Dependencias
import { imagenesArray,errores } from "@/hooks/imageUploader.hook";
import TheUploader from '@/components/senlleira-components/TheUploader.vue';


//Métodos
/**
 * @description Envento emitido del evento onchange de componente hijo TheUploader
 * @param {Object} item Formato {id: string, file: Object File}
 */
const obtenerImagen = (item) => {
    const index = imagenesArray.findIndex(el=>el.id===item.id);
    if(index<0)
        imagenesArray.push(item);
    else if(item.file)
        imagenesArray[index]=item;
    else 
        imagenesArray.splice(index,1);

    if(!imagenesArray.length){
        errores.errorImg = true;
    }else{
        const index = imagenesArray.findIndex(el=>el.error===true);
        if(index<0)
            errores.errorImg = false;
        else
            errores.errorImg = true;
    }
}
</script>