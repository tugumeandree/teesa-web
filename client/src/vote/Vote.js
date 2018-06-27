import React, { Component } from 'react';
//import './App.css';
//import { PageHeader } from 'react-bootstrap';


class Vote extends Component {
    handleSignIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onSignIn(username, password)
      }
      
      render() {
        return (
          <div className='rowC'>
          <form onSubmit={this.handleSignIn.bind(this)}>
              <h2>Teesa on Bills</h2>
            <input type="password" ref="password" placeholder="enter NIN" /><br/><br/>
            <input type="submit" value="Vote Now" />
          </form>
          </div>
        )
      }
    
}

export default Vote;
