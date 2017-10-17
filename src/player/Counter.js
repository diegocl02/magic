/* @flow */
import React, {Component} from 'react';
import '../App.css';


export default class Counter extends Component{
  render(){
    return(
      <div className='counterplayer' >
        <div className='lifeholder'>
          <div className='life'>
            {this.props.life}
          </div>
          <div className='liferotated'>
           {this.props.life} |
          </div>
        </div>
      </div>
    );
  }
}
