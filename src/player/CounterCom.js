/* @flow */
import React, {Component} from 'react';
import '../App.css';
// import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';


export default class CounterCom extends Component{

  render(){
    return(
      <div className='counterholder'>
          <div className='buttonup'
            onClick={()=>this.props.changeLife(1,this.props.playername)}
            >
              <div className='buttonc'>
                <FontAwesome name='plus' />

              </div>
          </div>

          <div className='buttondw'
            onClick={()=>this.props.changeLife(-1,this.props.playername)}
            >
              <div className='buttonc'>
                <FontAwesome name='minus' />
              </div>
          </div>
      </div>
    );
  }
}
