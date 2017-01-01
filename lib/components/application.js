import React, { Component } from 'react';
import GuessBlock from './guess-block';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      currentGuess: 'N/A',
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

  render() {
    const { randomNumber, currentGuess } = this.state;
    return (
      <div>
        <GuessBlock
          randomNum={ randomNumber }
          currentGuess={ currentGuess }
          updateGuess={ this.updateGuess.bind(this) }
        />
      </div>
    );
  }
}
