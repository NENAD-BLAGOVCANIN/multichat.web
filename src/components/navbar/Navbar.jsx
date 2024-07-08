import React, { useState } from 'react'
import logo from '../../assets/img/logo_wide_300.png'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { ReactComponent as UserSmallIcon } from '../../assets/img/svg/user-sm.svg'
import UserDropdown from "./UserDropdown";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const { t } = useTranslation();

    const { authenticated } = useAuth();
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };


    return (
        <nav className="navbar navbar-home navbar-expand-lg w-100">
            <div className="container px-5 py-2">
                <Link className="navbar-brand pe-3" to="/">
                    <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" exact to="/">
                                {t('navbar.home')}
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/downloads">
                                {t('navbar.downloads')}
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/pricing">
                                {t('navbar.pricing')}
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <LanguageSelector />

                {authenticated ? (
                    <div className="dropdown custom-dropdown">
                        <a
                            href="#"
                            onClick={toggleUserDropdown}
                            className="dropdown-link d-flex align-items-center user-dropdown-toggler"
                            aria-haspopup="true"
                            aria-expanded={isUserDropdownOpen}
                        >
                            <FontAwesomeIcon icon={faUser} className='pe-2' />
                            <FontAwesomeIcon icon={faChevronDown} className='small' />
                        </a>

                        {isUserDropdownOpen && (
                            <UserDropdown />
                        )}
                    </div>
                ) : (
                    <div className='d-flex align-items-center'>
                        <div className='px-1'>
                            <Link to="/register" className='btn btn-primary rounded-lg px-3 py-2'>{t('navbar.sign_up')}</Link>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar