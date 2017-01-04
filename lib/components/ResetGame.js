import randomNum from './RandomNum';

export const resetGame = (resetMinMax, updateGuess, setGuess, min, max) => {
  resetMinMax(min, max);
  updateGuess('');
  setGuess('N/A');
};
