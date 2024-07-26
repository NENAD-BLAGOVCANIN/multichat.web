import React, { useState, useEffect } from 'react'
import { getMessagingServices } from '../api/messaging_services';

function MessagingServices() {

    const [messagingServices, setMessagingServices] = useState([]);

    useEffect(() => {
        const fetchMessagingServices = async () => {
            try {
                const fetchedMessagingServices = await getMessagingServices();
                setMessagingServices(fetchedMessagingServices);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchMessagingServices();
    }, []);

    return (
        <div className='container'>
            <h3 className='mt-4 mb-3 ps-2'>Messaging Services</h3>
            <span className='medium ps-2'>A list of currently supported messaging services</span>


            <div className='m-auto d-block w-100 mt-4' style={{ maxWidth: 1500, overflowX: 'auto' }}>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th className='medium fw-400'>ID</th>
                                <th className='medium fw-400'>Name</th>
                                <th className='medium fw-400'>Description</th>
                                <th className='medium fw-400'>Title</th>
                                <th className='medium fw-400'>Icon</th>
                                <th className='medium fw-400'>Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messagingServices.map(messagingService => (
                                <tr key={messagingService.id}>
                                    <td className='medium py-3'>{messagingService.id}</td>
                                    <td className='medium py-3'>{messagingService.name}</td>
                                    <td className='medium py-3'>{messagingService.description}</td>
                                    <td className='medium py-3'>{messagingService.title}</td>
                                    <td>
                                        <img src={messagingService.icon} style={{ width: 35 }}></img>
                                    </td>
                                    <td className='medium py-3'>{messagingService.url}</td>
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