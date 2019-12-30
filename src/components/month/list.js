import React from 'react';

import ListItem from "./ListItem";

import './style.css';

const ListItems = ({items, handlerOnMouseOver}) => {
    return (
        <ul
            onMouseOut={() => {
                setTimeout(() => {
                    console.log(123)
                }, 2000);
            }}
        >
            {
                Object.keys(items).map(monthIndex => (
                    <ListItem
                        monthData={items[monthIndex]}
                        handlerOnMouseOver={handlerOnMouseOver}
                        key={monthIndex}
                    />
                ))
            }
        </ul>
    );

};

export default ListItems;