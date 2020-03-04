import React from 'react'
import SignupForm from "./SignupForm";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {addUser} from '../../redux/action/user'

const CreateUser =(props)=>(
    <div>
        <SignupForm
            onSubmit={(user)=>{
                props.addUser(user);
                props.history.push('/');
            }}
        />
    </div>
);

CreateUser.propTypes={
    addUser:PropTypes.func.isRequired,
    users:PropTypes.object.isRequired
};

const mapStateToProps = (state)=>{
    return{
        users:state.users
    }
}

export default connect(mapStateToProps,{addUser})(CreateUser);