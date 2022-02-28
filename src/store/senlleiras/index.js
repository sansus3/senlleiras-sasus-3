//Dependencia router/index.js
import router from '@/router';
//Ruta en firebase del proyecto
const SENLLEIRAS = 'https://arbores-senlleiras-b52f1-default-rtdb.europe-west1.firebasedatabase.app/';

//Objecto
const SENLLEIRA = {
    idSpecie: '',
    id: '',
    nombreComun: '',
    nombreReferencia: '',
    genus: '',
    specie: '',
    provincia: 'A Coruña',
    lugar: '',
    concello: '',
    location: { latitude: '', longitude: '' },
    nombrePila: '',
    apellidos: '',
    comentarios: '',
    email: '',
    confirmado: false
}


const state = {
    senlleiras: [],
    senlleirasFiltradas: [],
    senlleira: { ...SENLLEIRA },
}

const mutations = {
    listSenlleiras(state, payload) {
        payload = payload.filter(el=>el.confirmado===true);
        state.senlleiras = state.senlleirasFiltradas = payload;
    },
    senlleiraFilter(state,payload){
        state.senlleirasFiltradas = payload;
    },
    setSenlleira(state, payload) {
        state.senlleira = state.senlleiras.find(element => element.id === payload);
    },
    insertSenlleira(state, payload) {
        state.senlleiras.push(payload);
        state.senlleira = { ...SENLLEIRA };
        router.push('/catalogo-senlleira');//router es importado
    },
}

const actions = {
    async listSenlleiras(context) {
        const response = await fetch(`${SENLLEIRAS}senlleiras.json`,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            });
        const data = await response.json();
        if (data){
            context.commit('listSenlleiras', Object.values(data));
        }
    },
    async insertSenlleira({ commit }, obj) {
        await fetch(
            `${SENLLEIRAS}senlleiras/${obj.id}.json`,
            {
                method: 'PUT', // Editar datos
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }
        );
        commit('insertSenlleira', obj);
    },
    
    senlleiraSearch({commit,state},data){
        //Pasamos todo a minúsculas pues includes es sensible a mayúsculas y minúsculas
        const min = data.toLowerCase();
        //Array temporal donde almacenamos los resultados
        const tmp = state.senlleiras.filter(senlleira=>senlleira.genus.toLowerCase().includes(min) || senlleira.specie.toLowerCase().includes(min) || senlleira.nombreReferencia.toLowerCase().includes(min) || senlleira.concello.toLowerCase().includes(min) || senlleira.nombreComun.toLowerCase().includes(min)); 
        //Almacenams en el state los datos filtrados
        commit('senlleiraFilter',tmp);        
    },
    setSenlleira({ commit }, id) {
        commit('setSenlleira', id);
    }
}



export default {
    namespaced: true,
    state,
    mutations,
    actions,
}