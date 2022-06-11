import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from '../data';
import '../css/Pokedex.css'

export default class Pokedex extends Component {
  render() {
    return <div className="Pokedex">
      {data.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
    </div>
  }
}