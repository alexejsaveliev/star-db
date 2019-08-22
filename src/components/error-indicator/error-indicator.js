import React from 'react';

import './error-indicator.css'
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error img"/>
            <span className="head">Error</span>
            <span>Ops! Something went wrong</span>
            <span>But we already send droiders to fix it</span>
        </div>
    )
}


export default ErrorIndicator;