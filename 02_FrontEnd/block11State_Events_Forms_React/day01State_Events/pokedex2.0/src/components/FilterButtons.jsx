import { Component } from "react";
import '../css/FilterButtons.css';
import PropTypes from 'prop-types';

export default class FilterButtons extends Component {

  handleClick = (event) => {
    const { setFilterProp, setPokeView } = this.props;
    const filter = event.target.innerText;
    if (filter === 'All') {
      setFilterProp(filter.toLowerCase());
      setPokeView();
    } else {
      setFilterProp(filter);
      setPokeView();
    }
  }

  render() {
    return <div className="FilterButtons">
      <button onClick={this.handleClick}>Fire</button>
      <button onClick={this.handleClick}>All</button>
      <button onClick={this.handleClick}>Electric</button>
    </div>
  }
}

FilterButtons.propType = {
  setFilterProp: PropTypes.func.isRequired,
  setPokeView: PropTypes.func.isRequired,
}