// function component   
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
// class component
const MyComponent = (props) => {
    const [listUser, setListUser] = useState([
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
        ]);

    const handleAddUser = (user) => {
        setListUser([user,...listUser]);
    }

    const handleDeleteUser = (userId) => {
        setListUser(listUser.filter(user => user.id !== userId));
    }

        //DRY
    return (
    <>
        <div className="a">
            <AddUserInfo handleAddUser={handleAddUser}/>
            <br></br>
            <DisplayInfo listUser={listUser} handleDeleteUser={handleDeleteUser}/>
        </div>
    </>
    )
}

export default MyComponent;