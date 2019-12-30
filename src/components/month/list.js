import React from 'react';
import PropTypes from 'prop-types';

import LisstItem from './ListItem';

import './style.css';

const ListItems = ({items, handlerOnMouseOver}) => {
    return (
        <ul>
            {
                Object.keys(items).map(monthIndex => (
                    <LisstItem
                        monthData={items[monthIndex]}
                        handlerOnMouseOver={handlerOnMouseOver}
                        key={monthIndex}
                    />
                ))
            }
        </ul>
    );

};

ListItems.propTypes = {
    items: PropTypes.object.isRequired,
    handlerOnMouseOver: PropTypes.func.isRequired,
};

export default ListItems;