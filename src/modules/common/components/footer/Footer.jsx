import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Envelope, Headset, Telephone } from 'react-bootstrap-icons';

function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="pt-5 pb-3 shadow">
            <div className="container-fluid px-0 pt-5 m-0">
                <div className="container py-4">
                    <div className="row m-0 p-0 justify-content-center">
                        <div className="col-md-4 mb-md-0 mb-4">
                            <img src={logo} style={{ maxHeight: 85 }} alt="" />
                            <p className="py-3">
                                {t('footer.website_description')}
                            </p>

                            <form action="">
                                <label className="fw-500 ps-1">{t('footer.newsletter.label')}</label>
                                <div className="d-flex align-items-center">
                                    <div className="w-100">
                                        <input type="text" className="form-control my-2 w-100" placeholder={t('footer.newsletter.your_email')} />
                                    </div>
                                    <div className="ps-1">
                                        <button className="btn btn-primary rounded" style={{ width: "max-content" }}>{t('footer.sign_up')}</button>
                                    </div>
                                </div>

                            </form>

                            <ul className="navbar-nav flex-row d-flex p-0 pt-4">
                                <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Twitter"><i
                                    className="fa-brands text-primary h4 fa-x-twitter"></i></a>
                                <a href="#" className="px-3" data-bs-toggle="tooltip" data-placement="top" title="Facebook"><i
                                    className="fa-brands text-primary h4 fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/company/multichat/" data-bs-toggle="tooltip" data-placement="top" title="linkedin"><i
                                    className="fa-brands text-primary h4 fa-linkedin"></i></a>
                            </ul>

                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <div className="footer-links-block d-block m-auto">
                                <p className="pb-2 fw-500 m-0">{t('footer.quick_links')}</p>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/" className="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.home')}
                                        </a>
                                    </li>
                                    <li><a href="/downloads" className="py-2 d-block text-secondary text-decoration-none">
                                        {t('footer.downloads')}
                                    </a></li>
                                    <li>
                                        <a href="/pricing" className="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.pricing')}
                                        </a>
                                    </li>
                                </ul>
                                <p className="pb-2 fw-500 m-0 pt-3">{t('footer.info')}</p>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/privacy-policy" className="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.privacy_policy')}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/terms-of-service" className="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.terms')}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.about_us')}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <div className="footer-links-block d-block m-auto">
                                <p className="pb-2 fw-500 m-0">{t('footer.users')}</p>
                                <ul className="list-unstyled">
                                    <li><a href="/register" className="py-2 d-block text-secondary text-decoration-none">
                                        {t('footer.sign_up')}
                                    </a></li>
                                    <li><a href="/login" className="py-2 d-block text-secondary text-decoration-none">
                                        {t('footer.log_in')}
                                    </a></li>
                                    <li><a href="/customer-support" className="py-2 d-block text-secondary text-decoration-none">
                                        {t('footer.contact_support')}
                                    </a></li>
                                </ul>
                                <p className="pb-2 fw-500 m-0 pt-3">{t('footer.contact')}</p>
                                <ul className="list-unstyled">
                                    <li><a href="/customer-support" className="py-2 d-block text-secondary text-decoration-none">
                                        <Headset className='me-2' />
                                        {t('footer.contact_live_support')}
                                    </a></li>
                                    <li>
                                        <a href="tel:33613498382"
                                            className="py-2 d-block text-secondary text-decoration-none">
                                            <Telephone className='me-2' />
                                            +423563953
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:contact@multi-chat.io"
                                            className="py-2 d-block text-secondary text-decoration-none">
                                            <Envelope className='me-2' />
                                            contact@multi-chat.io
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-md-5 pb-3">
                    <div>
                        <p className="text-center m-0">
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