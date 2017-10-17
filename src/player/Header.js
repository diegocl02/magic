/* @flow */
import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import '../App.css';


export default class Header extends Component{
  render(){
    return(
      <div className='headerplayer'>
        <div className='spantext'>
          {this.props.name} {(this.props.turn) ? <FontAwesome name='star'/> : null}
        </div>
      </div>
    );
  }
}
