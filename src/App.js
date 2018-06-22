import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
//import Comment from './comment/Comment';
//import Vote from './vote/Vote';
//import Player from './livestream/Player';
//import CommentBox from './comment/CommentBox';
import SignInScreen from './login/signInScreen';

//import Latest from './latest/Latest';
//import Counter from './counter/Counter';
//import { Grid, Row, Col,PageHeader } from 'react-bootstrap';

//import Livestream from '../comment/Livestream';

/* <div>
       <Vote/>
       <Player/>
      <CommentBox/>
      </div> 
       <Player/>
      <CommentBox/>
       <Counter/>
        <Vote/>
        </div>

      
 <PageHeader>
      Teesa on Bills <small>Debate,Vote</small>
</PageHeader>;
      <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
    <Player/>
    </Col>
    <Col xs={6} md={4}>
    <Counter/>
    </Col>
  </Row>
  <Row>
  <Col xs={6} md={4}>
  <CommentBox/>
  </Col>
  <Col xs={12} md={8}>
  
    </Col>
  </Row>
  </Grid>
  
  
      */

class App extends Component {
  render() {
    return (
      
      <div  className='App'>
      <SignInScreen/>
      </div>
      
    );
  }
}


export default App;
