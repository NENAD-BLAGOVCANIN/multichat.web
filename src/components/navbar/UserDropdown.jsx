import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function UserDropdown() {

    return (
        <div>
            <div className="dropdown-menu dropdown-menu-left shadow-lg rounded show active" id='accountDropdown' aria-labelledby="accountDropdown"
                style={{ position: 'absolute', width: 300 }}>
                <div className="title-wrap d-flex align-items-center pb-4">
                    <h3 className="title text-center justify-content-center w-100 mb-0">Welcome, Nenad</h3>
                </div>


                <li className='nav-item px-2 rounded'>
                    <Link to="/admin/dashboard" className='nav-link py-1'>
                        <FontAwesomeIcon icon={faChartSimple} />
                        <span className='ps-3 medium'>Admin Panel</span>
                    </Link>
                </li>

                <li className='nav-item px-2 rounded'>
                    <Link to="/account" className='nav-link py-1'>
                        <FontAwesomeIcon icon={faUser} />
                        <span className='ps-3 medium'>My Account</span>
                    </Link>
                </li>
                <li className='nav-item px-2 rounded'>
                    <Link to="/logout" className='nav-link py-1'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span className='ps-3 medium'>Logout</span>
                    </Link>
                </li>

            </div>
        </div>
    )
}

export default UserDropdown