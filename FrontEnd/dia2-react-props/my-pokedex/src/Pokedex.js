import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends React.Component {
    render() {
        return(
        <div>
            <h1>Pokedex</h1>
        <main className = "pokedex-container">
      {
        pokemons.map((pokemon)=> {
          return  <Pokemon pokemonData={pokemon} key={pokemon.id}/>
        })
      }
    </main>
    </div>)
  }
}

export default Pokedex;