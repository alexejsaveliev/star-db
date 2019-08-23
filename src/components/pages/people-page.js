import React from 'react';
import { withRouter } from 'react-router-dom';

// import './people-page.css';
import RowContainer from '../row-container';
import ErrorBoundary from '../error-boundary';
import { PersonList, PersonDetails } from '../sw-components';


const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    const itemList = (
        <PersonList
            onItemSelected={(itemId) => history.push(itemId)} />
    );

    const personDetails = (
        <PersonDetails itemId={id} />
    )

    return (
        <ErrorBoundary>
            <RowContainer left={itemList} right={personDetails} />
        </ErrorBoundary>
    )
};

export default withRouter(PeoplePage);