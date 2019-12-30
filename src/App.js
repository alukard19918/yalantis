import React, {useState, useEffect} from 'react';
import axios from "axios";

import './App.css';

import ListItems from "./components/month/list";
import ListUsers from "./components/users/list";

import {getListObjects} from "./components/helper";

function App() {
    const [users, setUsers] = useState([]);
    const [usersByMonth, setUsersByMonth] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://yalantis-react-school.herokuapp.com/api/task0/users`);

            let {listUsersToState, usersByMonth} = getListObjects(result.data);

            setUsers(listUsersToState);
            setUsersByMonth(usersByMonth);
        };
        fetchData();
    }, []);

    return (
        <div className='container'>
            <ListItems items={usersByMonth} handlerOnMouseOver={setUsers} />
            <ListUsers users={users} />
        </div>
    );
}

export default App;
