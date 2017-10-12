/* @flow */
import React, {Component} from 'react';
import '../App.css';


export default class CounterCom extends Component{
  render(){
    return(
      <div className='counterholder'>
        <div className='buttonup'>
          <button className='buttonc'> + </button>
        </div>

        <div className='buttondw'></div>

        <div className='buttondw'>
          <button className='buttonc'> - </button>
        </div>
      </div>
    );
  }
}
