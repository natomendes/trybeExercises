import './css/App.css';
import Pokedex from './components/Pokedex';
import FilterButtons from './components/FilterButtons';
import data from './data';
import React, { Component } from "react";


export default class App extends Component  {
  constructor() {
    super();
    this.state = {
      filterOption: 'all',
    }
  }

  setFilterProp = (optionSelected) => {
    this.setState({
      filterOption: optionSelected,
    })
  }
  render() {
    const { filterOption } = this.state;

    return (
      <div className='App'>
        <Pokedex pokemons={data} filter={filterOption} />
        <FilterButtons setFilterProp={this.setFilterProp}/>
      </div>
    )
  }
}
