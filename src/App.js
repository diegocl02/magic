/* @flow */
import React, { Component } from 'react';
import './App.css';
import Player from './player';
import {GameSetup} from './game/gamesetup'

class App extends Component {
    constructor(props){
      super(props);
      this.state = { winnerPopUp: false, name:null};
    }

    setWinnerWithModal(name) {
      this.setState({winnerPopUp: true, name});
      //this.props.setWinner(this.props.playername);}
    }

    createModal(){
      return(
        <div className='modalwinconfirmation'  onClick={
          () => this.setState({winnerPopUp: false,name:null})
        }>
          <div className='modalwincontent'>
              <button className='buttonconfirm' onClick={()=>{
                this.setState({winnerPopUp: false,name:null});
                this.props.setWinner(this.state.name);
              }}>
              {this.state.name}   w o n?
            </button>
          </div>
        </div>
      )
    }

  render() {
      if(!(this.props.players[0].turn) && !(this.props.players[1].turn)){
        return(
          <GameSetup
            players={this.props.players}
            setTurn={this.props.setTurn}></GameSetup>
        )
      }
      else return(
      <div>
        {this.state.winnerPopUp ? this.createModal() : null}
        {this.createPlayerCard(this.props.players[0],"mscreen1",true)}
        <div className="divisor"></div>
        {this.createPlayerCard(this.props.players[1],"mscreen2",false)}
      </div>
    );
  }

  createPlayerCard(player, clase, isrotate){
    const content = <Player
      player={player}
      setWinner={()=>this.setWinnerWithModal(player.name)}
      changeLife={this.props.changeLife}
    />;

    if(isrotate){
      return(<div className={clase}>
        <div className="playerrotated">
          {content}
        </div>
        </div>)
    } else {
      return(<div className={clase}>
        {content}
      </div>)
    }
  }
}


export default App;
