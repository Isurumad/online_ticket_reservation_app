import uuid from 'uuid'

export const addSchedule=({arrival='',destination='',destinationTime='',arrivalTime='',name='',trainType=''})=>({
    type:'ADD_SCHEDULE',
    schedule:{
        id:uuid(),
        arrival,
        destination,
        destinationTime,
        arrivalTime,
        name,
        trainType

    }
});

export const removeSchedule = ({id}={})=>({
    type:'REMOVE_SCHEDULE',
    id
});

export const editSchedule = (id,updates)=>({
    type:'EDIT_SCHEDULE',
    id,
    updates
});

