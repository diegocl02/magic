import React, { Component } from 'react';
import '../App.css';

import dice from '../img/alivedice.gif'
import { animatedLogo as AnimatedLogo}  from '../animations/logo'

export class GameSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gametype: '',
      player1color: '',
      player2color: '',
    }
  }

  render() {
    const enableStart = this.state.player1color.length > 0 && this.state.player2color.length > 0 && this.state.gametype.length > 0
    return (
      <div className='setupholder'>
        <div className='title'>
          Magic Board
        </div>
        <div className='subtitle'>
          by MiniCrayon
        </div>
        <div className='randomgifholder'>
          <AnimatedLogo/>
        </div>
        <div className='randomholder'>
          <select className='selectplayercolor' value={this.state.player1color}
            onChange={(e) => this.setState({ player1color: e.target.value })}>
            <option value="" disabled selected>Player 1 color</option>
            <option value="white">White</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
          </select>
          <select className='selectplayercolor' value={this.state.player2color}
            onChange={(e) => this.setState({ player2color: e.target.value })}>
            <option value="" disabled selected>Player 2 color</option>
            <option value="white">White</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
          </select>
          <select className='selectgametype' value={this.state.gametype}
            onChange={(e) => this.setState({ gametype: e.target.value })}>
            <option value="" disabled selected>Game Type</option>
            <option value="1">Best of 1</option>
            <option value="2">Best of 3</option>
            <option value="3">Best of 5</option>
          </select>
          <button className='buttonrandom' onClick={
            () => this.props.setTurn(parseInt(this.state.gametype), this.state.player1color, this.state.player2color)
          } disabled={!enableStart}>
            {enableStart ? "Start now!!" : "Setup game"}
          </button>
        </div>
        <div className='infosetup'>

        </div>
      </div>
    )
  }

}
