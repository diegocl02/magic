import React, {Component} from 'react';
import '../App.css';
import {Token} from './token';

export class TokenCom extends Component {
  constructor(props){
    super(props);
    this.state = { counterid: 0};
  }

  render(){
    return(
      <div className='tokenholder'>
        <div className='tokencom'>
          <div className='buttontoken'>
            <button onClick={() => {
              this.props.createToken(this.state.counterid);
              this.state.counterid++;
            }} >Add Token!</button>
          </div>
        </div>
        <div className='tokencards'>
          {this.props.tokens.map(token =>
            <Token
              changeTokenCounter={this.props.changeTokenCounter}
              playerName={this.props.playerName}
              tokenId={token.tokenid}
              tokenType={token.tokentype}
              tokenCounter={token.tokencounter}
              setToken={this.props.setToken} ></Token>)
            }
        </div>
      </div>
    )
  }


}
