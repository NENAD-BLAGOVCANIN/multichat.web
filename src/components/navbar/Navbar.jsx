import React, { useState } from 'react'
import logo from '../../assets/img/logo_wide_300.png'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import profileImagePlaceholder from '../../assets/img/ProfilePlaceholderImage.svg';
import UserDropdown from "./UserDropdown";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Navbar() {

    const { t } = useTranslation();

    const { authenticated } = useAuth();
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };


    return (
        <nav class="navbar navbar-expand-lg w-100">
            <div class="container px-5 py-2">
                <Link class="navbar-brand pe-3" to="/">
                    <img src={logo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
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
                            <NavLink className="nav-link" to="/subscriptions">
                                {t('navbar.subscriptions')}
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/docs">
                                {t('navbar.docs')}
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
                            className="dropdown-link d-flex align-items-center"
                            aria-haspopup="true"
                            aria-expanded={isUserDropdownOpen}
                        >
                            <img
                                src={profileImagePlaceholder}
                                className="rounded pointer"
                                alt=""
                                style={{
                                    maxHeight: 28,
                                    aspectRatio: 1,
                                    objectFit: "cover",
                                    height: "100%",
                                }}
                            />
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