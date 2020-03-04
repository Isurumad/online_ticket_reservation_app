import axios from 'axios'

const addUser = (user)=> dispatch => {
    axios.post('/api/user',user).then(res=> dispatch({
        type:'ADD_USER',
        user:res.data
    }))
}

const getUsers =() => dispatch =>{
    dispatch(setUsersLoading());
    axios.get('/api/user/').then(res=>dispatch({
        type:'GET_USERS',
        users:res.data

    }))
}

const editUser = ((id,updates)=>({
    type:'EDIT_USER',
    id,
    updates
}));

const removeUser= id =>{
    return{
        type:'REMOVE_USER',
        id
    }
}

const setUsersLoading = ()=>{
    return{
        type:'USER_LOADING'
    }
}

export {addUser,editUser,removeUser,getUsers,setUsersLoading}