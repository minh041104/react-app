import ModalCreateUser from './ModalCreateUser';

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
                    <ModalCreateUser />
                </div>
     
            </div>
        </div>
    )
}

export default ManageUser;
