import React from 'react'
import { PersonCircle, Box2, Heart, BoxArrowRight, Gear, Lock, Ticket, Box } from 'react-bootstrap-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';

function AccountSideNav() {

    const location = useLocation();

    return (
        <div style={{ width: 350 }} className='mb-3'>

            <nav>
                <div className="card bg-contrast">
                    <div className="card-body p-0 p-md-4">

                        <ul className="nav px-2 flex-column d-none d-lg-block mt-1 mt-lg-0">
                            <li>
                                <div class="d-flex flex-column">
                                    <div class="d-flex">
                                        <div>
                                            <img style={{ width: 85, height: 85 }} src="https://assets.leetcode.com/users/nenad2807/avatar_1722986724.png" alt="Avatar" class="h-20 w-20 rounded-lg object-cover" />
                                        </div>
                                        <div class="px-3">
                                            <p class="bold mb-0">
                                                nenad2807
                                            </p>
                                            <p className='medium text-lighter'>Nenad Blagov</p>
                                        </div>
                                    </div>
                                    <a to="/profile/" class="btn btn-success my-3">
                                        Edit Profile
                                    </a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link px-0 d-flex align-items-center pb-2 ${location.pathname === '/account' ? 'active' : ''}`} to="/account">
                                    <PersonCircle />
                                    <span className="ps-2">My account</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link px-0 d-flex align-items-center pb-2" to="my-products">
                                    <Box />
                                    <span className='ps-2'>My products</span>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link px-0 d-flex align-items-center pb-2" to="/account/privacy">
                                    <Lock />
                                    <span className='ps-2'>Privacy</span>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link px-0 d-flex align-items-center pb-2" to="/account/settings">
                                    <Gear />
                                    <span className='ps-2'>Account settings</span>
                                </NavLink>
                            </li>

                            <li className="nav-item border-top my-3"></li>


                            <li className="nav-item">
                                <NavLink className="nav-link px-0" to="/logout">
                                    <BoxArrowRight />
                                    <span className='ps-2'>Log Out</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
        </div>
    )
}

export default AccountSideNav