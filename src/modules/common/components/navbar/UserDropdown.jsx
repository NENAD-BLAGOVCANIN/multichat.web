import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function UserDropdown() {

    const { t } = useTranslation();

    return (
        <div>
            <div className="dropdown-menu dropdown-menu-left shadow-lg rounded show active" id='accountDropdown' aria-labelledby="accountDropdown"
                style={{ position: 'absolute', width: 300 }}>

                <li className='nav-item px-2 rounded'>
                    <Link to="/admin/dashboard" className='nav-link py-1'>
                        <FontAwesomeIcon icon={faChartSimple} />
                        <span className='ps-3 medium'>Dashboard</span>
                    </Link>
                </li>

                <hr className='text-secondary' />

                <li className='nav-item px-2 rounded'>
                    <Link to="/account" className='nav-link py-1'>
                        <FontAwesomeIcon icon={faUser} />
                        <span className='ps-3 medium'>{t('user_dropdown.my_account')}</span>
                    </Link>
                </li>
                <li className='nav-item px-2 rounded'>
                    <Link to="/logout" className='nav-link py-1'>
                        <FontAwesomeIcon icon={faRightFromBracket} className='text-danger' />
                        <span className='ps-3 medium text-danger'>{t('user_dropdown.logout')}</span>
                    </Link>
                </li>

            </div>
        </div>
    )
}

export default UserDropdown