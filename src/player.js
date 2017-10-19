 /* @flow */
import React, {Component} from 'react';
import './App.css';
import CounterCom from './player/CounterCom';
import Header from './player/Header';
import Counter from './player/Counter';
import Wins from './player/Wins';
import BottomCom from './player/BottomCom';


export default class Player extends Component{
  render(){
    return(
      <div className="player">
        <div className="tmp">
          <Header
            name={this.props.player.name}
            turn={this.props.player.turn}
            rankingName={this.props.player.rankingname}
            rankingNumber={this.props.player.ranking}
            totalWins={this.props.player.totalwins}
          />
          <Counter
            life={this.props.player.life}/>
          <Wins
            wins={this.props.player.wins}/>
          <CounterCom
            changeLife={this.props.changeLife}
            playername={this.props.player.name}/>
          <BottomCom
            setWinner={this.props.setWinner}
            playername={this.props.player.name}/>
        </div>
      </div>
    )
  }
}
