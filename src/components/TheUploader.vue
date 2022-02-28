<template>
    <div class="field">
        <label class="form-label">
            {{ title }}
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
        accept: {
            type: String,
            default: "image/gif, image/jpeg, image/png",
        },
        title: {
            type: String,
            default: "Imagen"
        },
        cod: {
            type: String,
            required: true
        },
        multiple: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {

        //Métodos 
        const almacenarImagenes = event => {
            emit('obtenerImagen', 
            { 
                id: props.cod, 
                file: event.target.files.length!==0?event.target.files[0]:null
            });
        }

        return {
            almacenarImagenes,
        };
    }
}
</script>


<style lang="scss" scoped>
ul {
    padding-left: 0;
    list-style-type: none;
}
.field {
    position: relative;
    cursor: help;
    .control-label {
        &::after {
            content: "*";
            color: red;
            position: relative;
        }
        &:hover::before {
            content: attr(data-title);
            position: absolute;
            padding: 0.5rem;
            background-color: rgb(221, 218, 218);
            font-size: 0.8rem;
            color: red;
            font-weight: bold;
            top: -2rem;
            white-space: nowrap;
        }
    }
}
</style>