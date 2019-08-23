import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../header'
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';
import { StarshipDetails } from '../sw-components';

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
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />
                            <Switch>
                                <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                                <Route path="/people/:id?" component={PeoplePage}></Route>
                                <Route path="/planets/" component={PlanetPage}></Route>
                                <Route path="/starships/" component={StarshipPage} exact></Route>
                                <Route path="/starships/:id"
                                    render={({ match, location, history }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }} />
                                <Route render={() => <h2>Page not found</h2>}/>    
                                <Redirect to="/" />    
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}