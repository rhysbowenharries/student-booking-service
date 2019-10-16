import React, { Component } from "react";
import StudentForm from "../components/StudentForm";

class Admin extends Component {
  constructor(props) { 
    super(props);
    this.state = {

      data: []
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }  

  handleCommentSubmit(submittedComment) {
    submittedComment.id = Date.now();
    const updatedComments = [...this.state.data, submittedComment];
    this.setState({data: updatedComments});
  }

  render() {
    return (
      <div className="admin">
      <h4>HELOO world I am the mADMIN</h4>
      <StudentForm onCommentSubmit={this.handleCommentSubmit}/> 
      </div>
    );
  }
}

export default Admin;