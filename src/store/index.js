import { createStore } from 'vuex'

//URL del listado de especies
const SPECIES = 'https://arbores-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/species.json';

export default createStore({
  state: {
    species : []
  },
  mutations: {
    setSpecies(state,payload){
      state.species = payload;
    }
  },
  actions: {
    async setSpecies(context){
      try {
        const response = await fetch(SPECIES,{
          method : 'GET',
          headers: {
            'content-type' : 'application/json'
          }
        });

        //Los datos obtenidos es un objeto con objetos en su interior
        //{{},{},{}}
        const data = await response.json();
        //console.log(data)

        //Creamos un array temporal vacío
        const tmp = [];

        //for...in. La instrucción for-in itera sobre todas las "propiedades enumerables" de un objeto que está codificado por cadenas
        for(let item in data){
          tmp.push(data[item]);
          //console.log(data[item])
        }
        //Pasamos al state
        context.commit('setSpecies',tmp);

      } catch (error) {
        console.log(`Error getSpeciesList en store/index.js: ${error}`);
      }
    }
  },
  getters: {
    getSpecieSort(state){
      return state.species.sort((x,y)=>x.specie.localeCompare(y.specie))
    }
  },
  modules: {
  }
})
