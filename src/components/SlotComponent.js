import React, { Component } from "react";
import StudentForm from "../components/StudentForm"

class SlotComponent extends Component {
  render() { 
    console.log("props",this.props)
    return (
     
      <div className="slot-component">
        
        
         <h4>{this.props.date}</h4>
         <h4>{this.props.time}</h4>
         
      </div>
    );
  }
}

export default SlotComponent;