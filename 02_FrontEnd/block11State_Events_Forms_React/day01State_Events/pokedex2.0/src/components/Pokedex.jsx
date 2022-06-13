import React, { Component } from "react";
import PropTypes from 'prop-types';
import Pokemon from "./Pokemon";
import '../css/Pokedex.css'
import FilterButtons from "./FilterButtons";

export default class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokeView: 0,
    }
  }

  nextPokemon = () => {
    const { pokemons } = this.props;
    return this.setState(({ pokeView }) => ({
      pokeView: (pokeView === pokemons.length - 1)
      ? 0
      : pokeView + 1
    })) 
  }

  setPokeView = () => {
    this.setState({
      pokeView: 0
    })
  }

  prevPokemon = () => {
    const { pokemons } = this.props;
    return this.setState(({ pokeView }) => ({
      pokeView: (pokeView === 0)
      ? pokemons.length - 1
      : pokeView - 1
    }))
  }

  render() {
    const { pokeView } = this.state;
    const { pokemons, setFilterProp } = this.props;
    const pokemonsView = pokemons.map((pokemon) =>
      <Pokemon pokemon={pokemon} key={pokemon.id} />)

    
    return (
    <>
      <div className="Pokedex">
        <button onClick={this.prevPokemon}>{String.fromCharCode(8249)}</button>
        {pokemonsView[pokeView]}
        <button onClick={this.nextPokemon}>{String.fromCharCode(8250)}</button>
      </div>
      <FilterButtons setFilterProp={setFilterProp} setPokeView={this.setPokeView}/>
    </>
    )
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })),
  setFilterProp: PropTypes.func.isRequired
}