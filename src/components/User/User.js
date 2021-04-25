import React from 'react';
import './User.css'

const User = (props) => {
    const user = props.user;
    return (
        <div className="user-container">
            <h2>Name: {user.name}</h2>
            <h3>Roll: {user.id}</h3>
            <h4>Email: {user.email}</h4>
            <h4>Phone: {user.phone}</h4>

        </div>
    );
};

export default User;