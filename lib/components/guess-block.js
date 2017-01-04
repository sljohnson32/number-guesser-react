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
        { guessMsg(previousGuess, randomNumber) }
        <MinMaxInput min={ min } max={max} updateMinMax={ updateMinMax } />
        <GuessInput
          currentGuess={ currentGuess }
          updateGuess={ updateGuess }
          setGuess={ setGuess }
          resetMinMax={ resetMinMax }
        />
      </div>
    );
  }
}
