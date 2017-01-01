import React from 'react';

export const GuessInput = (updateGuess) => {
  return (
    <div>
      <input
        placeholder="Enter your guess here..."
      />
      <section>
        <button>Guess</button>
        <button>Clear</button>
        <button>Reset Game</button>
      </section>
    </div>
  );
};
