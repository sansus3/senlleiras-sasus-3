<template>
  
    <div class="stories-navigator">
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_17.jpg" alt="sdsd">
        <p class="arbol-name"> Loureiro</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_1.jpg" alt="sdsd">
        <p class="arbol-name"> Carballo</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_2.jpg" alt="sdsd">
        <p class="arbol-name"> Encina</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_3.jpg" alt="sdsd">
        <p class="arbol-name"> Alcornoque</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_4.jpg" alt="sdsd">
        <p class="arbol-name"> Ciprés</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_5.jpg" alt="sdsd">
        <p class="arbol-name"> Sauce</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_6.jpg" alt="sdsd">
        <p class="arbol-name"> haya</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_7.jpg" alt="sdsd">
        <p class="arbol-name"> Eucalipto</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_3.jpg" alt="sdsd">
        <p class="arbol-name"> Alcornoque</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_4.jpg" alt="sdsd">
        <p class="arbol-name"> Ciprés</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_5.jpg" alt="sdsd">
        <p class="arbol-name"> Sauce</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_6.jpg" alt="sdsd">
        <p class="arbol-name"> haya</p>
      </router-link>
      <router-link to="/" class="component-arbol">
        <img src="../../assets/gallery/senlleiras_7.jpg" alt="sdsd">
        <p class="arbol-name"> Eucalipto</p>
      </router-link>
      
    </div>

</template>

<script>

</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.stories-navigator {
  display: flex;
  gap: .2rem;
  margin: .5rem 0;
  overflow: scroll;
  overflow: -webkit-overflow-scrolling;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  align-items: center;
}

.component-arbol {
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  align-content: center;
  width: 80px;
  gap: .1rem;
}
.component-arbol:nth-child(1){
  margin-left: 1.5rem;
}

.stories-navigator .component-arbol img {
  margin: auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: .2rem;
  border: 4px solid green;
  object-fit: fill;
  position: relative;
}
.stories-navigator .component-arbol:visited img{
  border: 4px solid gray
}

.stories-navigator .arbol-name {
  width: 80px;
  font-size: .9rem;
  line-height: .9rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--colorprincipal);
}
</style>