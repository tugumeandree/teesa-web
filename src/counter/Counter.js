
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router'
/*
 <button onClick={this.handleclick}>YES:{this.state.count}</button><br/>
          <button>NO</button>
*/
class Counter extends Component {
    state={
        count:0
    };
    
    handleClick = () => {this.setState((prevState, { count }) => ({
        count: prevState.count + 1})
        );
    }

    render() {
       

     return <div>
         <br/>
          <Button bsSize="large" bsStyle="primary" onClick={this.handleclick}>
          YES:{this.state.count}
          </Button><br/>
          
          <br/>
          <Button bsSize="large" bsStyle="danger" onClick={this.handleclick}>
          NO:{this.state.count}
          </Button>
          <br/>

          </div>;
    }
  }
  export default Counter;