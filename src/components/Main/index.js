import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import Container from '../Container/styles';
import { Info, SubmitButton } from './styles';

export default class Main extends Component {
  render() {
    return (
        <Container>
            <Info>
                <h1>Nome do Planeta</h1>

                <p>Population: 222222</p>
                <p>Climate: Arid</p>
                <p>Terrain: Desert</p>
                <p>Featured in N films</p>

            </Info>
            <SubmitButton loading={""}>
                {true ? (
                    <FaSpinner color="black" size={14} />
                ) : (
                    "Next"
                )}
            </SubmitButton>
        </Container>
    )
  }
}
