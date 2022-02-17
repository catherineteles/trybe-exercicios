import React from "react";

class Pokemon extends React.Component {
    render(){
        const { name, type, averageWeight, image } = this.props.pokemonData;
    return (
      <section className="pokemon-container">
        <div className="pokemon-info">
        <p>{name}</p>
        <p>{type}</p>
        <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt=""/>
      </section>
    )
  }
}

export default Pokemon;
