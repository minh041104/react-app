import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss'
const ManageUser = () => {
    return (
        <div className='manage-user-container'>
            <div className='title'>
                Manage User
            </div>
            <div className="manage-user-content">
                <div >
                    <button>Add User</button>
                </div>
                <div>
                    table
                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser;
