
const scheduleFilterDefaultState={
    arrival:'',
    destination:'',
    arrivalTime:'',
    destinationTime:'',
    trainType:'',
    name:''
}

const scheduleFilterReducer = (state = scheduleFilterDefaultState,action)=>{
    switch (action.type){
        case 'SET_ARRIVAL_FILTER':
            return{
                ...state,
                arrival:action.arrival
            };
            
        case 'SET_DESTINATION_FILTER':
            return{
                ...state,
                destination:action.destination
            }

        case 'SET_NAME_FILTER':
            return{
                ...state,
                name:action.name
            }

        case 'SET_TRAINTYPE_FILTER':
            return{
                ...state,
                trainType:action.trainType
            }
        default :
            return state
    }
}

export default scheduleFilterReducer;