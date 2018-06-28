import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import CommentBox from './comment/Comment';
import Player from './livestream/Player';

//import SignInScreen from './login/signInScreen';

import Counter from './counter/Counter';
import {Button, Grid, Row, Col,PageHeader } from 'react-bootstrap';
import Popup from './vote';

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
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

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

  
  
  <div className='app'>
          <h1>Vote</h1>
          <button onClick={this.togglePopup.bind(this)}>YES</button>
          <button onClick={this.togglePopup.bind(this)}>NO</button>
          {this.state.showPopup ? 
            <Popup
              text='ENTER NIN'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      
      </div>
      
    );
  }
}


export default App;
