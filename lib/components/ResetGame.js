import randomNum from './RandomNum';

export const resetGame = (resetMinMax, updateGuess, setGuess) => {
  resetMinMax();
  updateGuess('');
  setGuess('N/A');
};
