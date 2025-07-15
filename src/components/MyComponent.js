// function component   
import React from "react";
// class component
class MyComponent extends React.Component {

    state = {
        name: "minh",
        address: "hanoi",
        age: 20
    }

    render() {
        return (
        <div>
            hello my name is {this.state.name} and i am {this.state.age} years old
        </div>
        )
    }
}

export default MyComponent;