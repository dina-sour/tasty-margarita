import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';

const URL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      searchValue: ''
    } 
    
    this.onChange = this.onChange.bind(this) 
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        const pokemon = res.data.pokemon;
        this.setState({ pokemon });
        console.log(pokemon);
      })
  }

  onChange(e){
    this.setState({
      searchValue: e.target.value 
    })
  }

  render() {

    return (
      <div className="app">
        <div className = "header">
          POKéDEX
        </div>

        <input className = "search-bar" type="text" onChange={this.onChange} placeholder='Search for Pokémon...'></input>

            <div className = "poke-grid">
              { this.state.pokemon.filter(poke=>poke.name.toString().toLowerCase().includes(this.state.searchValue.toLowerCase()))
              .map(pokemon => 
              <div className = "poke-cell zoom" onClick = {this.nonesense}>

                    <div className = "poke-name">{pokemon.name}</div>

                    <div className = "poke-cell-content">

                          <div className = "poke-photo">
                            <img src = {pokemon.img} ></img>
                          </div>
                            <div className = "poke-info">
                                <div className = "poke-number">{pokemon.num}</div>
                                <div className = "poke-type">Type:  {pokemon.type[0]} </div>
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
