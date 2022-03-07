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
        /**
        * Esta función emite una función para comunicarse con su componente padre y le pasará un objeto con el identificador y el fichero seleccionado o null si no se selecciona nada
        * @param {Object} event Evento onchange de seleccionar una imagen
        */
        const almacenarImagenes = event => {
            error.value = '';
            /**
             * Entrega de un objeto con un identificador pasado por el padre
             */
            if (event.target.files.length !== 0 && event.target.files[0].size > props.size) {
                error.value = `${event.target.files[0].name} excede el máximo tamaño permitido ${event.target.files[0].size}. (Máximo: ${props.size}).`;
            }
            emit('obtenerImagen', {
                /**
                 * {String} id Identificador de la imagen
                 */
                id: props.cod,
                /**
                 * {Boolean} si hay elemento con error
                 */
                error:error.value.length>0,
                /**
                 * {Boolean} Si el campo del formulario es obligatorio
                 */
                required: props.required,
                /**
                 * {File|null} file Objeto. Null si se pulsa cancelar o excede el máximo tamaño permitido
                 */
                file: event.target.files.length !== 0 && !error.value.length ? event.target.files[0] : null
            });

        }

        return {
            almacenarImagenes,
            error,
        };
    }
}
</script>