import React from 'react';

const guessMsg = (previousGuess, randomNumber) => {
  const diff = previousGuess - randomNumber;
  return createMsg(diff);
};

const createMsg = (diff) => {
  let msg = '';
  if (diff === 0) {
    msg = winMsg();
  } else if (diff > 0) {
    msg = highMsg();
  } else if (diff < 0) {
    msg = lowMsg();
  }
  return msg;
};

const winMsg = () => {
  return (
    <p>You got it!</p>
  );
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
