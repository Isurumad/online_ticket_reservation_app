import uuid from 'uuid'

const schduleReducerDefaultState = [
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:00:00',destination:'Kandy',destinationTime:'09:31:00',frequency:'Daily',name:'Podimenike',trainType:'Express' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:45:00',destination:'Badulla',destinationTime:'15:27:00',frequency:'Daily',name:'Denuwara Menike',trainType:'Intercity' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'08:30:00',destination:'Badulla',destinationTime:'18:22:00',frequency:'Daily',name:'Udarata Menike',trainType:'Express' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'07:05:00',destination:'Kandy',destinationTime:'09:38:00',frequency:'Saturday,Sunday & Holidays',name:'Intercity',trainType:'Express' },   
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:00:00',destination:'Kandy',destinationTime:'09:31:00',frequency:'Daily',name:'Podimenike',trainType:'Express' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:45:00',destination:'Badulla',destinationTime:'15:27:00',frequency:'Daily',name:'Denuwara Menike',trainType:'Intercity' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'08:30:00',destination:'Badulla',destinationTime:'18:22:00',frequency:'Daily',name:'Udarata Menike',trainType:'Express' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'07:05:00',destination:'Kandy',destinationTime:'09:38:00',frequency:'Saturday,Sunday & Holidays',name:'Intercity',trainType:'Express' }
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