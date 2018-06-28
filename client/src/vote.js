import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form>
  <label>
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" onClick={this.props.closePopup}/>
</form>
         
          </div>
        </div>
      );
    }
  }
  export default Popup
  