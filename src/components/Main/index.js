import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import Container from '../Container/styles';
import { Info, SubmitButton } from './styles';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            id: 0,
            planet: {},
        };
    }

    async componentDidMount() {
        const randomPlanetId = this.generateRandomId(60, 1);
        const planetsInCache = localStorage.getItem(randomPlanetId);

        if (planetsInCache) {
            return this.setState({
                planet: JSON.parse(planetsInCache),
                id: randomPlanetId,
            });
        }

        const response = await api.get(`planets/${randomPlanetId}/`);
        localStorage.setItem(randomPlanetId, JSON.stringify(response.data));

        return this.setState({ planet: response.data, id: randomPlanetId });
    }

    componentDidUpdate(_, prevState) {
        const { planet, id } = this.state;
        if (prevState !== planet) {
            localStorage.setItem(id, JSON.stringify(planet));
        }
    }

    handleClick = async e => {
        e.preventDefault();

        this.setState({ loading: true });
        const randomPlanetId = this.generateRandomId(61, 1);
        const planetInCache = localStorage.getItem(randomPlanetId);

        if (planetInCache) {
            return this.setState({
                planet: JSON.parse(planetInCache),
                id: randomPlanetId,
                loading: false,
            });
        }

        const response = await api.get(`planets/${randomPlanetId}/`);
        return this.setState({
            planet: response.data,
            id: randomPlanetId,
            loading: false,
        });
    };

    generateRandomId = (max, min) =>
        Math.round(Math.random() * (max - min) + min);

    render() {
        const { planet, loading } = this.state;

        return (
            planet &&
            planet.films !== undefined && (
                <Container>
                    <Info>
                        <section className="planet-name-container">
                            <h1>Planet {planet.name}</h1>
                        </section>

                        <section className="planet-information-container">
                            <p>
                                Population: <span>{planet.population}</span>
                            </p>
                            <p>
                                Climate: <span>{planet.climate}</span>
                            </p>
                            <p>
                                Terrain: <span>{planet.terrain}</span>
                            </p>
                            <p>
                                Gravity: <span>{planet.gravity}</span>
                            </p>
                            <p>
                                Diameter: <span>{planet.diameter}</span>
                            </p>
                            <p>Featured in {planet.films.length} films</p>
                        </section>
                    </Info>
                    <SubmitButton onClick={this.handleClick} loading={loading}>
                        {loading ? (
                            <FaSpinner color="black" size={13} />
                        ) : (
                            'Next'
                        )}
                    </SubmitButton>
                </Container>
            )
        );
    }
}
