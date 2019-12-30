import React, {useState, useEffect} from 'react';
import axios from "axios";

import './App.css';

import ListItems from "./components/month/list";
import ListUsers from "./components/users/list";

import {LIST_MONTH} from "./components/helper";

function App() {
    const [users, setUsers] = useState([]);
    const [defaultUsers, setDefaultUsers] = useState([]);
    const [usersByMonth, setUsersByMonth] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://yalantis-react-school.herokuapp.com/api/task0/users`,
            );
            const users = result.data;
            const usersByMonth = {};
            for (let i = 0; i <= 11; i++) {
                usersByMonth[i] = {
                    children: [],
                    className: '',
                    count: 0,
                    monthName: LIST_MONTH[i],
                };
            }


            users.map((user, key) => {
                let month = new Date(String(user.dob));
                let monthIndex = month.getMonth();

                usersByMonth[monthIndex]['count']++;
                usersByMonth[monthIndex]['children'].push(user);
            });

            setUsers(users);
            setDefaultUsers(users);
            setUsersByMonth(usersByMonth);
        };
        fetchData();
    }, []);

    return (
        <>
            <ListItems
                items={usersByMonth}
                handlerOnMouseOver={(users) => {
                    setTimeout(() => {
                        setUsers(users);
                    }, 500)
                }}
            />
            <ListUsers users={users}/>
        </>
    );
}

export default App;
