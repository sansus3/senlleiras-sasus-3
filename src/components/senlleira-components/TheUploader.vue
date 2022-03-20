<!-- 
    Componente que carga un input de tipo file y su atributo multiple por defecto es false
    Al componente padre devuelve un objeto con el formato 
    {id: props.cod,file: event.target.files.length!==0?event.target.files[0]:null} a través del emit obtenerImagen
 -->
<template>
    <div class="field">
        <label class="form-label">
            {{ title }}
            <span v-if="required" data-set="Campo obligatorio" class="text-danger">*</span>
            <img width="100" v-if="imagenPrevisualizar" :src="imagenPrevisualizar" alt="">
            <input
                @change="almacenarImagenes($event)"
                class="form-control"
                type="file"
                :accept="accept"
                :multiple="multiple"
                :required="required"
            />
            {{ error }}
        </label>
    </div>
</template>

<script>
import { isEmpty } from "@firebase/util";
import { ref } from "vue";
export default {
    props: {
        /**
         * Tipo de imágenes que acepta el input de tipo File
         */
        accept: {
            type: String,
            default: "image/gif, image/jpeg, image/png",
        },
        /**
         * Tamaño máximo permitido
         */
        size: {
            type: Number,
            default: 750000
        },
        /**
         * @param {Number} compress - Compresión de 1 a 100. Representa un %
         */
        compress: {
            type: Number,
            default: 50
        },
        /**
         * Título de la imagen
         * @default "Imagen"
         */
        title: {
            type: String,
            default: "Imagen"
        },
        /**
         * Propiedad que da un nombre identificador a la imagen seleccionada
         */
        cod: {
            type: String,
            required: true
        },
        /**
         * Atributo multiple de file. Por defecto false es decir que no es un file de tipo múltiple
         */
        multiple: {
            type: Boolean,
            default: false
        },
        /**
         * Si el control de formulario es de caracter obligatorio
         */
        required: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const error = ref('');
        let imagenPrevisualizar = ref('');
        /**
 * @url https://parzibyte.me/blog/2022/01/22/reducir-tamano-imagen-javascript/
 * @param {File} imagenComoArchivo 
 * @param {Number} porcentajeCalidad - 10 para el 10%, 20 el 20% y así sucesivamente 
 * @returns 
 */
        const comprimirImagen = (imagenComoArchivo, porcentajeCalidad) => {
            /*
                https://parzibyte.me/blog
            */
            return new Promise((resolve, reject) => {
                const $canvas = document.createElement("canvas");
                const imagen = new Image();
                imagen.onload = () => {
                    $canvas.width = imagen.width;
                    $canvas.height = imagen.height;
                    $canvas.getContext("2d").drawImage(imagen, 0, 0);
                    $canvas.toBlob(
                        (blob) => {
                            if (blob === null) {
                                return reject(blob);
                            } else {
                                resolve(blob);
                            }
                        },
                        "image/jpeg",
                        porcentajeCalidad / 100
                    );
                };
                imagen.src = URL.createObjectURL(imagenComoArchivo);
            });
        };

        /**
        * Esta función emite una función para comunicarse con su componente padre y le pasará un objeto con el identificador y el fichero seleccionado o null si no se selecciona nada
        * @param {Object} event Evento onchange de seleccionar una imagen
        */
        const almacenarImagenes = async (event) => {
            let myFile=null;
            error.value = '';
            //Campturamos el file
            const archives = event.target.files;//Array FileList
            if (isEmpty(archives) || archives.length === 0) {
                imagenPrevisualizar.value='';
                return;
            } else { //Seleccionado un fichero de tipo imagen jpg/png/gif
                //Obtenemos el blob
                const blob = await comprimirImagen(archives[0],props.compress);//convertido a jpg y comprimido al 80%
                blob.name = event.target.files[0].name;
                blob.lastModified = new Date();
                //Previsualizamos
                imagenPrevisualizar.value = URL.createObjectURL(blob);
                //convertimos blob a file
                myFile = new File([blob], blob.name, {
                    type: blob.type,
                });
                console.log(blob.size,myFile.size,event.target.files[0].size);
                if(myFile.size>props.size){
                     error.value = `${myFile.name} excede el máximo tamaño permitido ${myFile.size}. (Máximo: ${props.size}).`;
                     return;
                }    
            }
            emit('obtenerImagen', {
                /**
                 * {String} id Identificador de la imagen
                 */
                id: props.cod,
                /**
                 * {Boolean} si hay elemento con error
                 */
                error: error.value.length > 0,
                /**
                 * {Boolean} Si el campo del formulario es obligatorio
                 */
                required: props.required,
                /**
                 * {File|null} file Objeto. Null si se pulsa cancelar o excede el máximo tamaño permitido
                 */
                file: archives.length !== 0 && !error.value.length ? myFile : null
            });

        }

        return {
            almacenarImagenes,
            error,
            imagenPrevisualizar,
        };
    }
}
</script>