import React, {useState, useEffect} from 'react';
import axios from "axios";

import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [usersByMonth, setUsersByMonth] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('https://yalantis-react-school.herokuapp.com/api/task0/users');
        const users = response.data;

        const usersByMonth = {};
        for (let i = 0; i <= 11; i++) {
            usersByMonth[i] = {};
        }

        users.map((user, key) => {
            let month = new Date(String(user.dob)).getMonth();

            usersByMonth[month].append(user)
        });

        setUsersByMonth(usersByMonth);
        setUsers(users);
    };

    useEffect(() => {
            fetchUsers(users)
        }, [users]
    );

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, key) => (
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.dob}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
}

export default App;
