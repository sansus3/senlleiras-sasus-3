//Modelo de la cuenta arboresenlleira@gmail.com. Realtime database "senlleiras-especies"
export const SPECIES = 'https://senlleiras-especies-default-rtdb.europe-west1.firebasedatabase.app/species.json';

export default {
    namespaced: true,
    state: {
        species: [],
    },
    mutations: {
        setSpecies(state, payload) {
            state.species = payload;
        }
    },
    actions: {
        //Listado de especies de árboles (nombre científico ...)
        async setSpecies(context) {
            try {
                const response = await fetch(SPECIES, {
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
                context.commit('setSpecies', tmp);

            } catch (error) {
                console.log(`Error setSpecies en store/index.js: ${error}`);
            }
        },

    },
    getters: {
        getSpecieSort(state) {
            return state.species.sort((x, y) => x.genus.localeCompare(y.genus))
        }
    },
}