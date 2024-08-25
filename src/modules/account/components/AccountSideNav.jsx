import React, { useState, useEffect } from 'react'
import { PersonCircle, Box2, Heart, BoxArrowRight, Gear, Lock, Ticket, Box, Stripe } from 'react-bootstrap-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getUserInfo } from '../../common/api/user';
import { truncateString } from '../../common/utils/format_utils'

function AccountSideNav() {

    const location = useLocation();

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const fetchedUserInfo = await getUserInfo();
                setUserInfo(fetchedUserInfo);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div style={{ width: 350 }} className='mb-3'>

            <nav>
                <div className="card bg-contrast">
                    <div className="card-body p-0 p-md-4">

                        <ul className="nav px-2 flex-column d-none d-lg-block mt-1 mt-lg-0">
                            <li>
                                <div class="d-flex flex-column">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <PersonCircle className='h1 text-muted border rounded-circle me-2' />
                                        </div>
                                        <div class="px-3">
                                            <p class="bold mb-0">
                                                {userInfo.name}
                                            </p>
                                            <p className='medium text-lighter'>{truncateString(userInfo.email, 20)}</p>
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
                                    <Stripe />
                                    <span className='ps-2'>Payments</span>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link px-0 d-flex align-items-center pb-2" to="/account/privacy">
                                    <Lock />
                                    <span className='ps-2'>Privacy</span>
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