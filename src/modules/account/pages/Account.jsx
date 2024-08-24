import React, { useState, useEffect } from 'react'
import { getUserInfo } from '../../common/api/user';
import { FormGroup, FormLabel, FormText } from 'react-bootstrap';

function Account() {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const fetchedUserInfo = await getUserInfo();
                setUserInfo(fetchedUserInfo);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchUserInfo();
    }, []);

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        };
        return date.toLocaleDateString(undefined, options);
    }


    return (
        <div className='container px-3 py-3'>

            <h2 className='mb-5'>Hello, {userInfo.name}</h2>

            <FormGroup className='mt-3'>
                <FormLabel>Name</FormLabel>
                <input className='form-control' value={userInfo.name} readOnly />
            </FormGroup>
            <FormGroup className='mt-3'>
                <FormLabel>Email</FormLabel>
                <input className='form-control' value={userInfo.email} readOnly />
            </FormGroup>
            <p className="text-muted mt-3">
                Profile Created At: {formatDate(userInfo.date_joined)}
            </p>
            <p className="text-muted mt-3">
                Email Verified:{" "}
                <span className="badge bagde-primary bg-danger">No</span>
            </p>

        </div>
    )
}

export default Account