
const SENLLEIRA = 'https://altas-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/';
const state ={
    arboles: []
}

const mutations ={
    darAlta(state,payload){
    state.arboles.push(payload);
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
    }  
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}