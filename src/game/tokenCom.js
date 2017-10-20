import React, {Component} from 'react';
import '../App.css';
import {Token} from './token';

export class TokenCom extends Component {
  constructor(props){
    super(props);
    this.state = { counter: '', counterid: 0};
    this.setText = this.setText.bind(this);
  }
  setText(event){
    this.setState({counter: event.target.value});
    console.log(this.state.counterid);
  }

  render(){
    return(
      <div className='tokenholder'>
        <div className='tokencom'>
          <div className='buttontoken'>
            <button onClick={() => {
              this.props.addToken(this.props.playerName,parseInt(this.state.counter),this.state.counterid);
              this.state.counterid++;
            }} >Add Token!</button>
          </div>
          <div className='inputtoken'>
            <input type="text" className="countertoken"
              placeholder="# Counters"
              value={this.state.counter}
              onChange={this.setText}></input>
          </div>
        </div>
        <div>
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
