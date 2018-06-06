import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Comment from './comment/Comment';
import Vote from './vote/Vote';
import Player from './livestream/Player';
import CommentBox from './comment/CommentBox';
//import Livestream from '../comment/Livestream';

class App extends Component {
  render() {
    return (<div>
       <Vote/>
       <Player/>
      <CommentBox/>
      </div>
    );
  }
}

export default App;
