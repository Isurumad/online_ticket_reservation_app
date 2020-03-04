import React from 'react'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import {getUsers} from '../redux/action/user'

class UserList extends React.Component{

    componentDidMount(){
        this.props.getUsers();
    }
    render(){
        const {users}=this.props.users;
        return(
            <div>
                
                {users.map((user)=>
                    <UsersList user={user} key={user._id} />
                )}
            </div>
        );

    };
}

const mapStateToProps = (state)=>{
    return{
        users:state.users
    }
}

const ConnectedUserList = connect(mapStateToProps,{getUsers})(UserList);

export default ConnectedUserList;