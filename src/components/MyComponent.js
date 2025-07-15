// function component   
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
// class component
class MyComponent extends React.Component {

    state = {
        listUser: [
            {
                id: 1,
                name: "minh",
                age: 14
            },
            {
                id: 2,
                name: "m3inh",
                age: 52
            },
            {
                id: 3,
                name: "m342inh",
                age: 224
            }
        ]
    }

    handleAddUser = (user) => {
        this.setState({
            listUser: [user,...this.state.listUser]
        })
    }

    render() {
        //DRY
        return (
        <div>
            <AddUserInfo handleAddUser={this.handleAddUser}/>
            <br></br>
            <DisplayInfo listUser={this.state.listUser}/>
        </div>
        )
    }
}

export default MyComponent;