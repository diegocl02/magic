import React, {Component} from 'react';
import Gif from '../gif/react-gif';
import '../App.css';

import dice from '../img/alivedice.gif'

export class GameSetup extends Component{
  render(){
    return(
      <div className='setupholder'>
        <div className='randomgifholder'>
          <img className='randomgif' src={dice}></img>
        </div>
        <div className='randomholder'>
          <button className='buttonrandom' onClick={
            () => this.props.setTurn()
          }>
            Get who start randomly!
          </button>
        </div>
        <div className='infosetup'>

        </div>
      </div>
    )
  }

}
