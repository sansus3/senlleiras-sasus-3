import { createStore } from 'vuex'
import senlleiras from './senlleiras'
import species from './species';

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
  },
})