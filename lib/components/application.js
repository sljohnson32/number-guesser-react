import React, { Component } from 'react';
import GuessBlock from './guess-block';
import randomNum from './RandomNum';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      currentGuess: '',
      previousGuess: 'N/A',
      min: 1,
      max: 100,
    };
  }

  componentDidMount() {
    const { min, max } = this.state;
    const newRando = randomNum(min, max);
    if (this.state.randomNumber === '') {
      this.setState({ randomNumber: newRando });
    }
  }

  resetMinMax() {
    const newRando = randomNum(1, 100);
    this.setState({ min: 1, max: 100, randomNumber: newRando });
  }

  updateMinMax(val, prop) {
    const { min, max } = this.state;
    if (prop === 'min') {
      const newRando = randomNum(+val, max);
      this.setState({ min: +val, randomNumber: newRando });
    } else if (prop === 'max') {
      const newRando = randomNum(min, +val)
      this.setState({ max: +val, randomNumber: newRando });
      randomNum(min, +val);
    }
  }

  updateGuess(newNum) {
    this.setState({ currentGuess: newNum });
  }

  setGuess(newVal) {
    this.setState({ previousGuess: newVal });
  }

  render() {
    const { min, max, currentGuess, randomNumber, previousGuess } = this.state;
    return (
      <div>
        <GuessBlock
          min = { min }
          max = { max }
          randomNumber={ randomNumber }
          currentGuess={ currentGuess }
          previousGuess={ previousGuess }
          resetMinMax={ this.resetMinMax.bind(this) }
          updateGuess={ this.updateGuess.bind(this) }
          updateMinMax={ this.updateMinMax.bind(this) }
          setGuess={ this.setGuess.bind(this) }
        />
      </div>
    );
  }
}
