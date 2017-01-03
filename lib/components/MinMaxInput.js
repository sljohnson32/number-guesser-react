import React, { Component } from 'react';

export default class MinMaxInput extends Component {

  render() {
    const { min, max, updateMinMax } = this.props;
    return (
      <div>
        <input
          placeholder='Min'
          type='Number'
          value={ min }
          onChange={ (e) => updateMinMax(e.target.value, 'min')}
        />
        <input
          placeholder='Max'
          type='Number'
          value={ max }
          onChange={ (e) => updateMinMax(e.target.value, 'max')}
        />
      </div>
    );
  }
}
