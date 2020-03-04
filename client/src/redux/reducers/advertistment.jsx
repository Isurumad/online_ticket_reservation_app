import uuid from 'uuid';
import IMG1 from '../../images/van1.jpg'
import IMG2 from '../../images/van2.jpg'

const advertistmentReducerDefault={
    advertisements:[{id:uuid(),title:'TOHOYOTA HIACE VAN FOR HIRE',image:IMG1,price:'26000.00',contactNumber:'0773101655',description:"Confirtable Seats Good Condition Friendly Service"},
                    {id:uuid(),title:'TOHOYOTA HIACE VAN FOR HIRE',image:IMG2,price:'36000.00',contactNumber:'0718918597',description:"Confirtable Seats Good Condition Friendly Service"}

                    ],
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