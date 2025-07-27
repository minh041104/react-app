import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LuImageUp } from "react-icons/lu";
import axios from 'axios';
import { toast } from 'react-toastify';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('user');
        setImage(null);
        setPreview(null);
    }
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('user');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleUploadChange = (e) => {
        if (e.target.files[0]) {
            setPreview(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            toast.error('Please enter a valid email');
            return;
        }
        if (!password || !username || !role) {
            toast.error('Please fill all fields');
            return;
        }
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('username', username);
        formData.append('role', role);
        if (image) {
            formData.append('image', image);
        }
        // call api
        try {
            const res = await axios.post('http://localhost:8081/api/v1/participant', formData)
            if (res.data && res.data.EC === 0) {
                toast.success('Create user success');
                handleClose();
            } else {
                toast.error(res.data.EM || 'Create user failed');
            }
        } catch (error) {
            toast.error(error.message || 'Create user failed');
        }
    }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size="lg" backdrop="static" className='model-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Role</label>
                    <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className="label-upload" htmlFor="file-input">
                        <LuImageUp /> Upload Image
                    </label>
                    <input type="file" className="form-control" id="file-input" hidden onChange={(e) => handleUploadChange(e)}/>
                </div>
                <div className='col-md-12 img-preview'>
                    {preview ? (
                        <img src={preview} alt="" />
                    ) : <span>Preview Image</span>}
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;
