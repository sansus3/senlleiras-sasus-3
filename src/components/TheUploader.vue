<template>
    <div class="field">
        <label class="form-label">{{title}}
        <input
            @change="almacenarImagenes($event)"
            class="form-control"
            type="file"
            :accept="accept"
            :multiple="multiple"
            :required="required"
        >
        </label>
    </div>
</template>

<script>
import { inject } from "vue";

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
        multiple: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const images = inject('images');
        //Métodos 
        const almacenarImagenes = event => {
            images.push(event.target.files);
            //console.log(images)
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