// function component   
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
// class component
class MyComponent extends React.Component {

    state = {
        listUser: [
            {
                id: 1,
                name: "minh",
                age: 21
            },
            {
                id: 2,
                name: "m3inh",
                age: 22
            },
            {
                id: 3,
                name: "m342inh",
                age: 224
            }
        ]
    }

    render() {
        //DRY
        return (
        <div>
            <UserInfo/>
            <br></br>
            <DisplayInfo listUser={this.state.listUser}/>
        </div>
        )
    }
}

export default MyComponent;