import React, { Component } from 'react';

class RandomNumber extends Component {
    constructor(props){
        super(props);
        this.state = {randNum : 1};
        this.newNum = this.newNum.bind(this);
    }
    newNum(e){
        let nRNum = Math.floor(Math.random()*10)+1;
        this.setState({randNum : nRNum});
    }
    render() {
        let button;
        if (this.state.randNum === 7) {
            button = <h1>You Won</h1>;
          } else {
            button = <button onClick={this.newNum}>Random Number</button>
          }
        return(
            <div>
                <h1>Number is {this.state.randNum}</h1>
                {button}    
            </div>
        )
    }
}

export default RandomNumber;