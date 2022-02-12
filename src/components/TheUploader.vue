<template>
    <div class="field">
        <label for="imagen1" class="form-label">Imagen 1</label>
        <input
            @change="almacenarImagenes($event)"
            class="form-control"
            type="file"
            id="imagen1"
            :accept="accept"
            :multiple="multiple"
            required
        />
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
        multiple: {
            type: Boolean,
            default: true
        }
    },
    setup() {
        const images = inject('images');
        //Métodos 
        const almacenarImagenes = event => {
            Object.assign(images, event.target.files);
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