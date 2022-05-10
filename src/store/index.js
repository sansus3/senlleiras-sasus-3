import { createStore } from 'vuex'
import senlleiras from './senlleiras'
import species from './species';

export default createStore({
  state: {
    //realtimeDatabase : 'https://senlleiras-especies-default-rtdb.europe-west1.firebasedatabase.app/',
    realtimeDatabase : 'https://altas-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/',//demo
    google_maps_api_key : "AIzaSyAIoIZPEpf-sWgO6z285Afba4FADowz5Xk",
  },
  mutations: { 
  },
  actions: {  
  },
  getters: {
    getGoogleMapsApiKey(state){
      return state.google_maps_api_key;
    }
  },
  modules: {
    species,//Xurxo
    senlleiras,//Xurxo
  },
})