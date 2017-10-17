import React, {Component} from 'react';

import '../App.css';

export default class BottomCom extends Component{
  render(){
    return(
      <div className='bottomholder'>
        <div className='spanbuttonwin'>
          <button className='buttonwin' onClick={
            () => this.props.setWinner()
          }>
            W I N
          </button>
        </div>
      </div>
    )
  }
}
