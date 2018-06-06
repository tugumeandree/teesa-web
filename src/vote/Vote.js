import React, { Component } from 'react';
//import './App.css';


class Vote extends Component {
    handleSignIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onSignIn(username, password)
      }
      
      render() {
        return (
          <form onSubmit={this.handleSignIn.bind(this)}>
            <h3>Vote on Bills</h3>
            <input type="password" ref="password" placeholder="enter NIN" /><br/><br/>
            <input type="submit" value="Vote Now" />
          </form>
        )
      }
    
}

export default Vote;
