import React, {Component} from 'react';
import '../App.css';

export class Token extends Component{
  constructor(props){
    super(props);
    this.state = {tokenModal: false};
  }
  render(){
    return(
      <div className={this.props.tokenType}
        onClick={ () => {this.props.setToken(
        this.props.tokenId)}}
      >
        {this.props.tokenCounter}
      </div>
    )
  }
}
