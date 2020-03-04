import uuid from 'uuid'

const schduleReducerDefaultState = {
    schedules:[
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:00:00',destination:'Kandy',destinationTime:'09:31:00',frequency:'Daily',name:'Podimenike',trainType:'Express' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:45:00',destination:'Badulla',destinationTime:'15:27:00',frequency:'Daily',name:'Denuwara Menike',trainType:'Intercity' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'08:30:00',destination:'Badulla',destinationTime:'18:22:00',frequency:'Daily',name:'Udarata Menike',trainType:'Express' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'07:05:00',destination:'Kandy',destinationTime:'09:38:00',frequency:'Saturday,Sunday & Holidays',name:'Intercity',trainType:'Express' },   
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:00:00',destination:'Kandy',destinationTime:'09:31:00',frequency:'Daily',name:'Podimenike',trainType:'Express' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'06:45:00',destination:'Badulla',destinationTime:'15:27:00',frequency:'Daily',name:'Denuwara Menike',trainType:'Intercity' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'08:30:00',destination:'Badulla',destinationTime:'18:22:00',frequency:'Daily',name:'Udarata Menike',trainType:'Express' },
    {id:uuid(),arrival:'Colombo',arrivalTime:'07:05:00',destination:'Kandy',destinationTime:'09:38:00',frequency:'Saturday,Sunday & Holidays',name:'Intercity',trainType:'Express' }
    ],
    loading:false

}

// const schduleReducerDefaultState = {
//     schedules:[],
//     loading:false
// };


const scheduleReducer = (state=schduleReducerDefaultState,action)=>{
    switch (action.type){
        case 'GET_SCHEDULE':
            return{
                ...state,
                schedules:action.schedules,
                loading:false
            };
        case 'ADD_SCHEDULE':
            return{
                ...state,
                schedules:[action.schedule,...state.schedule]
            }

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
        case 'SCHEDULE_LOADING':
            return{
                ...state,
                loading:true
            }
        
        default :
            return state;
    }
}

export default scheduleReducer;