import React from 'react';
import styled from 'styled-components';
import PokemonCard from '../../components/pokemon-card/PokemonCard';

const PokemonGrid = (props) => {
    return (
        <PokemonGridContainer>
            { props.pokemon.map(pokemon => {
                return (
                    <PokemonCard
                        name={pokemon.name}
                        img={pokemon.img}
                        num={pokemon.num}
                        types={pokemon.type.join()}
                        key={pokemon.name}
                    />
                )
            }
            )}
        </PokemonGridContainer>
    )
}

const PokemonGridContainer = styled.div`
    color: white;
    font-weight: bold;
    font-family: Abel, sans-serif;
    letter-spacing: 0.1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    justify-content: space-evenly;
`;

export default PokemonGrid;