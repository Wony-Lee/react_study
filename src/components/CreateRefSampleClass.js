import React, { Component } from "react";

class CreateRefSampleClass extends Component {
  inpurt = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <>
        <div>
          <input ref={this.input} />
        </div>
      </>
    );
  }
}

export default CreateRefSampleClass;
