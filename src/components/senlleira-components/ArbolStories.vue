<template>
  <section class="arbol-stories">
      <h2>Árbol del día</h2>
      <div class="stories-navigator">
          <div class="component-arbol">
              <img src="../../assets/gallery/senlleiras_17.jpg" alt="sdsd">
          </div>
          <div class="component-arbol">
              <img src="../../assets/gallery/senlleiras_13.jpg" alt="sdsd">
          </div>
          <div class="component-arbol">
              <img src="../../assets/gallery/senlleiras_11.jpg" alt="sdsd">
          </div>
          <div class="component-arbol">
            <img src="../../assets/gallery/senlleiras_16.jpg" alt="sdsd">
          </div>
          <div class="component-arbol">
            <img src="../../assets/gallery/senlleiras_7.jpg" alt="sdsd">
          </div>
          <div class="component-arbol">
            <img src="../../assets/gallery/senlleiras_8.jpg" alt="sdsd">
          </div>
          <div class="component-arbol">
            <img src="../../assets/gallery/senlleiras_6.jpg" alt="sdsd">
          </div>
          <div class="component-arbol">
            <img src="../../assets/gallery/senlleiras_12.jpg" alt="sdsd">
          </div>
          <div class="component-arbol">
            <img src="../../assets/gallery/senlleiras_1.jpg" alt="sdsd">
          </div>
      </div>

  </section>
</template>

<script>

</script>

<style>
::-webkit-scrollbar {
    display: none;
    }

.stories-navigator{
    display: grid;
    grid-template-columns: repeat( 10, minmax(50px, 60px));
    gap: .5rem;
    overflow: scroll;
    scroll-behavior: smooth;
}
    .stories-navigator .component-arbol img{
        width: 50px;
        height: 50px;
        border: 3px solid green;
        border-radius: 50%;
        margin: .5rem;
    }

</style>