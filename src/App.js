/* @flow */
import React, { Component } from 'react';
import './App.css';
import Player from './player';

class App extends Component {
  render() {
    return (
      <div>
        <div className="mscreen">
          <Player/>
        </div>
        <div className="divisor"></div>
        <div className="mscreen">
          <Player/>
        </div>

      </div>

    );
  }
}


/// INITIAL STATE
var initstate = {
   player: [
     {
       name: 'player1',
       count: 20,
       winner: false
     },
     {
       name: 'player2',
       count: 20,
       winner: false
     },
   ]
}


/// REDUCER
function countReducer(currentState, action){
  if(typeof currentState === 'undefined'){
    return initstate;
  }

  var nextstate = {...currentState};

  switch(action.type){
    case 'ADD_PLAYER1':
      nextstate.player[0].count = currentState.player[0].count + 1;
      return nextstate;
    case 'MINUS_PLAYER1':
      nextstate.player[0].count = currentState.player[0].count - 1;
      return nextstate;
    case 'ADD_PLAYER2':
      nextstate.player[1].count = currentState.player[1].count + 1;
      return nextstate;
    case 'MINUS_PLAYER2':
      nextstate.player[1].count = currentState.player[1].count - 1;
      return nextstate;
    default:
      return currentState;
  }
}

//// FUNCTION RENDER

var actionadd1 = { type:'ADD_PLAYER1' };
var actionmin1 = { type:'MINUS_PLAYER1'};
var actionadd2 = { type:'ADD_PLAYER2' };
var actionmin2 = { type:'MINUS_PLAYER2'};



export default App;
