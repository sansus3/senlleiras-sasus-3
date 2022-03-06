<template>
    <article class="article">
        <h1 class="article__title title">
            <strong data-title="(🔊 spred) Propagar, expandir, extender">Spread</strong> & 
            <strong data-title="(🔊 rest) Restante">Rest</strong>
        </h1>
        <section class="section">
            <h2 class="section__title title">
             Spread
            </h2>
            <dl>
                <dt>Spread</dt>
                <dd><mark>Expande</mark> los valores de una <strong>matriz</strong> o un <strong>String</strong> en el lugar donse se esperan <strong>argumentos</strong>, por ejemplo en la llamada de una <em>función</em> o como <em>elementos (de matrices)</em>.
                <pre>
                <code>const numeros = [1,2,3,4];
                console.log(...numeros);</code>
                </pre>
                </dd>
                <dd><mark>Clona</mark> como <em>copia</em> <strong>NO como referencia</strong> <em>matrices</em> y <em>objetos</em>
                <pre>
                <code>                
                const numerosCopia = [...numeros];
                </code></pre>
                </dd>
                <dd><mark>Fusiona</mark> <em>matrices</em> y <em>objetos</em>
                <pre>
                <code>                
                const persona = {}
                const datos = {nombre: 'Xurxo', edad: 47}
                const formacion = {estudios: 'DAW', laboral: 'Desarrollador de Aplicaciones Web'}
                persona = {...datos,...formacion}
                </code></pre>
                </dd>
            </dl>           
            <input type="text" v-model="texto">            
            <pre>{{$data}}</pre>            
        </section>
        <section class="section">
            <h2 class="section__title title">
             Rest
            </h2>
            <dl>
                <dt>Rest</dt>
                <dd><mark>Representa</mark> un <em>número infinito</em> de <strong>argumentos</strong> como <strong>matriz</strong>. Es un <strong>parámetro</strong> que va como <strong>argumento</strong> de la <em>definición de una función</em>.
                <pre>
                <code>
                const numeros = [2,3,4];
                //rest
                const sumar = (...args) => args.reduce((previo,actual)=>previo+actual);
                //spread
                console.log(sumar(...numeros,...[3],2));</code>
                </pre>
                </dd>
            </dl>           
        </section>
    </article>
</template>

<script>
   export default {
      data(){
          return {
              texto: '',
              matriz: [],
          }
      },
      watch: {
          texto(nuevo){
              this.matriz = [...nuevo];
          }
      },
   }
</script>

<style scoped lang="scss">
    .article__title{
        position: relative;
        cursor: help;
        strong{
            &::after{
                position: relative;
                content: "*";
            }
            &:hover::before{
                content: attr(data-title);
                position: absolute;
                padding: .5rem;
                background-color: rgb(221, 218, 218);
                font-size: .5em;
                top:-1.8rem;
                white-space: nowrap;
            }
        }
    }
</style>