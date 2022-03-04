<!-- 
    Loader para cargar las páginas
 -->
<template>
    <div 
        v-if="loading" 
        :class="classname" 
        :style="`--foreground: ${foreground};--size: ${sizecircle}`"
    ><div></div></div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    /**
     * Valor booleano que indica si la case se muestra o no
     */
    loading : {
        type : Boolean,
        default: false
    },
    /**
     * Clase aplicable para el loader
     * @values lds-heart lds-circle
     */
    classname : {
        type : String,
        default: 'lds-circle'
    },
    /**
     * Color de frontal del loader
     */
    foreground: {
        type: String,
        default: 'rgba(53, 51, 51,.5)'
    },
    /**
     * Tamaño del círculo
     */
    sizecircle: {
        type: String,
        default: '64px'
    }
});
</script>

<style scoped>
/* CSS de heart */
.lds-heart {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    transform-origin: 40px 40px;
}
.lds-heart div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: var(--foreground);
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
    content: " ";
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    background: var(--foreground);
}
.lds-heart div:before {
    left: -24px;
    border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
    top: -24px;
    border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
    0% {
        transform: scale(0.95);
    }
    5% {
        transform: scale(1.1);
    }
    39% {
        transform: scale(0.85);
    }
    45% {
        transform: scale(1);
    }
    60% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(0.9);
    }
}
/* CSS de circle */
.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: var(--size);
  height: var(--size);
  margin: calc(var(--size)/8px);
  border-radius: 50%;
  background: var(--foreground);
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>