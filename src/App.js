/* @flow */
import React, { Component } from 'react';
import './App.css';
import Player from './player';
import {GameSetup} from './game/gamesetup';
import {TokenCom} from './game/tokenCom';
import {Observable} from 'rxjs';
import braids from './img/braids1.png'

class App extends Component {


    constructor(props){
      super(props);
      this.subscription = null;
      this.state = {
        winnerPopUp: false,
        tokenPopUp: false,
        createTokenPopUp: false,
        name:null,
        tokenid: null,
        counter: "",
        tokentype: "planeswalker",
    }
  }

    setWinnerWithModal(name) {
      this.setState({winnerPopUp: true, name});
      //this.props.setWinner(this.props.playername);}
    }

    handleClickToken(e,change){
      e.stopPropagation();
      this.props.changeTokenCounter(this.state.name,this.state.tokenid,change);
    }

    setTokenWithModal(name,tokenid) {
      this.setState({tokenPopUp: true, name, tokenid});
      //this.props.setWinner(this.props.playername);}
    }

    prepareTokenWithModal(name,tokenid) {
      this.setState({createTokenPopUp: true, name, tokenid});
      this.subscription = Observable.timer(10000).
      do(() => this.setState({createTokenPopUp: false}))
      .subscribe();
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

    createChangeTokenModal(){
      return(
        <div className='modalwinconfirmation'  onClick={
          () => {this.setState({tokenPopUp: false});}
        }>
        <div className="modalwincontentcreatetoken">
          <div className='modalwincontentbuttons'>
            <button className='buttontokenup' onClick={
              (e) => this.handleClickToken(e,1)
            }>
            +
          </button>
          <button className='buttontokendw' onClick={
            (e) => this.handleClickToken(e,-1)
          }>
          -
        </button>
      </div>
      <button className='buttontokenrmv' onClick={
        () => this.props.removeToken(this.state.name,this.state.tokenid)
      }>
      Remove Token!
    </button>

        </div>
        </div>
      )
    }

    createPrepareTokenModal(){
      return(
        <div className='modalwinconfirmation'  onClick={
          () => {this.setState({createTokenPopUp: false});}
        }>
          <div className='modalwincontentcreatetoken'>
              <div className='inputtokentype'>
                <select value={this.state.tokentype}
                  onChange={(e) => this.setState({tokentype: e.target.value})} //WHY?
                  onClick={(e) => e.stopPropagation()}>
                  <option value="planeswalker">PlanesWalker</option>
                  <option value="artifact">Artifact</option>
                  <option value="creature">Creature</option>
                  <option value="enchantment">Enchantment</option>
                </select>
              </div>
              <div className='inputcounter'>
                <input className='inputcounterinner' type="text" value={this.state.counter} placeholder="Counters on it"
                  onChange={(e) => this.setState({counter: e.target.value})}
                  onClick={(e) => e.stopPropagation()}></input>
              </div>
              <div className='buttonconfirmtoken'>
                <button onClick={
                  () => {this.props.addToken(
                    this.state.name,parseInt(this.state.counter),this.state.tokenid,this.state.tokentype);
                  this.setState({createTokenPopUp: false});
                  this.subscription.unsubscribe();}
              //DEBUG console.log(this.state.name,parseInt(this.state.counter),this.state.tokenid,this.state.tokentype)}
              }>Create Token!</button>
              </div>

          </div>
        </div>
      )
    }

  render() {
      console.log(this.props);
      if(this.props.someonewon!=false){
        return(
          <div className="showwinnerholder">
            <div className="showwinnertext">
              {this.props.someonewon} Won the Game!
            </div>
            <div>
              <img className='braids' src={braids}></img>
            </div>
            <div className="heroquote">
              Braids: I'm so proud of you, My son!
            </div>
            <div className="buttonrematch">
              <button onClick={() => {
                this.props.players[0].turn=false;
                this.props.players[1].turn=false; //WHY? this and not below
                // this.props.someonewon=false;
                this.props.setTurn(this.props.gametype,this.props.players[0].color,this.props.players[1].color);
              }}>Rematch!</button>
            </div>
          </div>
        )
      }
      else if(!(this.props.players[0].turn) && !(this.props.players[1].turn)){
        return(
          <GameSetup
            players={this.props.players}
            setTurn={this.props.setTurn}></GameSetup>
        )
      }
      else return(
      <div>
        {this.state.winnerPopUp ? this.createModal() : null}
        {this.state.tokenPopUp ? this.createChangeTokenModal() : null}
        {this.state.createTokenPopUp ? this.createPrepareTokenModal() : null}
        {this.createPlayerCard(this.props.players[0],"mscreen1",true,"player")}
        <div className="divisor"></div>
        {this.createPlayerCard(this.props.players[1],"mscreen2",false,"player")}
      </div>
    );
  }

  createPlayerCard(player, clase, isrotate,classplayer){
    const content = <Player
      player={player}
      classplayer={player.color+classplayer}
      setWinner={()=>this.setWinnerWithModal(player.name)}
      changeLife={this.props.changeLife}
    />;
    const contentToken = <TokenCom
      tokens={player.tokens}
      setToken={(tokenid)=>this.setTokenWithModal(player.name,tokenid)}
      playerName={player.name}
      createToken={(tokenid)=>this.prepareTokenWithModal(player.name,tokenid)}
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
        <div className="playernotrotated">
        {content}
      </div>
        {contentToken}
      </div>)
    }
  }
}


export default App;
