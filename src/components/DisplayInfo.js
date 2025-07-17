import React from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg'

class DisplayInfo extends React.Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            isShow: true
        }
    }
    
    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            document.title = 'Hello React';
            }, 3000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, this.props);
    }

    handleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }


    render() { 
        console.log('render');
        const {listUser} = this.props;

        return (
            <div className='display-info-container'>
                {/* <img src={logo} alt="logo" /> */}
                <div>
                    <span onClick={() => this.handleShow()}>
                        {this.state.isShow ? 'Hide' : 'Show'}
                    </span>
                </div>
                {this.state.isShow && (
                    <>
                        {
                            listUser.map((user) => {
                                return (
                                    <div key={user.id} className={user.age > 20 ? 'green' : 'red'}>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                        <hr/>
                                    </div>
                                )
                            })
                        }
                    </>
                )}
            </div>
        )
    }
}

export default DisplayInfo;