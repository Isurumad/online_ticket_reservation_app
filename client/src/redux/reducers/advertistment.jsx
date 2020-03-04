
const advertistmentReducerDefault={
    advertisements:[],
    loading:false
}

const addvertistmentReducer=(state=advertistmentReducerDefault,action)=>{
    switch(action.type){
        case 'GET_ADVERTISTMENT':
            return{
                ...state,
                advertistments:action.adds,
                loading:false
            };
        
        case 'ADD_ADVERTISTMENT':
            return{
                ...state,
                advertistments:[action.adds,...state.advertistments]
            };
        case 'ADVERTISTMENT_LOADING':
            return{
                ...state,
                loading:true
            }

        case 'REMOVE_ADVERTOSTMENT':
            return state.filter(({id})=>{return id!==action.id})
        
        default:
            return state;    
    }
}

export default addvertistmentReducer