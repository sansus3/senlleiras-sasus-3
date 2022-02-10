<template>
    <form method="post" enctype="multipart/form-data" action="#" v-on:submit.prevent="subirFicheros">
        <ul class="fields p-2">
            <li class="field mb-3">
                <label for="formFileMultiple" class="form-label">Selecciona imágenes</label>
                <input
                    @change="almacenarImagenes($event)"
                    class="form-control"
                    type="file"
                    id="formFileMultiple"
                    accept="image/gif, image/jpeg, image/png"
                    multiple
                />
            </li>
             <li class="mb-3">
                <button class="btn btn-dark" :disabled="btnDisabled">{{ btnText }}</button>
            </li>
        </ul>
        <loader-component :visibleBool="visible"></loader-component>
        <div v-if="errorStr" class="alert alert-danger" role="alert">{{ errorStr }}</div>
    </form>
    
</template>

<script>
import { reactive,ref as referencia,computed } from "vue";
import { ref,uploadBytes  } from "firebase/storage";
import { storage } from "@/firebase";
import LoaderComponent from '@/components/LoaderComponent'

export default {
    components: {
        LoaderComponent
    },
    props: {
        urlBase: {
            type: String,
            required: true
        },
        maxSize: {
            type: Number,
            required: false,
            default: 1500000
        },
        btnText: {
            type: String,
            require: false,
            default: "Subir"
        },
    },
    setup(props, { emit }) {
        let visible = referencia(false);
        let files = reactive({});
        let errorStr = referencia('');
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
        };
        const subirFicheros = () => {
            //Subida de ficheros físicos
            errorStr.value = '';         
            for (let item in files) {
                visible.value = true;
                if(files[item].size > props.maxSize){
                    errorStr.value = `${files[item].name} excedión el máximo tamaño permitido ${files[item].size} (Máximo: ${props.maxSize}).`;
                    return;
                }
                const storageRef = ref(storage, `${props.urlBase}/${files[item].name}`); //creamos una referencia
                uploadBytes(storageRef, files[item]).then((snapshot) => {
                    //console.log("¡Terminada la subida de ficheros!");
                    visible.value = false;
                });               
                //console.log(files[item])               
            }
            emitAction();
        };
        //Emit
        const emitAction = () => {
            if (files[0]) //Si hay algún fichero seleccionado
                emit("customAction", files);//información de los fichero subidos
        };
        //Propiedades computadas       
        const btnDisabled = computed(() => !files[0]);
        return {
            btnDisabled,
            errorStr,
            almacenarImagenes,
            subirFicheros,
            emitAction,
            visible
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