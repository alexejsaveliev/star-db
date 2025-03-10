import React from 'react';
import PropTypes from 'prop-types';

import './row-container.css'

const RowContainer = ({ left, right }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}

RowContainer.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default RowContainer;