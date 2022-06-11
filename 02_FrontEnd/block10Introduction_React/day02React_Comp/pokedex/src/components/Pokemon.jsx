import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../css/Pokemon.css'

export default class Pokemon extends Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className="pokemon-content">
        <div className="poke-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight {value}{measurementUnit}</p>
        </div>
        <div>
          <img src={image} alt="pokemon image" />
        </div>
      </div>
    )
  }  
}

Pokemon.propTypes = {
  pokemon: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
}