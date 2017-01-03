export const resetGame = (resetMinMax, updateGuess, setGuess) => {
  resetMinMax();
  updateGuess('');
  setGuess('');
};
