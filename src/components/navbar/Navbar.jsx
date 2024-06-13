import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import profileImagePlaceholder from '../../assets/img/ProfilePlaceholderImage.svg';
import UserDropdown from "./UserDropdown";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useTranslation } from 'react-i18next';

function Navbar({ darkMode, toggleDarkMode }) {

    const { t, i18n } = useTranslation();

    const { authenticated, email, logout } = useAuth();
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const lngs = {
        en: { nativeName: 'English' },
        zh: { nativeName: 'Chinese' }
    };

    const flagMapping = {
        English: "https://flagicons.lipis.dev/flags/4x3/us.svg",
        Chinese: "https://flagicons.lipis.dev/flags/4x3/cn.svg",
    };

    return (
        <nav class="navbar navbar-expand-lg position-fixed w-100 shadow-md">
            <div class="container-fluid px-4">
                <Link class="navbar-brand pe-3" to="/">
                    <img src={logo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div>
                    {Object.keys(lngs).map((lng) => (
                        <button key={lng} className="btn border-0" type="submit" onClick={() => {
                            i18n.changeLanguage(lng);
                        }}>
                            <img src={flagMapping[lngs[lng].nativeName]} style={{ height: 15 }} />
                        </button>
                    ))}
                </div>
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
                <div className="form-group pe-3">

                    <BootstrapSwitchButton
                        checked={darkMode}
                        className="bg-gray"
                        onlabel='🌘'
                        offlabel='☀️'
                        onChange={toggleDarkMode}
                    />

                </div>
                {authenticated ? (
                    <>
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
                    </>
                ) : (
                    <div className='d-flex align-items-center'>
                        <div className='px-1'>
                            <Link to="/register" className='btn btn-primary rounded px-3 py-2'>Sign up</Link>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar