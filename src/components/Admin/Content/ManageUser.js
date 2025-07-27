import ModalCreateUser from './ModalCreateUser';
import { IoPersonAddOutline } from "react-icons/io5";   
import './ManageUser.scss'
import { useState } from 'react';
const ManageUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className='manage-user-container'>
            <div className='title'>
                Manage User
            </div>
            <div className="manage-user-content">
                <div className='btn-add-user'>
                    <button onClick={() => setShowModalCreateUser(true)}><IoPersonAddOutline  /> Add User</button>
                </div>
                <div className='table-user-container'>
                    table
                </div>
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} />
            </div>
        </div>
    )
}

export default ManageUser;
