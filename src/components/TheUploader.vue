<template>
    <div class="field">
        <label for="formFileMultiple" class="form-label">Selecciona imágenes</label>
        <input
            @change="almacenarImagenes($event)"
            class="form-control"
            type="file"
            id="formFileMultiple"
            :accept="accept"
            :multiple="multiple"
        />
    </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
    props: {
        accept: {
            type: String,
            default: "image/gif, image/jpeg, image/png",
        },
        multiple: {
            type: Boolean,
            default: true
        }
    },
    setup(props, { emit }) {
        let files = reactive({});
        //Métodos 
        const almacenarImagenes = event => {
            //Debugger
            //console.clear();            //Limpiamos consola
            //console.log(props.url)
            //https://developer.mozilla.org/en-US/docs/Web/API/FileList
            Object.assign(files, event.target.files); //Object.assign mantiene la reactividad
            //Recorrer objeto
            // for (let item in files) {
            //     console.log(files[item])
            //     console.log(files[item].name)               
            // }
            emitAction();
        };

        //Emit
        const emitAction = () => {
            if (files[0]) //Si hay algún fichero seleccionado
                emit("gestionarImagenes", files);//información de los fichero subidos
        };

        return {
            almacenarImagenes,
            emitAction,
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