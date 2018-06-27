import React, {Component} from 'react';
//import '../App.css';
import CommentForm from './CommentForm';
//import CommentList from './CommentList';

class CommentBox extends Component{
   
    /*getInitialState() {
      return {
        data: commentData
      }
       <CommentList data={this.props.data} />
        <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
    }

    handleCommentSubmit(comment) {
      this.props.data.push(comment);
      var comments = this.state.data;
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
    }
    */
    render(){
        return(

        <div className="rowC">
          <CommentForm />
         
        </div>
      );
    }
  }
  export default CommentBox;
  