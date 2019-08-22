import React, { Component } from 'react';

// import './people-page.css';
import ErrorIndicator from '../error-indicator';
import RowContainer from '../row-container';
import ErrorBoundary from '../error-boundary';
import { StarshipList, StarshipDetails } from '../sw-components';


export default class StarshipPage extends Component {


    state = {
        selectedItem: null,
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <StarshipList
                onItemSelected={this.onItemSelected}/>
        );

        const itemDetails = (
            <StarshipDetails itemId={this.state.selectedItem} />
        )

        return (
            <ErrorBoundary>
                <RowContainer left={itemList} right={itemDetails} />
            </ErrorBoundary>
        )
    }
};
