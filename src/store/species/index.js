const SPECIE = {
    id: null,
    specie: '',
    genus: '',
    names: [],
    descriptio: ''
}
const state = {
    species: [], //Listado de especies para el catálogo
    speciesFilter: [],
    specie: { ...SPECIE },
}
const mutations = {
    listadoEspecies(state, payload) {
        state.species = Object.values(payload);
    },
    setEspecie(state, payload) {

        state.specie = state.species.find(spe => spe.id == payload);
        //console.log(state.specie)
    },
    resetSpecie(state) {
        state.specie = { ...SPECIE };
    },
}
const actions = {
    //Listado de especies
    async getListadoEspecies({ commit, rootState }) {
        const response = await fetch(
            `${rootState.realtimeDatabase}species.json`,
            {
                method: 'GET', // Lectura de datos
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const data = await response.json();
        if (data)
            commit('listadoEspecies', data);
    },
    //rellenar el objeto specie a partir de un código dado
    setSpecie(context, id) {
        context.commit('setEspecie', id);
    },
    //reseteamos specie
    resetSpecie({ commit }) {
        commit('resetSpecie');
    },
    setSpeciesGenusSort({ commit, state }) {
        state.speciesFilter = state.species;
        state.speciesFilter.sort((x, y) => x.genus.localeCompare(y.genus))
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
}