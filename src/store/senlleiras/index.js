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
}


const state = {
    senlleiras: [],
    senlleirasFiltradas: [],
    senlleira: { ...SENLLEIRA },
}

const mutations = {
    listSenlleiras(state, payload) {
        state.senlleiras = state.senlleirasFiltradas = payload;
    },
    senlleiraFilter(state,payload){
        state.senlleirasFiltradas = payload;
    },
    confirmToggle(state, payload) {
        const index = state.senlleiras.findIndex(el => el.id === payload.id);
        state.senlleiras[index].confirmado = payload.confirm;
    },
    setSenlleira(state, payload) {
        state.senlleira = payload;
    },
    updateSenlleira(state, payload) {
        state.specie = payload;
    },
    deleteSenlleira(state, payload) {
        state.senlleiras = state.senlleiras.filter(el => el.id !== payload);
        router.push('/Senlleiras');//router es importado
    }
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
        if (data)
            context.commit('listSenlleiras', Object.values(data));
    },
    async confirmToggle({ commit }, { id, confirm }) {
        const response = await fetch(`${SENLLEIRAS}senlleiras/${id}.json`,
            {
                method: 'PATCH',
                headers: {
                    'Cotent-Type': 'application/json'
                },
                body:
                    JSON.stringify({ 'confirmado': confirm })
            });
        commit('confirmToggle', { id, confirm });
    },
    async updateSenlleira({ commit }, obj) {
        await fetch(
            `${SENLLEIRAS}senlleiras/${obj.id}.json`,
            {
                method: 'PATCH', // Editar datos
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }
        );
        commit('updateSenlleira', obj);
    },
    async deleteSenlleira({ commit }, { id }) {
        if (id) {
            await fetch(
                `${SENLLEIRAS}senlleiras/${id}.json`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            commit('deleteSenlleira', id);
        }
    },
    senlleiraSearch({commit,state},data){
        //Pasamos todo a minúsculas pues includes es sensible a mayúsculas y minúsculas
        const min = data.toLowerCase();
        //Array temporal donde almacenamos los resultados
        const tmp = state.senlleiras.filter(senlleira=>senlleira.genus.toLowerCase().includes(min) || senlleira.specie.toLowerCase().includes(min) || senlleira.nombreReferencia.toLowerCase().includes(min) || senlleira.nombreComun.toLowerCase().includes(min));
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