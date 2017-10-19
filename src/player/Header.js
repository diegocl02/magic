/* @flow */
import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import '../App.css';


export default class Header extends Component{
  render(){
    return(
      <div className='headerplayer'>
        <div className='spantext'>
          <a href="#" className="ratedplayer" title={
            "Rank: "+this.props.rankingName+"\n Games Won: "+this.props.totalWins
          }>{this.props.name}</a>
           {" "}{(this.props.turn) ? <FontAwesome name='star'/> : null}
          <h className="ranktext">{ " rank: " }{this.props.rankingNumber} </h>
        </div>
      </div>
    );
  }
}
