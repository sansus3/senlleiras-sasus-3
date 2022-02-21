const urlSpecies = 'https://senlleiras-especies-default-rtdb.europe-west1.firebasedatabase.app/species.json';

const state = {
    especies: []
}
const mutations = {
    listarEspecies(state, payload) {
        state.especies = payload;
    }
}
const actions = {
    async listarEspecies({ commit }) {
        const temp = [];
        const response = await fetch(urlSpecies, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const datos = await response.json();
        for (let item in datos) {
            temp.push(datos[item])
        }
        commit('listarEspecies', temp);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}