import React from 'react';
import { withRouter } from 'react-router-dom';

// import './people-page.css';
import ErrorBoundary from '../error-boundary';
import { StarshipList } from '../sw-components';


const StarshipPage = ({ history }) => {
    return (
        <ErrorBoundary>
            <StarshipList onItemSelected={(itemId) => history.push(itemId)} />
        </ErrorBoundary>
    )
};

export default withRouter(StarshipPage);
