import React, { Component } from 'react';
/*import { Player } from 'video-react';
export default (props) => {
  return (
    <Player
      playsInline
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};*/

import ReactPlayer from 'react-player'
 
class Player extends Component {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=0UgtGqRkMPc' playing />
  }
};
export default Player;