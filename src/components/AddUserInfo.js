import React, { useState } from 'react';

const AddUserInfo = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }       

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddUser({
            id: new Date().getTime(),
            name: name,
            age: age
        });
    }
    return (
        <div>
                hello my name is {name} and i am {age} years old
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>
                    Name:
                </label>
                <input 
                    value={name}
                    type="text" 
                    onChange={(event) => handleOnChangeInput(event)}/>
                <label>
                    Age:
                </label>
                <input 
                    value={age}
                    type="text" 
                    onChange={(event) => handleOnChangeAge(event)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;