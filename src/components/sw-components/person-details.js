import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {

    return (
        <ItemDetails {...props}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
}

const mapMethodToProps = (swapi) => {
    return {
        getImageUrl: swapi.getPersonImage,
        getData: swapi.getPerson
    }
}

export default withSwapiService(PersonDetails, mapMethodToProps);