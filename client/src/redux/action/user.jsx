import uuid from 'uuid'
import axios from 'axios'

const addUser = ({firstName='',lastName='',email='',password=''}={})=>({
    type:'ADD_USER',
    user:{
        id:uuid(),
        firstName,
        lastName,
        email,
        password
    }
});

const getUsers =() => dispatch =>{
    console.log('get user called');
    dispatch(setUsersLoading());
    axios.get('/api/user').then(res=>dispatch({
        type:'GET_USERS',
        users:res.data,
        loading:false

    }))
}

const editUser = ((id,updates)=>({
    type:'EDIT_USER',
    id,
    updates
}));

const removeUser=(({id}={})=>({
    type:'REMOVE_USER',
    id
}));

const setUsersLoading = ()=>{
    return{
        type:'USER_LOADING'
    }
}

export {addUser,editUser,removeUser,getUsers,setUsersLoading}