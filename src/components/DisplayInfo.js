import React, { useState } from 'react'
import './DisplayInfo.scss'

// stateless component vs stateful component
// stateless component cũng có cách viết:
const DisplayInfo = (props) => {
    const {listUser} = props;
    const [isShow, setIsShow] = useState(true);

    const handleShow = () => {
        setIsShow(!isShow);
    }
    
        return (
            <div className='display-info-container'>
                <div>
                    <span onClick={handleShow}>{isShow ? 'Hide' : 'Show'}</span>
                </div>
                {isShow && (
                    <>
                        {
                            listUser.map((user) => {
                                return (
                                    <div key={user.id} className={user.age > 20 ? 'green' : 'red'}>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
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

export default DisplayInfo; 