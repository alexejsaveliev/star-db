import React, { Component } from 'react';

// import './people-page.css';
import ErrorIndicator from '../error-indicator';
import RowContainer from '../row-container';
import ErrorBoundary from '../error-boundary';
import { PlanetList, PlanetDetails } from '../sw-components';


export default class PlanetPage extends Component {


    state = {
        selectedPlanet: null,
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    onPlanetSelected = (selectedPlanet) => {
        this.setState({ selectedPlanet })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <PlanetList
                onItemSelected={this.onPlanetSelected}/>
        );

        const planetDetails = (
            <PlanetDetails itemId={this.state.selectedPlanet} />
        )

        return (
            <ErrorBoundary>
                <RowContainer left={itemList} right={planetDetails} />
            </ErrorBoundary>
        )
    }
};
