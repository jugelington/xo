import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import './App.css';
import ScoreBoard from './components/ScoreBoard';

class App extends Component {
  state = {
    player: 'X',
    xScore: 0,
    oScore: 0
  };

  render() {
    return (
      <main>
        <Header />
        <ScoreBoard xScore={this.state.xScore} oScore={this.state.oScore} />
        <Grid
          player={this.state.player}
          togglePlayer={this.togglePlayer}
          updateScore={this.updateScore}
        />
      </main>
    );
  }

  togglePlayer = () => {
    this.setState({ player: this.state.player === 'X' ? 'O' : 'X' });
  };

  updateScore = winner => {
    if (winner === 'X') {
      const newXscore = this.state.xScore + 1;
      this.setState({ xScore: newXscore });
    } else if (winner === 'O') {
      const newOscore = this.state.oScore + 1;
      this.setState({ oScore: newOscore });
    }
  };
}

export default App;
