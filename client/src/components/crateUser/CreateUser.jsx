import React from 'react'
import SignupForm from "./SignupForm";
import { connect } from 'react-redux';
import {addUser} from '../../redux/action/user'

const CreateUser =(props)=>(
    <div>
        <SignupForm
            onSubmit={(user)=>{
                props.dispatch(addUser(user));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(CreateUser);