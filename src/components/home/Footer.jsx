import React from 'react'
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer class="bg-black mt-5">
            <div class="container-fluid px-0 pt-5 m-0">
                <div class="container py-4">
                    <div class="row m-0 p-0 justify-content-center">
                        <div class="col-md-4 mb-md-0 mb-4">
                            <img src={logo} style={{ maxHeight: 85 }} alt="" />
                            <p class="text-secondary py-3">
                                Your all-in-one messaging solution designed to streamline your digital communication experience. With Multichat, you can conveniently manage multiple messaging services in one centralized location.
                            </p>

                            <form action="">
                                <label class="fw-500 ps-1">Sign up for our newsletter:</label>
                                <div class="d-flex align-items-center">
                                    <div class="w-100">
                                        <input type="text" class="form-control my-2 w-100" placeholder="Your Email" />
                                    </div>
                                    <div class="ps-1">
                                        <button class="btn btn-dark rounded-lg" style={{ width: "max-content" }}>Sign up</button>
                                    </div>
                                </div>

                            </form>

                            <ul class="navbar-nav flex-row d-flex p-0 pt-4">
                                <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Twitter"><i
                                    class="fa-brands text-secondary h4 fa-x-twitter"></i></a>
                                <a href="#" class="px-3" data-bs-toggle="tooltip" data-placement="top" title="Facebook"><i
                                    class="fa-brands text-secondary h4 fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/company/multichat/" data-bs-toggle="tooltip" data-placement="top" title="linkedin"><i
                                    class="fa-brands text-secondary h4 fa-linkedin"></i></a>
                            </ul>

                        </div>
                        <div class="col-md-4 mb-md-0 mb-4">
                            <div class="footer-links-block d-block m-auto">
                                <p class="pb-2 fw-500 m-0">Quick Links</p>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="/" class="py-2 d-block text-secondary text-decoration-none">
                                            Home
                                        </a>
                                    </li>
                                    <li><a href="/blogs" class="py-2 d-block text-secondary text-decoration-none">
                                        Blog
                                    </a></li>
                                    <li><a href="#featuresSection" class="py-2 d-block text-secondary text-decoration-none">
                                        Features & Privacy</a>
                                    </li>
                                </ul>
                                <p class="pb-2 fw-500 m-0 pt-3">Info</p>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="/privacy-policy" class="py-2 d-block text-secondary text-decoration-none">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li><a href="/user-agreement" class="py-2 d-block text-secondary text-decoration-none">
                                        User Agreement</a>
                                    </li>
                                    <li><a href="/about-us" class="py-2 d-block text-secondary text-decoration-none">
                                        About Us
                                    </a></li>
                                </ul>
                            </div>

                        </div>
                        <div class="col-md-4 mb-md-0 mb-4">
                            <div class="footer-links-block d-block m-auto">
                                <p class="pb-2 fw-500 m-0">Users</p>
                                <ul class="list-unstyled">
                                    <li><a href="/register" class="py-2 d-block text-secondary text-decoration-none">
                                        Sign Up
                                    </a></li>
                                    <li><a href="/login" class="py-2 d-block text-secondary text-decoration-none">
                                        Log In
                                    </a></li>
                                    <li><a href="/customer-support" class="py-2 d-block text-secondary text-decoration-none">
                                        Contact Support
                                    </a></li>
                                </ul>
                                <p class="pb-2 fw-500 m-0 pt-3">Contact</p>
                                <ul class="list-unstyled">
                                    <li><a href="/customer-support" class="py-2 d-block text-secondary text-decoration-none">
                                        <i class="fa-solid fa-headset pe-2"></i> Contact live support
                                    </a></li>
                                    <li><a href="tel:33613498382" class="py-2 d-block text-secondary text-decoration-none"><i class="fa fa-phone pe-2"></i> +423563953</a>
                                    </li>
                                    <li><a href="mailto:contact@multi-chat.io" class="py-2 d-block text-secondary text-decoration-none"><i class="fa fa-envelope pe-2"></i> contact@multi-chat.io</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-md-5 pb-3">
                    <div>
                        <p class="text-center text-secondary m-0">
                            Copyright &copy;
                            2024 Multichat. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer