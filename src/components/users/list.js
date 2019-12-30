import React from 'react';
import PropTypes from 'prop-types';

import Item from "./Item";

import './style.css';

const ListUsers = ({users}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user, key) => (
                   <Item user={user} key={key} position={++key} />
                ))
            }
            </tbody>
        </table>
    );
};

ListUsers.propTypes = {
    users: PropTypes.array.isRequired,
};

export default ListUsers;