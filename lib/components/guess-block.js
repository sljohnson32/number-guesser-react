import React, { Component } from 'react';
import GuessInput from './guess-input';
import guessMsg from './helpers/GuessMsg';
import MinMaxInput from './MinMaxInput';

export default class GuessBlock extends Component {
  constructor() {
    super();
    this.state = {
      min: 1,
      max: 100,
    };
  }

  resetMinMax() {
    this.setState({ min: 1, max: 100 });
  }

  updateMinMax(val, prop) {
    if (prop === 'min') {
      this.setState({ min: val });
    } else if (prop === 'max') {
      this.setState({ max: val });
    }
  }

  render() {
    const { min, max } = this.state;
    const { randomNum, currentGuess, previousGuess, updateGuess, setGuess } = this.props;
    return (
      <div>
        { previousGuess !== 'N/A' ? <p>Your last guess was...</p> : <p>Please start guessing</p> }
        <h2>{ previousGuess }</h2>
        { guessMsg(previousGuess, randomNum) }
        <MinMaxInput min={ min } max={max} updateMinMax={ this.updateMinMax.bind(this) } />
        <GuessInput
          currentGuess={ currentGuess }
          updateGuess={ updateGuess }
          setGuess={ setGuess }
          resetMinMax={ this.resetMinMax.bind(this) }
        />
      </div>
    );
  }
}
