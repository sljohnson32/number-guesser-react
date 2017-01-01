import React, { Component } from 'react';
import GuessInput from './guess-input';
import { GuessMsg } from './helper';

export default class GuessBlock extends React.Component {
  render() {
    const { randomNum, currentGuess, updateGuess } = this.props;
    const diff = currentGuess - randomNum;
    return (
      <div>
        { currentGuess !== 'N/A' ? <p>Your last guess was...</p> : <p>Please start guessing</p> }
        <h2>{ currentGuess }</h2>
        <GuessMsg diff={ diff } />
        <GuessInput updateGuess={ updateGuess } />
      </div>
    );
  }
}
