import React, {Component} from 'react';
//import '../App.css';

class Comment extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      commentData: [
        { 
          author:"kani frances", 
          text:"this monopoly should stop!"
        },
        { 
          author:"tugume andrew", 
          text:"govt etuyambe" 
        }
      ]
    };
  }
    render(){
        return(
          <div className="comment">
           <h2 className="author">{this.props.author}</h2>
            {this.props.text}
          </div>
        )

    }
}
export default Comment;