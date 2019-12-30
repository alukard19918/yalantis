import React from "react";
import PropTypes from 'prop-types';

const Item = ({user, position}) => (
    <tr>
        <td>{position}.</td>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.dob}</td>
    </tr>
);

Item.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired
    }).isRequired,
    position: PropTypes.number.isRequired
};

export default Item;