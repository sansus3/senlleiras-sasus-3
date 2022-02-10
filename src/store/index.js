import { createStore } from 'vuex'
import router from '@/router';//Esta línea no está en el original. Nos permite manipular las rutas

//URL del listado de especies
const SPECIES = 'https://arbores-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/species.json';
const SENLLEIRAS = 'https://senlleiras-especies-default-rtdb.europe-west1.firebasedatabase.app/senlleiras.json';
//Objeto con los campos de una senlleira nueva
const SENLLEIRA = {
  id: null,
  confirmado: false, //Si entra en el catálogo
  idSpecie: '',
  specie: '',
  genus: '',
  nombreComun: '',
  location: {
    latitude: null,
    longitude: null,
  },
  comentarios: '',
}

export default createStore({
  state: {
    species: [],
    senlleiras: [],
    senlleira: { ...SENLLEIRA }
  },
  mutations: {
    setSpecies(state, payload) {
      state.species = payload;
    },
    setSenlleiras(state, payload) {
      state.senlleiras = payload;
    },
    insertSenlleira(state, payload) {
      state.senlleiras.push(payload);
      router.push('/catalogo');//router es importado
    }
  },
  actions: {
    //Listado de especies de árboles (nombre científico ...)
    async setSpecies(context) {
      try {
        const response = await fetch(SPECIES, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        });

        //Los datos obtenidos es un objeto con objetos en su interior
        //{{},{},{}}
        const data = await response.json();
        //console.log(data)

        //Creamos un array temporal vacío
        const tmp = [];

        //for...in. La instrucción for-in itera sobre todas las "propiedades enumerables" de un objeto que está codificado por cadenas
        for (let item in data) {
          tmp.push(data[item]);
          //console.log(data[item])
        }
        //Pasamos al state
        context.commit('setSpecies', tmp);

      } catch (error) {
        console.log(`Error setSpecies en store/index.js: ${error}`);
      }
    },
    async setSenlleiras(context) {
      try {
        const response = await fetch(SENLLEIRAS, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        });

        //Los datos obtenidos es un objeto con objetos en su interior
        //{{},{},{}}
        const data = await response.json();
        //console.log(data)

        //Creamos un array temporal vacío
        const tmp = [];

        //for...in. La instrucción for-in itera sobre todas las "propiedades enumerables" de un objeto que está codificado por cadenas
        for (let item in data) {
          tmp.push(data[item]);
          //console.log(data[item])
        }
        //Pasamos al state
        context.commit('setSenlleiras', tmp);

      } catch (error) {
        console.log(`Error setSenlleiras en store/index.js: ${error}`);
      }
    },
    //Nueva Senlleira
    async insertSenlleira(context, obj) {
      const regex = /\./g;
      const latitude = `${obj.location.latitude}`.replace(regex, "");
      //console.log(latitude)
      const id = `sen-${latitude}-${Math.trunc(Math.random() * 100) + 1}`;
      obj.id = id;
      try {
        const url = `https://senlleiras-especies-default-rtdb.europe-west1.firebasedatabase.app/senlleiras/${id}.json`;
        const response = fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
        });
        context.commit('insertSenlleira', obj);
      } catch (error) {
        console.log(`Error insertSenlleira en store/index.js: ${error}`);
      }
    }
  },
  getters: {
    getSpecieSort(state) {
      return state.species.sort((x, y) => x.specie.localeCompare(y.specie))
    }
  },
  modules: {
  }
})
