import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api'
import Container from '../Container/styles';
import { Info, SubmitButton } from './styles';

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            loading: false,
            planet : {}
        }
    }

    generateRandomId(max, min){
        return Math.round(Math.random() * (max - min) + min)
    }

    componentDidUpdate(_, prevState) {
        const { planet } = this.state;
        if (prevState !== planet) {
            localStorage.setItem('planet', JSON.stringify(planet));
        }
    }

    async componentDidMount(){
        const planetsInCache = localStorage.getItem("planet")
        
        if(planetsInCache){
            return this.setState({ planet:  JSON.parse(planetsInCache)})
        }

        const response = await api.get(`planets/${this.generateRandomId(60, 1)}/`)
        this.setState({ planet: response.data })
    }

    handleClick = async e => {
        e.preventDefault()

        this.setState({ loading: true })
        let randomNumber = this.generateRandomId(60, 1)
        const response = await api.get(`planets/${randomNumber}/`)

        this.setState({ 
            planet: response.data,
            loading: false
        })
    }

    render() {
        let { planet, loading } = this.state
 
        return (
             planet && planet.films !== undefined && <Container>
                <Info>
                    <section>
                        <h1 className="planet-name">{planet.name}</h1>
                    </section>
                    <p>Population: {planet.population}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Featured in {planet.films.length} films</p>

                </Info>
                <SubmitButton onClick={this.handleClick} loading={loading}>
                    { loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    ) : (
                        "Next"
                    )}
                </SubmitButton>
            </Container>
        )
    }
}
