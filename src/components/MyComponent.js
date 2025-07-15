// function component   
import React from "react";
// class component
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        hello
        {
            Math.random()
        }
      </div>
    )
  }
}

export default MyComponent;