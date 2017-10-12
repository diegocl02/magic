 /* @flow */
import React, {Component} from 'react';
import './App.css';
import CounterCom from './player/CounterCom';
import Header from './player/Header';
import Counter from './player/Counter';


export default class Player extends Component{
  render(){
    return(
      <div className="player">
        <div className="tmp">
          <Header/>
          <Counter/>
          <CounterCom/>
        </div>
      </div>
    )
  }
}
