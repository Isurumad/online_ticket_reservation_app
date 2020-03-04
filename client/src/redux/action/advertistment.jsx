import uuid from 'uuid'
import axios from 'axios'

const addAdvertisement = ({name='',contactNumber='',location='',title='',description='',images=[]}={})=>({
    type:'ADD_ADVERTISTMENT',
    add:{
        id:uuid(),
        name,
        contactNumber,
        location,
        description,
        images,
        title

    }
});

const editAdd=((id,updates)=>({
    type:'EDIT_ADVERTISTMENT',
    id,
    updates
}));

const deleteAdd=(({id}={})=>({
    type:'DELETE_ADVERTISTMENT',
    
}));

const getAdvertisement=()=> dispatch =>{
    console.log('get add called');
    dispatch(setAdvertisementLoading());
    axios.get('/api/user/advertistment').then(res=>dispatch({
        type:'GET_ADVERTISTMENT',
        adds:res.data,
    }));
}

const setAdvertisementLoading = ()=>{
    return{
        type:'ADVERTISTMENT_LOADING'
    }
}
export {addAdvertisement,editAdd,deleteAdd,getAdvertisement}
