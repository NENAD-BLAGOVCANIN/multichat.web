import React, { useState, useEffect } from 'react'
import { getMessagingServices } from '../api/messaging_services';
import { getSubscriptions } from '../api/subscriptions';

function MessagingServices() {

    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const fetchedSubscriptions = await getSubscriptions();
                setSubscriptions(fetchedSubscriptions);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchSubscriptions();
    }, []);

    return (
        <div className='container'>
            <h3 className='mt-4 mb-3 ps-2'>Subscriptions</h3>
            <span className='medium ps-2'>Here you can see currently running subscriptions</span>


            <div className='m-auto d-block w-100 mt-4' style={{ maxWidth: 1500, overflowX: 'auto' }}>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th className='medium fw-400'>User Name</th>
                                <th className='medium fw-400'>User Email</th>
                                <th className='medium fw-400'>Type</th>
                                <th className='medium fw-400'>Expires at</th>
                                <th className='medium fw-400'>Created at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscriptions.map(subscription => (
                                <tr key={subscription.id}>
                                    <td className='medium py-3'>{subscription?.user?.name}</td>
                                    <td className='medium py-3'>{subscription?.user?.email}</td>
                                    <td className='medium py-3'>
                                        <span className='badge badge-primary bg-info'>{subscription?.subscription?.title}</span>
                                    </td>
                                    <td className='medium py-3'>{subscription.renewal_date}</td>
                                    <td className='medium py-3'>{subscription.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default MessagingServices