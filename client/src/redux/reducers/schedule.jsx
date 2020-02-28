import uuid from 'uuid'

const schduleReducerDefaultState = [
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:00:00',destination:'Kandy',destinationTime:'09:31:00',frequency:'Daily',name:'Podimenike',trainType:'Express' },
    {id:uuid(),arrival:'Kandy',arrivalTime:'06:00:00',destination:'Kandy',destinationTime:'09:31:00',frequency:'Daily',name:'Podimenike',trainType:'Express' },
    {id:uuid(),arrival:'Maradana',arrivalTime:'06:00:00',destination:'Kandy',destinationTime:'09:31:00',frequency:'Daily',name:'Podimenike',trainType:'Express' }   
]

const scheduleReducer = (state=schduleReducerDefaultState,action)=>{
    switch (action.type){
        case 'ADD_SCHEDULE':
            return[
                ...state,action.schedule
            ];

        case 'REMOVE_SCHEDULE':
            return state.filter(({id})=>{return id!== action.id});

        case 'EDIT_SCHEDULE':
            return state.map((schedule)=>{
                if(schedule.id === action.id){
                    return{
                        ...schedule,
                        ...action.updates
                    };
                }else{
                    return schedule;
                }
            })
        
        default :
            return state;
    }
}

export default scheduleReducer;