/* @flow */
import React, { Component } from 'react';
import './App.css';
import Player from './player';
import {GameSetup} from './game/gamesetup';
import {TokenCom} from './game/tokenCom';

class App extends Component {
    constructor(props){
      super(props);
      this.state = { winnerPopUp: false, name:null, tokenid: null,
      tokenPopUp: false};
    }

    setWinnerWithModal(name) {
      this.setState({winnerPopUp: true, name});
      //this.props.setWinner(this.props.playername);}
    }

    handleClickToken(e){
      e.stopPropagation();
      return(() => {this.props.changeTokenCounter(this.state.name,this.state.tokenid,1);
      console.log(this.props)})
    }

    setTokenWithModal(name,tokenid) {
      this.setState({tokenPopUp: true, name, tokenid});
      //this.props.setWinner(this.props.playername);}
    }

    createModal(){
      return(
        <div className='modalwinconfirmation'  onClick={
          () => {this.setState({winnerPopUp: false,name:null});
          }
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

    createTokenModal(){
      return(
        <div className='modalwinconfirmation'  onClick={
          () => {this.setState({tokenPopUp: false});}
        }>
          <div className='modalwincontent'>
              <button className='buttontokenup' onClick={
                this.handleClickToken
              }>
              +
            </button>
              <button className='buttontokendw' onClick={
                this.handleClickToken
              }>
              -
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
        {this.state.tokenPopUp ? this.createTokenModal() : null}
        {this.createPlayerCard(this.props.players[0],"mscreen1",true,"player1")}
        <div className="divisor"></div>
        {this.createPlayerCard(this.props.players[1],"mscreen2",false,"player2")}
      </div>
    );
  }

  createPlayerCard(player, clase, isrotate,classplayer){
    const content = <Player
      player={player}
      classplayer={classplayer}
      setWinner={()=>this.setWinnerWithModal(player.name)}
      changeLife={this.props.changeLife}
    />;
    const contentToken = <TokenCom
      tokens={player.tokens}
      setToken={(tokenid)=>this.setTokenWithModal(player.name,tokenid)}
      playerName={player.name}
      addToken={this.props.addToken}
      changeTokenCounter={this.props.changeTokenCounter}></TokenCom>;

    if(isrotate){
      return(<div className={clase}>
        <div className="playerrotated">
          {content}

        </div>
          {contentToken}
        </div>)
    } else {
      return(<div className={clase}>
        {content}
        {contentToken}
      </div>)
    }
  }
}


export default App;
