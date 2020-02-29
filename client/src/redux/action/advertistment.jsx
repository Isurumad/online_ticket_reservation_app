import uuid from 'uuid'
import axios from 'axios'
const addAdvertistment = ({name='',contactNumber='',location='',title='',description='',images=[]}={})=>({
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

const getAdvertistment=()=> dispatch =>{
    console.log('get add called');
    dispatch(setAdvertistmentLoading());
    axios.get('/api/addvertistment').then(res=>dispatch({
        type:'GET_ADVERTISTMENT',
        adds:res.data,
        loading:false
    }));
}

const setAdvertistmentLoading = ()=>{
    return{
        type:'ADVERTISTMENT_LOADING'
    }
}
export {addAdvertistment,editAdd,deleteAdd,getAdvertistment}
