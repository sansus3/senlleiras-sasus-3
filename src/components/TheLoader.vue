<!-- 
    Loader para cargar las páginas
 -->
<template>
    <div class="the-loader" :class="{'spinner-border':loading}" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</template>

<script setup>

const props = defineProps({
    /**
     * Valor booleano que indica si la case se muestra o no
     */
    loading: {
        type: Boolean,
        default: false
    },
});
</script>

<style scoped>
/* CSS de heart */
.spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -0.125em;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: 0.75s linear infinite spinner-border;
    animation: 0.75s linear infinite spinner-border;
}
.visually-hidden{
    position: absolute!important;
    width: 1px!important;
    height: 1px!important;
    padding: 0!important;
    margin: -1px!important;
    overflow: hidden!important;
    clip: rect(0,0,0,0)!important;
    white-space: nowrap!important;
    border: 0!important;
}
@keyframes spinner-border {
  to { transform: rotate(360deg) }
}
</style>