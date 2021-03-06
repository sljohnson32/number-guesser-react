import React, { Component } from 'react';
import { resetGame } from './ResetGame';

export default class GuessInput extends Component {
  render() {
    const { min, max, currentGuess, setGuess, updateGuess, resetMinMax } = this.props;
    return (
      <div>
        <input
          placeholder='Enter your guess here...'
          type='Number'
          min={ min }
          max={ max }
          value={ currentGuess }
          onChange={ (e) => updateGuess(e.target.value) }
        />
        <section>
          <button
            disabled={ !currentGuess }
            onClick={ () => setGuess(currentGuess) }
          >Guess</button>
          <button
            disabled={ !currentGuess }
            onClick={ () => updateGuess('') }
          >Clear</button>
          <button
            onClick={ () => resetGame(resetMinMax, updateGuess, setGuess, 0, 100)}
          >Reset Game</button>
        </section>
      </div>
    );
  }
}
