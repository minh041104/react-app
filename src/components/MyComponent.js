// function component   
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
// class component
class MyComponent extends React.Component {
    render() {
        return (
        <div>
            <UserInfo/>
            <br></br>
            <DisplayInfo name={"minh"} age={21}/>
        </div>
        )
    }
}

export default MyComponent;