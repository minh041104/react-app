import React from 'react'

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
            <div>
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