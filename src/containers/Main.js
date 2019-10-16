import React, { Component } from "react";
import "./Main.css"
import SlotComponentList from "../components/SlotComponentList" 

class Main extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      data: [
        {
          id:1,
          date: "21/10/19",
          time: "09:00 - 09:55",
          available: "true"           
        },
        {
          id:2,
          date: "21/10/19",
          time: "10:00 - 10:55",
          available: "true"
        },
        {
          id:3,
          date: "22/10/19",
          time: "10:00 - 10:55",
          available: "true"
        }
      ],

      studentData: [],
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }  

  handleCommentSubmit(submittedComment) {
    submittedComment.id = Date.now();
    const updatedComments = [...this.state.studentData, submittedComment];
    this.setState({studentData: updatedComments});
  }

  render() {
    return (
      <div className="student-slot">
      
        <SlotComponentList data={this.state.data} onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default Main;