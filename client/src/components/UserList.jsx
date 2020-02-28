import React from 'react'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import {getUsers} from '../redux/action/user'
import PropTypes from 'prop-types'

class UserList extends React.Component{

    componentDidMount(){
        this.props.getUsers();
        console.log('component mounted');
    }
    render(){
        console.log(this.props);
        const {users}=this.props.users;
        return(
            <div>
                
                {users.map((user)=>
                    <UsersList user={user} key={user.firstName} />
                )}
            </div>
        );

    };
}

UserList.propTypes={
    getUsers:PropTypes.func.isRequired,
    users:PropTypes.object.isRequired
};

const mapStateToProps = (state)=>{
    return{
        users:state.users
    }
}

const ConnectedUserList = connect(mapStateToProps,{getUsers})(UserList);

export default ConnectedUserList;