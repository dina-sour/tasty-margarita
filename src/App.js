import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const URL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }  
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        const pokemon = res.data.pokemon;
        this.setState({ pokemon });
        console.log(pokemon);
      })
  }

  render() {
    return (
      <div className="app">
        <div className = "header">
          Pokédex
        </div>
          <div className = "pokeGrid">
            { this.state.pokemon.map(pokemon => 
          <div className = "pokeCell zoom">

            <div className = "poke-name">{pokemon.name}</div>

            <div className = "poke-cell-content">

              <div className = "poke-photo">
                <img src = {pokemon.img} ></img>
              </div>
                <div className = "poke-info">
                    <div className = "poke-type">Type:  {pokemon.type[0]} </div>
                    <div className = "poke-height">Weight:  {pokemon.weight}</div>
                    <div className = "poke-weight">Height:  {pokemon.height}</div>
                </div>
            </div>
          </div>
          
          )}

        </div>
        <div className = "footer">
            <p>Made with love by <a href="https://github.com/dina-sour">Dina Matveev</a></p>
        </div>
      </div>
    );
  }
}

export default App;
