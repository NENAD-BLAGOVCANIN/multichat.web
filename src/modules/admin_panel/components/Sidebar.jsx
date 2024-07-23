import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCompass, faTriangleExclamation,
    faUserGroup, faBars, faLayerGroup,
    faArrowLeft,
    faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { PersonCircle, UiChecksGrid, QuestionCircle, Chat, Stripe } from 'react-bootstrap-icons';


function Sidebar({ userInfo, setUserInfo }) {

    const [sidebarActive, setSidebarActive] = useState(true);
    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    useEffect(() => {

        function handleResize() {
            if (window.innerWidth < 855) {
                const sidebar = document.getElementById('sidebar');
                if (!sidebar.classList.contains('active')) {
                    sidebar.classList.toggle('active');
                }
                document.documentElement.style.setProperty('--sidebar-width', '0');
            }
        }


        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const toggleModal = () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            document.documentElement.style.setProperty('--sidebar-width', '0');
        } else {
            document.documentElement.style.setProperty('--sidebar-width', '236px');
        }
    };

    return (

        <nav id="sidebar" className={!sidebarActive ? 'active' : ''}>

            <ul className="list-unstyled py-2">

                <div className='sidebar-link-group'>
                    <li className={`nav-item px-2 rounded`}>
                        <Link to="/" className='nav-link'>
                            <FontAwesomeIcon icon={faArrowLeft} className='pe-2' />
                            <span className='ps-3 medium muted'>Return home</span>
                        </Link>
                    </li>
                </div>

                <div className='sidebar-link-group'>

                    <li className={`nav-item px-2 rounded ${currentPage === '/admin/dashboard' ? 'active' : ''}`}>
                        <Link to="/admin/dashboard" className='nav-link' onClick={() => handlePageChange('/admin/dashboard')}>
                            <UiChecksGrid />
                            <span className='ps-3 medium'>Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item px-2 rounded ${currentPage === '/admin/users' ? 'active' : ''}`}>
                        <Link to="/admin/users" className='nav-link' onClick={() => handlePageChange('/admin/users')}>
                            <PersonCircle />
                            <span className='ps-3 medium'>Users</span>
                        </Link>
                    </li>
                    <li className={`nav-item px-2 rounded ${currentPage === '/admin/users' ? 'active' : ''}`}>
                        <Link to="/admin/users" className='nav-link' onClick={() => handlePageChange('/admin/users')}>
                            <Chat />
                            <span className='ps-3 medium'>Messaging Services</span>
                        </Link>
                    </li>
                    <li className={`nav-item px-2 rounded ${currentPage === '/admin/users' ? 'active' : ''}`}>
                        <Link to="/admin/users" className='nav-link' onClick={() => handlePageChange('/admin/users')}>
                            <Stripe />
                            <span className='ps-3 medium'>Subscriptions</span>
                        </Link>
                    </li>
                </div>

            </ul>

            <div className='btn btn-basic bg-white w-fit position-fixed pointer' id='toggleModalButton' onClick={toggleModal}>
                <FontAwesomeIcon icon={faBars} />
            </div>

        </nav>

    )
}

export default Sidebar