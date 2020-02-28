import React from 'react';

const UsersList = (props)=>{
    return(
        <div>
            <p>First Name : {props.user.firstName}</p>
            <p>Last Name : {props.user.lastName}</p>
            <p>Email : {props.user.email}</p>
            <p>Password : {props.user.password}</p>

        </div>
    );
}

export default (UsersList);