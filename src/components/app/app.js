import React, { Component } from 'react';

import Header from '../header'
import RandomPlanet from '../random-planet';
import { PeoplePage } from '../pages';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {

    swapi = new SwapiService()

    state = {
        selectedPerson: null,
        image: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapi}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet />
                        <PeoplePage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}