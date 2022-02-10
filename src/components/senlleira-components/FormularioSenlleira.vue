<template>
    <section class="titulo-administracion">
        <h2>Cargar Información</h2>
        <p>Inserta la información que estará disponible para el usuario</p>

        <form @submit.prevent class="form-administrativo" action="#" method="post">
            <div class="administrativo-input">
                <input type="text" id="genero" name="arbol_genero" placeholder="Género" />
                <input type="text" id="especie" name="arbol-especie" placeholder="Especie" />
                <input type="text" id="nombre" name="arbol-nombre" placeholder="Nombre" />
            </div>
            <textarea id="description" rows="4" cols="100" placeholder="Descripción"></textarea>
            <input class="administrativo-submit" type="submit" value="Cargar" />
        </form>
    </section>
</template>

<style scoped>
.titulo-administracion h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    padding: 10px;
}
.titulo-administracion p {
    font-size: 25px;
    text-align: center;
}
.form-administrativo {
    display: grid;
    gap: 5px;
    font-size: 25px;
    min-width: 320px;
    max-width: 50%;
    margin: 20px auto;
}
.form-administrativo .administrativo-input {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 5px;
}
.form-administrativo .administrativo-submit {
    width: 100px;
    height: 50px;
}
.form-administrativo input {
    height: 30px;
    font-size: 25px;
    font-family: montserrat;
}
.form-administrativo textarea {
    resize: none;
    width: 100%;
    font-size: 25px;
    font-family: montserrat;
    min-width: 320px;
}
</style>