import React from 'react';

class Grid extends React.Component {
  state = {
    a1: '',
    b1: '',
    c1: '',
    a2: '',
    b2: '',
    c2: '',
    a3: '',
    b3: '',
    c3: ''
  };

  render() {
    return (
      <div>
        <button id="resetBoard" className="resetBtn" onClick={this.clearBoard}>
          Reset Board
        </button>
        <table
          onClick={this.handleClick}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          className="Grid"
        >
          <tbody>
            <tr>
              <th>
                <button id="a1">{this.state.a1}</button>
              </th>
              <th>
                <button id="b1">{this.state.b1}</button>
              </th>
              <th>
                <button id="c1">{this.state.c1}</button>
              </th>
            </tr>
            <tr>
              <th>
                <button id="a2">{this.state.a2}</button>
              </th>
              <th>
                <button id="b2">{this.state.b2}</button>
              </th>
              <th>
                <button id="c2">{this.state.c2}</button>
              </th>
            </tr>
            <tr>
              <th>
                <button id="a3">{this.state.a3}</button>
              </th>
              <th>
                <button id="b3">{this.state.b3}</button>
              </th>
              <th>
                <button id="c3">{this.state.c3}</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    const boardState = localStorage.getItem('boardState');
    if (boardState) {
      this.setState(JSON.parse(boardState));
    }
  }

  componentDidUpdate() {
    this.saveState();
  }

  saveState = () => {
    localStorage.setItem('boardState', JSON.stringify(this.state));
  };

  mouseOver = event => {
    if (event.target.localName === 'button' && event.target.innerText === '') {
      event.target.innerText = this.props.player;
      event.target.className = 'hover';
    }
  };

  mouseOut = event => {
    if (event.target.localName === 'button') {
      event.target.innerText = this.state[event.target.id];
      event.target.className = { hover: false };
    }
  };

  handleClick = event => {
    if (
      event.target.localName === 'button' &&
      this.state[event.target.id] === ''
    ) {
      this.setState({ [event.target.id]: this.props.player }, () => {
        this.checkForWinner();
        this.props.togglePlayer();
      });
    }
  };

  checkForWinner = () => {
    const sq = this.state;
    if (sq.a1 === sq.b1 && sq.b1 === sq.c1 && sq.a1 !== '') {
      return this.handleWinner(this.state.a1);
    }
    if (sq.a2 === sq.b2 && sq.b2 === sq.c2 && sq.a2 !== '') {
      return this.handleWinner(this.state.a2);
    }
    if (sq.a3 === sq.b3 && sq.b3 === sq.c3 && sq.a3 !== '') {
      return this.handleWinner(this.state.a3);
    }
    if (sq.a1 === sq.a2 && sq.a2 === sq.a3 && sq.a3 !== '') {
      return this.handleWinner(this.state.a1);
    }
    if (sq.b1 === sq.b2 && sq.b2 === sq.b3 && sq.b3 !== '') {
      return this.handleWinner(this.state.b1);
    }
    if (sq.c1 === sq.c2 && sq.c2 === sq.c3 && sq.c3 !== '') {
      return this.handleWinner(this.state.c1);
    }
    if (sq.a1 === sq.b2 && sq.b2 === sq.c3 && sq.a1 !== '') {
      return this.handleWinner(this.state.a1);
    }
    if (sq.a3 === sq.b2 && sq.b2 === sq.c1 && sq.c1 !== '') {
      return this.handleWinner(this.state.a3);
    }
    if (!Object.values(sq).some(el => el === '')) {
      return this.handleTie();
    }
  };

  handleWinner = winner => {
    this.props.updateScore(winner);
    this.displayWinner(winner);
  };

  handleTie = () => {
    this.setState({
      a1: `Tie!`,
      b1: `Tie!`,
      c1: `Tie!`,
      a2: `Tie!`,
      b2: `Tie!`,
      c2: `Tie!`,
      a3: `Tie!`,
      b3: `Tie!`,
      c3: `Tie!`
    });
    setTimeout(() => {
      this.clearBoard();
    }, 3000);
  };

  displayWinner = winner => {
    this.setState({
      a1: `${winner} wins`,
      b1: `${winner} wins`,
      c1: `${winner} wins`,
      a2: `${winner} wins`,
      b2: `${winner} wins`,
      c2: `${winner} wins`,
      a3: `${winner} wins`,
      b3: `${winner} wins`,
      c3: `${winner} wins`
    });
    setTimeout(() => {
      this.clearBoard();
    }, 3000);
  };

  clearBoard = () => {
    this.setState({
      a1: '',
      b1: '',
      c1: '',
      a2: '',
      b2: '',
      c2: '',
      a3: '',
      b3: '',
      c3: ''
    });
  };
}

export default Grid;
