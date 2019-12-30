import React from 'react';
import PropTypes from "prop-types";

import {getCssClassName} from "../helper";

const ListItem = ({monthData, handlerOnMouseOver}) => (
    <li className={getCssClassName(monthData.count)} onMouseOver={() => {handlerOnMouseOver(monthData.children)}}>
            {monthData.monthName} <span>({monthData.count})</span>
    </li>
);

ListItem.propTypes = {
    monthData: PropTypes.shape({
        monthName: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        children: PropTypes.array.isRequired,
    }),
    handlerOnMouseOver: PropTypes.func.isRequired
};

export default ListItem;