import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import '../App.css';

export default class Wins extends Component{
  render(){
    return(
      <div className='winsholder'>
        {(new Array(this.props.wins)).fill(undefined).map(() => <FontAwesome name='trophy'/>)}
      </div>
    )
  }
}
