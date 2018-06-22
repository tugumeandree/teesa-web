
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {  } from 'react-router'
/*
 <button onClick={this.handleclick}>YES:{this.state.count}</button><br/>
          <button>NO</button>
*/
class Counter extends Component {
    state={
        count:50
    };
    
    handleClick = () => {this.setState((prevState, { count }) => ({
        count: prevState.count + 1})
        );
    }

    render() {
       

     return  <div>
     
          
    <div className='rowC'>
    <h2>The Uganda Wildlife Bill, 2018 </h2>
         <p className="thicker"> 
The ob­jective of this bill is to pro­vide for the con­ser­va­tion and sus­tain­able man­age­ment of wild life; 
to strengthen wild life con­ser­va­tion and man­age­ment; to con­tinue the Uganda Wild life Au­thor­ity;
to stream­line roles and re­spon­si­bil­i­ties for in­sti­tu­tions in wildlife con­ser­va­tion and man­age­ment; 
and for other re­lated mat­ters
         </p>
          <Button bsSize="large" bsStyle="primary" onClick={this.handleclick}>
          AGREE:{this.state.count}
          </Button> <br/> <br/>
          <Button bsSize="large" bsStyle="danger" onClick={this.handleclick}>
          DISAGREE:{this.state.count}
          </Button>
          </div>
          </div>
          ;
    }
  }
  export default Counter;