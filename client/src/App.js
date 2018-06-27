import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
//import Comment from './comment/Comment';
//import Vote from './vote/Vote';
import Player from './livestream/Player';
import CommentBox from './comment/CommentBox';
//import SignInScreen from './login/signInScreen';

//import Latest from './latest/Latest';
import Counter from './counter/Counter';
import {Button, Grid, Row, Col,PageHeader } from 'react-bootstrap';

//import Livestream from '../comment/Livestream';

/*<SignInScreen/>
 <div>
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

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  logout() {
    // localStorage.clear();
    window.location.href = 'localhost:3000';
}


  render() {
   
    return (
      
      <div  className='App'>
      
 <PageHeader>
      Teesa on Bills <small>Debate,Vote </small>
     <Button> <a href="#" onClick={this.logout()}>LOGOUT</a></Button>
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
  
  
      
      </div>
      
    );
  }
}


export default App;
