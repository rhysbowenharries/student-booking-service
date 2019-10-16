import React, { Component, Fragment } from "react";
import SlotComponent from "./SlotComponent"; 
import StudentForm from "../components/StudentForm"

class SlotComponentList extends Component {
  render() {
    console.log("listProps",this.props);
    
    const formCounter = "hi" 

    const slotComponentNodes = this.props.data.map(slotComponent => {
      return (
        <Fragment>
          {formCounter}
          <StudentForm date= {slotComponent.date} time= {slotComponent.time}/>
        </Fragment>
      );
    });

    return (
      <div className="component-list">

        {slotComponentNodes} 
      </div>
    )
  }
}

export default SlotComponentList;