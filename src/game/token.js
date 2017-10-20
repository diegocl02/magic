import React, {Component} from 'react';
import '../App.css';

export class Token extends Component{
  constructor(props){
    super(props);
    this.state = {tokenModal: false};
  }
  render(){
    return(
      <div className="tokencardholder">
        <div className={"token"+this.props.tokenType}
          onClick={ () => {this.props.setToken(
            this.props.tokenId)}}
            >
              <div className="tokencounter">
                <div className="tokencounterspan">
                  {this.props.tokenCounter}
                </div>
              </div>

              <div className="tokentype">
                <div className="tokentypespan">
                  {this.props.tokenType}
                </div>
              </div>
            </div>
      </div>
    )
  }
}
