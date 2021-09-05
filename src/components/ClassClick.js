import React, { Component } from "react";
import UserForm from "./UserForm";

class ClassClick extends Component {
  clickHandler() {
    className="Form"
      UserForm 
  
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>
          Click Here Now to Mint Your Tokens
        </button>
      </div>
    );
  }
}

export default ClassClick;
