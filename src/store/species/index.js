import router from '@/router';//Esta línea no está en el original. Nos permite manipular las rutas
const URL = 'https://senlleiras-especies-default-rtdb.europe-west1.firebasedatabase.app/';
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
    actualizarEspecie(state, payload) {
        state.specie = payload;
    },
    eliminarEspecie(state, payload) {
        state.species = state.species.filter(el => el.id !== payload);
        router.push('/catalogo');//router es importado
    },
    resetSpecie(state) {
        state.specie = { ...SPECIE };
    },
    insertarEspecie(state, payload) {
        state.species.push(payload);
        state.specie = { ...SPECIE };
        router.push('/catalogo');//router es importado
    },
}

const actions = {
    //Listado de especies
    async getListadoEspecies({ commit }) {        
        const response = await fetch(
            `${URL}species.json`,
            {
                method: 'GET', // Lectura de datos
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const data = await response.json();
        if(data)
            commit('listadoEspecies', data);
    },
    //rellenar el objeto specie a partir de un código dado
    setSpecie(context, id) {
        context.commit('setEspecie', id);
    },
    //Actualización de la especie
    async updateSpecie({ commit }, objSpecie) {
        await fetch(
            `${URL}species/specie-${objSpecie.id}.json`,
            {
                method: 'PATCH', // Editar datos
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objSpecie)
            }
        );
        commit('actualizarEspecie', objSpecie);
    },
    //Eleminación de especie
    async deleteSpecie({ commit }, id) {
        await fetch( 
            `${URL}species/specie-${id}.json`,
            {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        commit('eliminarEspecie', id);
    },
    //reseteamos specie
    resetSpecie({ commit }) {
        commit('resetSpecie');
    },
    //Insertar una nueva especie
    async insertSpecie({ commit }, objTree) {
        await fetch(
            `${URL}species/specie-${objTree.id}.json`,
            {
                method: 'PUT', // Editar datos
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objTree)
            }
        );
        commit('insertarEspecie', objTree);
    },
    setSpeciesGenusSort({commit,state}){
        state.speciesFilter = state.species;
        state.speciesFilter.sort((x, y) => x.genus.localeCompare(y.genus))
    }
}

const getters = {
    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}