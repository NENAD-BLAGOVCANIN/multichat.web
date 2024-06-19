import React, { useState } from 'react'
import logo from '../../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import profileImagePlaceholder from '../../../assets/img/ProfilePlaceholderImage.svg';
import UserDropdown from "../../navbar/UserDropdown";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

function Header() {

    const { authenticated, email, logout } = useAuth();
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    return (
        <nav class="navbar admin-header navbar-expand-lg position-fixed w-100 shadow-md">
            <div class="container px-4 py-2">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/downloads">
                                Downloads
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/features">
                                Features
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/docs">
                                Docs
                            </NavLink>
                        </li>
                    </ul>
                </div>

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

            </div>
        </nav>
    )
}

export default Header