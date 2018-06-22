import React, {Component} from 'react';
class CommentForm extends Component{
   /* handleSubmit(e) {
      e.preventDefault();
      var authorVal = e.target[0].value.trim();
      var textVal = e.target[1].value.trim();
      if (!textVal || !authorVal) {
        return;
      }
      this.props.onCommentSubmit({author: authorVal, text: textVal});
      e.target[0].value = '';
      e.target[1].value = '';
      return;
    }
*/
    render() {
      return(
        <form className="comment-form form-group" onSubmit={this.handleSubmit}>
          <div className="input-group">
          <h6>0 comments</h6>
            <input type="text" placeholder="Say something..." className="form-control" />
          </div>
        </form>
      );
    }
  }
  export default CommentForm;