import axios from 'axios'


export default class SwapiService {

    _baseUrl = 'https://swapi.co/api'
    _imageBaseUrl = 'https://starwars-visualguide.com/assets/img/'

    async getResource(resource) {

        const url = this._baseUrl + resource;

        try {
            const res = await axios.get(url)
            return res.data
        } catch (error) {
            throw new Error(`Could not fetch ${url}, received ${error.response.status}`)
        }
    }

    getAllPersons = async () => {
        const res = await this.getResource('/people/')
        return res.results.map(this._transformPerson)
    }

    getPerson = async ( id ) => {
        const res = await this.getResource(`/people/${id}`)
        return this._transformPerson(res);
    }

    getAllStarships = async () => {
        const res = await this.getResource('/starships/')
        return res.results.map(this._transformStarship)
    }

    getStarship = async ( id ) => {
        const res = await this.getResource(`/starships/${id}`)
        return this._transformStarship(res)
    }

    getAllPlanets = async () => {
        const res = await this.getResource('/planets/')
        return res.results.map(this._transformPlanet)
    }

    getPlanet = async ( id ) => {
        const res = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(res)
    }

    getStarshipImage = (id) => {
        return this._imageBaseUrl + `/starships/${id}.jpg`
    }

    getPersonImage = (id) => {
        return this._imageBaseUrl + `/characters/${id}.jpg`
    }

    getPlanetImage = (id) => {
        return this._imageBaseUrl + `/planets/${id}.jpg`
    }

    _extractId(item) {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    _transformPlanet = (planet) => {
        const id = this._extractId(planet);

        return {
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            id
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}