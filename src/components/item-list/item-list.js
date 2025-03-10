import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css'

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props

    const items = data.map((item) => {
        const { id } = item;
        // const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={item.id}
                onClick={() => onItemSelected(id)}>
                { renderLabel(item) }
            </li>
        )
    })

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemSelected: PropTypes.func,
    children: PropTypes.func
}

export default ItemList