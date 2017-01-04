import React from 'react';
import { resetGame } from './ResetGame';

const guessMsg = (currentGuess, previousGuess, randomNumber, setGuess, updateGuess, resetMinMax, min, max) => {
  const diff = previousGuess - randomNumber;
  return createMsg(currentGuess, diff, setGuess, updateGuess, resetMinMax, min, max);
};

const createMsg = (currentGuess, diff, setGuess, updateGuess, resetMinMax, min, max) => {
  let msg = '';
  if (diff === 0) {
    alert(winMsg());
    const newMin = min - 10;
    const newMax = max + 10;
    resetGame(resetMinMax, updateGuess, setGuess, newMin, newMax);
  } else if (diff > 0) {
    return highMsg();
  } else if (diff < 0) {
    return lowMsg();
  }
};

const winMsg = () => {
  return 'You got it!  Now try to guess a new number within a larger range.'
};

const highMsg = () => {
  return (
    <p>Sorry, that guess is too high. Try a lower number.</p>
  );
};

const lowMsg = () => {
  return (
    <p>Sorry, that guess is too low. Try a higher number.</p>
  );
};

export default guessMsg;
