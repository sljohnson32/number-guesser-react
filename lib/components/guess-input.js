import React, { Component } from 'react';
import { resetGame } from './helpers/Reset-Game';

export default class GuessInput extends Component {
  render() {
    const { currentGuess, setGuess, updateGuess, resetMinMax } = this.props;
    return (
      <div>
        <input
          placeholder='Enter your guess here...'
          type='Number'
          value={ currentGuess }
          onChange={ (e) => updateGuess(e.target.value) }
        />
        <section>
          <button
            onClick={ () => setGuess(currentGuess) }
          >Guess</button>
          <button
            onClick={ () => updateGuess('') }
          >Clear</button>
          <button
            onClick={ () => resetGame(resetMinMax, updateGuess, setGuess)}
          >Reset Game</button>
        </section>
      </div>
    );
  }
}
