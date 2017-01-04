import React, { Component } from 'react';
import GuessInput from './guess-input';
import guessMsg from './GuessMsg';
import MinMaxInput from './MinMaxInput';

export default class GuessBlock extends Component {

  render() {
    const { min, max, randomNumber, currentGuess, previousGuess, updateGuess, setGuess, updateMinMax, resetMinMax } = this.props;
    return (
      <div>
        { previousGuess !== 'N/A' ? <p>Your last guess was...</p> : <p>Please start guessing</p> }
        <h2>{ previousGuess }</h2>
        { guessMsg(currentGuess, previousGuess, randomNumber, setGuess, updateGuess, resetMinMax, min, max) }
        <MinMaxInput min={ min } max={max} updateMinMax={ updateMinMax } />
        <GuessInput
          min={ min }
          max={ max }
          currentGuess={ currentGuess }
          updateGuess={ updateGuess }
          setGuess={ setGuess }
          resetMinMax={ resetMinMax }
        />
      </div>
    );
  }
}
