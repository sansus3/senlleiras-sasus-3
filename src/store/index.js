import { createStore } from 'vuex'
import senlleiras from './senlleiras'
import species from './species';
import especies from './especies';
import arboles from './arboles';


export default createStore({
  state: {
    realtimeDatabase : 'https://senlleiras-especies-default-rtdb.europe-west1.firebasedatabase.app/'
  },
  mutations: { 
  },
  actions: {  
  },
  modules: {
    species,//Xurxo
    senlleiras,//Xurxo
    especies,  
    arboles
  },
})