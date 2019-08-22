import React, { Component } from 'react';

// import './people-page.css';
import ErrorIndicator from '../error-indicator';
import RowContainer from '../row-container';
import ErrorBoundary from '../error-boundary';
import { PersonList, PersonDetails } from '../sw-components';


export default class PeoplePage extends Component {

    state = {
        selectedPersonId: null,
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    onPersonSelected = (selectedPersonId) => {
        this.setState({ selectedPersonId })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <PersonList
                onItemSelected={this.onPersonSelected}/>
        );

        const personDetails = (
            <PersonDetails itemId={this.state.selectedPersonId} />
        )

        return (
            <ErrorBoundary>
                <RowContainer left={itemList} right={personDetails} />
            </ErrorBoundary>
        )
    }
};
