import { Component } from "react";
import '../css/FilterButtons.css'

export default class FilterButtons extends Component {
  render() {
    const { setFilterProp } = this.props;
    return <div className="FilterButtons">
      <button onClick={() => setFilterProp('Fire')}>Fire</button>
      <button onClick={() => setFilterProp('all')}>All</button>
      <button onClick={() => setFilterProp('Electric')}>Electric</button>
    </div>
  }
}