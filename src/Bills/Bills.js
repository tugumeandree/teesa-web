
import React, { Component } from 'react';
import { Button ,Grid, Row, Col, Clearfix, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router'
/*
 <button onClick={this.handleclick}>YES:{this.state.count}</button><br/>
          <button>NO</button>
*/
class Latest extends Component {

    render() {

     return  <div>
       
       <ButtonToolbar>
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>
  
</ButtonToolbar>;
   
          </div>
          ;
    }
  }
  export default Latest;