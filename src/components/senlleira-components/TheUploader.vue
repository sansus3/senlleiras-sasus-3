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
        </label>
    </div>
</template>

<script>


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

        /**
         * Esta función emite una función para comunicarse con su componente padre y le pasará un objeto con el identificador y el fichero seleccionado o null si no se selecciona nada
         * @param {Object} event Evento onchange de seleccionar una imagen
         */
        const almacenarImagenes = event => {
            emit('obtenerImagen',
                {
                    id: props.cod,
                    file: event.target.files.length !== 0 ? event.target.files[0] : null
                });
        }

        return {
            almacenarImagenes,
        };
    }
}
</script>