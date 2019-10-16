import React, { Component } from 'react';

class StudentForm extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      student: '',
      notes: ''
    };
  this.handleStudentChange = this.handleStudentChange.bind(this);
  this.handleNotesChange = this.handleNotesChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const student = this.state.student.trim();
    const notes = this.state.notes.trim();
    if (!student) {
      return
    }
    // this.props.onCommentSubmit({student: student, notes: notes});
    this.setState({student: '', notes: ''})
    event.target.style.display = "none";
  }
  handleStudentChange(event) { 
    this.setState({student: event.target.value});
  }
  
  handleNotesChange(event) { 
    this.setState({notes: event.target.value});
  }

  render() {
    const slotTaken = false

    return (       
      

      <form className="Student-form" onSubmit={this.handleSubmit}>
         <h4>{this.props.date} {this.props.time}</h4>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.student}
          onChange={this.handleStudentChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.notes}
          onChange={this.handleNotesChange}
        />
        <input type="submit" value="Post" disabled={false}/>
      </form>
    )
  }
}

export default StudentForm;