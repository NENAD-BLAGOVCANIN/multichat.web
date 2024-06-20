import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="mt-5">
            <div className="container-fluid px-0 pt-5 m-0">
                <div className="container py-4">
                    <div className="row m-0 p-0 justify-content-center">
                        <div className="col-md-4 mb-md-0 mb-4">
                            <img src={logo} style={{ maxHeight: 85 }} alt="" />
                            <p className="text-white py-3">
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
                                <Link to="#" data-bs-toggle="tooltip" data-placement="top" title="Twitter"><i
                                    className="fa-brands text-white h4 fa-x-twitter"></i></Link>
                                <Link to="#" className="px-3" data-bs-toggle="tooltip" data-placement="top" title="Facebook"><i
                                    className="fa-brands text-white h4 fa-facebook"></i></Link>
                                <Link to="https://www.linkedin.com/company/multichat/" data-bs-toggle="tooltip" data-placement="top" title="linkedin"><i
                                    className="fa-brands text-white h4 fa-linkedin"></i></Link>
                            </ul>

                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <div className="footer-links-block d-block m-auto">
                                <p className="pb-2 fw-500 m-0 text-primary">{t('footer.quick_links')}</p>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/" className="py-2 d-block text-white text-decoration-none">
                                            {t('footer.home')}
                                        </Link>
                                    </li>
                                    <li><Link to="/blogs" className="py-2 d-block text-white text-decoration-none">
                                        {t('footer.blog')}
                                    </Link></li>
                                    <li>
                                        <Link to="#featuresSection" className="py-2 d-block text-white text-decoration-none">
                                            {t('footer.features_and_privacy')}
                                        </Link>
                                    </li>
                                </ul>
                                <p className="pb-2 fw-500 m-0 pt-3 text-primary">{t('footer.info')}</p>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/privacy-policy" className="py-2 d-block text-white text-decoration-none">
                                            {t('footer.privacy_policy')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-agreement" className="py-2 d-block text-white text-decoration-none">
                                            {t('footer.user_agreement')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us" className="py-2 d-block text-white text-decoration-none">
                                            {t('footer.about_us')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <div className="footer-links-block d-block m-auto">
                                <p className="pb-2 fw-500 m-0 text-primary">{t('footer.users')}</p>
                                <ul className="list-unstyled">
                                    <li><Link to="/register" className="py-2 d-block text-white text-decoration-none">
                                        {t('footer.sign_up')}
                                    </Link></li>
                                    <li><Link to="/login" className="py-2 d-block text-white text-decoration-none">
                                        {t('footer.log_in')}
                                    </Link></li>
                                    <li><Link to="/customer-support" className="py-2 d-block text-white text-decoration-none">
                                        {t('footer.contact_support')}
                                    </Link></li>
                                </ul>
                                <p className="pb-2 fw-500 m-0 pt-3 text-primary">{t('footer.contact')}</p>
                                <ul className="list-unstyled">
                                    <li><Link to="/customer-support" className="py-2 d-block text-white text-decoration-none">
                                        <i className="fa-solid fa-headset pe-2"></i>
                                        {t('footer.contact_live_support')}
                                    </Link></li>
                                    <li><Link to="tel:33613498382" className="py-2 d-block text-white text-decoration-none"><i className="fa fa-phone pe-2"></i> +423563953</Link>
                                    </li>
                                    <li><Link to="mailto:contact@multi-chat.io" className="py-2 d-block text-white text-decoration-none"><i className="fa fa-envelope pe-2"></i> contact@multi-chat.io</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-md-5 pb-3">
                    <div>
                        <p className="text-center text-white m-0">
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