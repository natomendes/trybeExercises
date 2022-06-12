import React, { Component } from "react";
import PropTypes, { arrayOf } from 'prop-types';
import Pokemon from "./Pokemon";
import '../css/Pokedex.css'

export default class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokeView: 0,
    }
  }

  nextPokemon = () => {
    const { pokemons, filter } = this.props;
    if (filter === 'all') {
      return this.setState(({ pokeView }) => ({
        pokeView: (pokeView === pokemons.length - 1)
        ? 0
        : pokeView + 1
      }))
    }
    const filteredPokemons = pokemons.filter(({ type }) =>
      type === filter);
    return this.setState(({ pokeView }) => ({
      pokeView: (pokeView === filteredPokemons.length - 1)
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
    const { pokemons, filter } = this.props;
    if (filter === 'all') {
      return this.setState(({ pokeView }) => ({
        pokeView: (pokeView === 0)
        ? pokemons.length - 1
        : pokeView - 1
      }))
    }
    const filteredPokemons = pokemons.filter(({ type }) =>
      type === filter);
    return this.setState(({ pokeView }) => ({
      pokeView: (pokeView === 0)
      ? filteredPokemons.length - 1
      : pokeView - 1
    }))
  }

  render() {
    const { pokeView } = this.state;
    const { pokemons, filter } = this.props;
    const filterPoke = filter === 'all'
      ? pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)
      : pokemons.filter(({ type }) => type === filter)
          .map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)

    if (!filterPoke[pokeView]) {
      this.setState({
        pokeView: 0
      })
    }
    return <div className="Pokedex">
      <button onClick={this.prevPokemon}>{String.fromCharCode(8249)}</button>
      {filterPoke[pokeView]}
      <button onClick={this.nextPokemon}>{String.fromCharCode(8250)}</button>
    </div>
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
  filter: PropTypes.string.isRequired
}