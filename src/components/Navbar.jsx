import React from 'react'
import logo from '../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg position-fixed w-100 shadow-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" exact to="/" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/downloads" activeClassName="active">
                                Downloads
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/features" activeClassName="active">
                                Features
                            </NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-link" to="/docs" activeClassName="active">
                                Docs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='px-1'>
                        <Link to="/register" className='btn btn-primary rounded-lg px-3 py-2'>Sign up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar