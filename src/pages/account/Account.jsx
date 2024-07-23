import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getUserInfo } from '../../modules/common/api/user';
import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons';

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
        <div className='container px-5 py-5'>

            <h2 className='bold mb-5'>My Account</h2>


            <p className="text-muted">Name: {userInfo.name}</p>
            <p className="text-muted">Email: {userInfo.email}</p>
            <p className="text-muted">
                Profile Created At: {formatDate(userInfo.date_joined)}
            </p>
            <p className="text-muted">
                Email Verified:{" "}
                <span className="badge bagde-primary bg-danger">No</span>
            </p>

        </div>
    )
}

export default Account