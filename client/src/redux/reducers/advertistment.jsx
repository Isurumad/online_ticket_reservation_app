
const advertistmentReducerDefault={
    adds:[],
    loading:false
}

const addvertistmentReducer=(state=advertistmentReducerDefault,action)=>{
    switch(action.type){
        case 'GET_ADVERTISTMENT':
            return{
                adds:action.adds,
                loading:true
            };
        
        case 'ADD_ADVERTISTMENT':
            return{
                ...state,
                adds:[action.adds,...state.adds]
            };

        case 'REMOVE_ADVERTOSTMENT':
            return state.filter(({id})=>{return id!==action.id})
    }
}