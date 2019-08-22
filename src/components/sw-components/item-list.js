import React from 'react';
import { withData, withSwapiService } from '../hoc-helpers';
import ItemList from '../item-list';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props} >
                {fn}
            </Wrapped>
        )
    }
}

const renderLabel = ({name}) => <span>{name}</span>

const mapPersonMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPersons
    }
}

const mapStarshipMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllStarships
    }
}

const mapPlanetMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPlanets
    }
}

const PersonList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderLabel)),
                            mapPersonMethodsToProps);

const StarshipList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderLabel)),
                            mapStarshipMethodsToProps);

const PlanetList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderLabel)),
                            mapPlanetMethodsToProps);

export {
    PersonList,
    StarshipList,
    PlanetList
}