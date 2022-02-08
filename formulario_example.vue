<template>
    <form
        method="post"
        action="#"
        v-on:submit.prevent="accionPersonalizada"
    >
        <ul class="fields p-2">
            <li class="field mb-3">
                <label
                    data-title="⚠ Campo obligatorio"
                    for="genus"
                    class="form-label control-label"
                >Género</label>
                <input
                    id="genus"
                    name="genus"
                    v-model.trim="arbore.genus"
                    type="text"
                    placeholder="Género aquí"
                    class="field__control form-control"
                    pattern=".{3,}"
                    title="Mínimo 3 caracteres"
                />
            </li>

            <li class="field mb-3">
                <label
                    data-title="⚠ Campo obligatorio"
                    for="specie"
                    class="form-label control-label"
                >Especie</label>
                <input
                    id="specie"
                    name="specie"
                    v-model.trim="arbore.specie"
                    type="text"
                    placeholder="Especie aquí"
                    class="field__control form-control"
                    pattern=".{3,}"
                    title="Mínimo 3 caracteres"
                />
            </li>

            <li class="field mb-3">
                <label for="names" class="form-label">Nombres</label>
                <input
                    id="names"
                    name="names"
                    v-model.trim="names"
                    type="text"
                    placeholder="Nombres separados con comas"
                    class="field__control form-control"
                />
            </li>          

            <li class="field mb-3">
                <label for="descriptio" class="form-label">Descripción</label>
                <textarea
                    v-model.trim="arbore.descriptio"
                    class="form-control"
                    id="descriptio"
                    rows="3"
                ></textarea>
            </li>

            <li class="mb-3">
                <button class="btn btn-dark" :disabled="btnDisabled">{{ btntext }}</button>
            </li>
        </ul>
    </form>
</template>

<script>


export default {
    props: {
        arbore: {
            type: Object,
            required: false,

        },
        btntext: {
            type: String,
            required: false,
            default: "Enviar"
        }
    },
   
}
</script>