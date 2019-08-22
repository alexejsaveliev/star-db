import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    static defaultProps = {
        updateInterval: 10000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    }

    state = {
        loading: true,
        error: false,
        planet: {}
    }

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false })
    }

    onError = () => {
        this.setState({ 
            error: true, 
            loading: false 
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {

        const { loading, error, planet } = this.state
        const hasData = !(loading || error)

        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <PlanetView planet={planet} /> : null
        const errorContent = error ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {errorContent}
                {content}
            </div>
        );
    }
};


const PlanetView = ({ planet }) => {

    const { population, rotationPeriod, diameter, name, id } = planet
    const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

    return (
        <React.Fragment>
            <img className="planet-image"
                src={imgUrl} alt="planet img" />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
