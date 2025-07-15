import React from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg'

class DisplayInfo extends React.Component {

    state = {
        isShow: true
    }

    handleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }


    render() { 
        const {listUser} = this.props;

        return (
            <div className='display-info-container'>
                <img src={logo} alt="logo" />
                <div>
                    <span onClick={() => this.handleShow()}>
                        {this.state.isShow ? 'Hide' : 'Show'}
                    </span>
                </div>
                {this.state.isShow && (
                    <div>
                        {
                            listUser.map((user) => {
                                return (
                                    <div key={user.id} className={user.age > 20 ? 'green' : 'red'}>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <hr/>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            </div>
        )
    }
}

export default DisplayInfo;