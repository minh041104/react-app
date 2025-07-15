import React from 'react';

class AddUserInfo extends React.Component { 

    state = {
        name: "",
        address: "",
        age: ""
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }       

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.handleAddUser({
            id: new Date().getTime(),
            name: this.state.name,
            age: this.state.age
        });
    }
    
    render() {
        return (
            <div>
                    hello my name is {this.state.name} and i am {this.state.age} years old
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>
                        Name:
                    </label>
                    <input 
                        value={this.state.name}
                        type="text" 
                        onChange={(event) => this.handleOnChangeInput(event)}/>
                    <label>
                        Age:
                    </label>
                    <input 
                        value={this.state.age}
                        type="text" 
                        onChange={(event) => this.handleOnChangeAge(event)}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfo;