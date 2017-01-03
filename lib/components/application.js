import React, { Component } from 'react';
import GuessBlock from './guess-block';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      currentGuess: '',
      previousGuess: 'N/A',
    };
  }

  componentDidMount() {
    const newRando = '';
    if (this.state.randomNumber === '') {
      this.setState({ randomNumber: newRando });
    }
  }

  updateGuess(newNum) {
    this.setState({ currentGuess: newNum });
  }

  setGuess(newVal) {
    this.setState({ previousGuess: newVal });
  }

  render() {
    const { currentGuess, randomNumber, previousGuess } = this.state;
    return (
      <div>
        <GuessBlock
          randomNum={ randomNumber }
          currentGuess={ currentGuess }
          previousGuess={ previousGuess }
          updateGuess={ this.updateGuess.bind(this) }
          setGuess={ this.setGuess.bind(this) }
        />
      </div>
    );
  }
}
