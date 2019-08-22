import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapi) => {
                        const newProps = {...mapMethodsToProps(swapi), ...props};
                        return (
                            <Wrapped {...newProps}/>
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService;