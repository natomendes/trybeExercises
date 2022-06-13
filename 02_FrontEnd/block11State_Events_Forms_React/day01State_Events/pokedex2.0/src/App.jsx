import './css/App.css';
import Pokedex from './components/Pokedex';
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
  
  handleFilterPoke = () => {
    const { filterOption } = this.state;
    return filterOption === 'all'
    ? data
    : data.filter(({ type }) => type === filterOption);
  }

  render() {
    const { filterOption } = this.state;

    return (
      <div className='App'>
        <Pokedex pokemons={this.handleFilterPoke()} setFilterProp={this.setFilterProp}/>
      </div>
    )
  }
}
