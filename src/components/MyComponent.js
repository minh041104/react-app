// function component   
import React from "react";
// class component
class MyComponent extends React.Component {

    state = {
        name: "minh",
        address: "hanoi",
        age: 20
    }

    handleClick = (event) => {
        console.log(event);
    }

    handleOnMouseOver = (event) => {
        console.log(event.pageX);
    }

    render() {
        return (
        <div>
            hello my name is {this.state.name} and i am {this.state.age} years old
            i live in {this.state.address}
            <button onMouseOver = {this.handleOnMouseOver}>Hover me</button>
            <button onClick = {this.handleClick}>Click me</button>
        </div>
        )
    }
}

export default MyComponent;