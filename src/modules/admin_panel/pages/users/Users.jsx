import React, { useState, useEffect } from 'react'
import { getUsers } from '../../api/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBars, faEdit } from '@fortawesome/free-solid-svg-icons';
import ViewUserModal from './ViewUserModal';
import { deleteUser } from '../../api/user';

function Users() {

    const [users, setUsers] = useState([]);
    const [showViewUserModal, setShowViewUserModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchUsers();
    }, []);

    const openViewUserModal = (contact) => {
        setSelectedUser(contact);
        setShowViewUserModal(true);
    };

    const handleDeleteUser = async (user_id) => {
        try {
            await deleteUser(user_id);
            const updatedUsers = users.filter(user => user.id !== user_id);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (

        <>
        
            <div className='m-auto d-block w-100' style={{ maxWidth: 1500, overflowX: 'auto' }}>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><span className='badge badge-primary bg-success'>{user.role.name}</span></td>
                                    <td>
                                        <div className="h-100 d-flex align-items-center justify-content-center">
                                            <div className='px-1'>
                                                <button className='btn btn-basic bg-gray-light shadow-sm' onClick={() => openViewUserModal(user)}>
                                                    <FontAwesomeIcon icon={faBars} />
                                                </button>
                                            </div>
                                            <div className='px-1'>
                                                <button className='btn btn-basic bg-gray-light shadow-sm'>
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                            </div>
                                            <div className='px-1'>
                                                <button className='btn btn-basic bg-gray-light text-danger shadow-sm' onClick={() => handleDeleteUser(user.id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ViewUserModal showViewUserModal={showViewUserModal} setShowViewUserModal={setShowViewUserModal} selectedUser={selectedUser} />

        </>
    )
}

export default Users