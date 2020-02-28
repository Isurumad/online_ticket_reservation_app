
const userReducerDefaultStat={
    users:[{firstName:"test name"}],
    loading:false
};


const userReducer = (state= userReducerDefaultStat,action)=>{
    switch(action.type){
        case 'GET_USERS':
            return{
                users:action.users,
                loading:true
            };
            
        case 'ADD_USER':
            return{
                ...state,
                users:[action.user,...state.users]
            };
        case 'REMOVE_USER':
            return state.filter(({id})=>{return id!==action.id});

        case 'EDIT_USER':
            return state.map((user)=>{
                if(user.id === action.id){
                    return{
                        ...user,
                        ...action.updates
                    };
                }else{
                    return user
                }
            });
        case 'USER_LOADING':
            return{
                ...state,
                loading:true
            }    
        default:
            return state;
    }
};

export default userReducer;