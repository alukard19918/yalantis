import React from 'react';

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
                    <tr key={key++}>
                        <td>{key}</td>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.dob}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default ListUsers;