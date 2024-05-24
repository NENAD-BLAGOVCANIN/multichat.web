import React from 'react'
import logo from '../assets/img/logo.png'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg position-fixed w-100 shadow-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item px-2">
                            <a class="nav-link hover-lg active" href="/">Home</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link hover-lg" href="/downloads">Downloads</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link hover-lg" href="#features">Features</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link hover-lg" href="/docs">Docs</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='px-1'>
                        <a href="/register" className='btn btn-primary rounded-lg px-3 py-2'>Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar