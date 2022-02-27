import { createStore } from 'vuex'
import senlleiras from './senlleiras'
import species from './species';
import especies from './especies';
import arboles from './arboles';


export default createStore({
  state: {   
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