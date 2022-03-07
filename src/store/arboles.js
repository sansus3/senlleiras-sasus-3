
const SENLLEIRA = 'https://altas-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/';
const state ={
    arboles: []
}

const mutations ={
    darAlta(state,payload){
    state.arboles.push(payload);
    },
    leerDatos(state, payload){
        state.arboles = payload;
    }
}
const actions ={
    async darAlta({commit},data){  //funcion asincrona
        await fetch(`${SENLLEIRA}arboles/${data.id}.json`,{ 
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',           
            },
            body: JSON.stringify(data) 
        });
        commit('darAlta',data);   
    },
    async leerDatos({commit}){
        try {
            const temporal = [];
            const response = await fetch(`${SENLLEIRA}arboles.json`,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',           
                },
            });
            const data = await response.json();
            for(let index in data){
                temporal.push(data[index])
            }
            commit('leerDatos', temporal);
            
        } catch (error) {
            console.log('Error de función leerDatos()',error);
            
        }
       
    }  
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}