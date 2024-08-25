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
        <div className='card px-4 py-4'>

            <FormGroup>
                <FormLabel>Name</FormLabel>
                <input className='form-control' value={userInfo.name} readOnly />
            </FormGroup>
            <FormGroup className='mt-3'>
                <FormLabel>Email</FormLabel>
                <input className='form-control' value={userInfo.email} readOnly />
            </FormGroup>

            <FormGroup className='mt-3'>
                <FormLabel>Plan</FormLabel>
                <input className='form-control' value={userInfo?.subscription?.title} readOnly />
            </FormGroup>

        </div>
    )
}

export default Account