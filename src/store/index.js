import { createStore } from 'vuex'
import router from '@/router';//Esta línea no está en el original. Nos permite manipular las rutas
import species from './species';
import especies from './especies';

//Modelo "arbores-senlleiras-b52f1"
const SENLLEIRAS = 'https://arbores-senlleiras-b52f1-default-rtdb.europe-west1.firebasedatabase.app/senlleiras.json';
//Objeto con los campos de una senlleira nueva
const SENLLEIRA = {
  id: null,
  confirmado: false, //Si entra en el catálogo
  idSpecie: '',
  specie: '',
  genus: '',
  nombreComun: '',
  nombreArbol: '', //nombre que el usuario le de al árbol
  lugar: '',
  concello: '',
  provincia: 'A Coruña',
  location: {
    latitude: null,
    longitude: null,
  },
  comentarios: '',
}

export default createStore({
  state: {
    senlleiras: [],
    senlleira: { ...SENLLEIRA }
  },
  mutations: {
    setSenlleiras(state, payload) {
      state.senlleiras = payload;
    },
    setSenlleira(state, payload) {
      //console.log(state.senlleiras);
      state.senlleira = state.senlleiras.find(senlleira => senlleira.id === payload);
      //console.log(state.senlleira)
    },
    resetSenlleira(state) {
      state.senlleira = { ...SENLLEIRA };
    },
    insertSenlleira(state, payload) {
      state.senlleiras.push(payload);
      router.push('/catalogo');//router es importado
    }
  },
  actions: {
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
      try {
        const url = `https://arbores-senlleiras-b52f1-default-rtdb.europe-west1.firebasedatabase.app/senlleiras/${obj.id}.json`;
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
    },
    //reseteamos specie
    resetSenlleira({ commit }) {
      commit('resetSenlleira');
    },
    //Obtener ejemplar senlleria
    setSenlleira({ commit }, id) {
      commit('setSenlleira', id);
    }
  },
  modules: {
    species,
    especies
  },
})
