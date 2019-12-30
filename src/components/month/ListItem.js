import React from 'react';
import {getCssClassName} from "../helper";

const ListItem = ({monthData, handlerOnMouseOver}) => (
    <li className={getCssClassName(monthData.count)} onMouseOver={() => {handlerOnMouseOver(monthData.children)}}>
        <a>
            {monthData.monthName} <span>({monthData.count})</span>
        </a>
    </li>
);

export default ListItem;