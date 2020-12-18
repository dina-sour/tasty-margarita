import React from 'react';
import styled from 'styled-components';

const PokemonCard = (props) => {
    return (
        <PokemonCardContainer>
            <PokemonName color={props.color}>{props.name}</PokemonName>
                <PokemonPhoto>
                    <img src={props.img} ></img>
                </PokemonPhoto>
                    <PokemonNumber>{props.num}</PokemonNumber>
                    <PokemonTypes>Type:  {props.types} </PokemonTypes>
        </PokemonCardContainer>
    )
}

const PokemonCardContainer = styled.div`
    border-radius: 0.8em;
    border: 3px solid rgb(138, 189, 180);
    height: 13em;
    display: flex;
    width: 12em;
    margin: 2% 2% 2% 2%;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
    transition: all linear 0.5s;
    transition: transform .2s;
    &:hover {
        -ms-transform: scale(1.06);
        -webkit-transform: scale(1.06);
        transform: scale(1.06); 
        box-shadow: 0 4px 8px 0 rgba(46, 44, 44, 0.2), 0 6px 20px 0 rgba(49, 48, 48, 0.19);
    }
`;
const PokemonName = styled.div`
    letter-spacing: 0.2em;
    padding: 2% 0 2% 0;
    color: white;
    border-radius: 0.2em;
    background-color: ${props => props.color || "rgb(138, 189, 180)"};
`
const PokemonPhoto = styled.div`
    padding-top: 1%;
    align-self: center;
`;

const PokemonNumber = styled.div`
    font-size: 0.6em;
    padding-bottom: 2%;
    font-family: Oswald, sans-serif;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: rgb(65, 61, 61);
`;
const PokemonTypes = styled.div`
    color: rgb(65, 61, 61);
    font-size: 0.9em;
    padding-bottom: 3%;
    font-family: Oswald, sans-serif;
    letter-spacing: 0.1em;
    font-weight: bold;
`;
export default PokemonCard;