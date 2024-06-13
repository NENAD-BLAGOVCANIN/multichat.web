import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <footer class="mt-5">
            <div class="container-fluid px-0 pt-5 m-0">
                <div class="container py-4">
                    <div class="row m-0 p-0 justify-content-center">
                        <div class="col-md-4 mb-md-0 mb-4">
                            <img src={logo} style={{ maxHeight: 85 }} alt="" />
                            <p class="text-secondary py-3">
                                {t('footer.website_description')}
                            </p>

                            <form action="">
                                <label class="fw-500 ps-1">{t('footer.newsletter.label')}</label>
                                <div class="d-flex align-items-center">
                                    <div class="w-100">
                                        <input type="text" class="form-control my-2 w-100" placeholder={t('footer.newsletter.your_email')} />
                                    </div>
                                    <div class="ps-1">
                                        <button class="btn btn-dark rounded" style={{ width: "max-content" }}>{t('footer.newsletter.sign_up')}</button>
                                    </div>
                                </div>

                            </form>

                            <ul class="navbar-nav flex-row d-flex p-0 pt-4">
                                <Link to="#" data-bs-toggle="tooltip" data-placement="top" title="Twitter"><i
                                    class="fa-brands text-secondary h4 fa-x-twitter"></i></Link>
                                <Link to="#" class="px-3" data-bs-toggle="tooltip" data-placement="top" title="Facebook"><i
                                    class="fa-brands text-secondary h4 fa-facebook"></i></Link>
                                <Link to="https://www.linkedin.com/company/multichat/" data-bs-toggle="tooltip" data-placement="top" title="linkedin"><i
                                    class="fa-brands text-secondary h4 fa-linkedin"></i></Link>
                            </ul>

                        </div>
                        <div class="col-md-4 mb-md-0 mb-4">
                            <div class="footer-links-block d-block m-auto">
                                <p class="pb-2 fw-500 m-0">{t('footer.quick_links')}</p>
                                <ul class="list-unstyled">
                                    <li>
                                        <Link to="/" class="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.home')}
                                        </Link>
                                    </li>
                                    <li><Link to="/blogs" class="py-2 d-block text-secondary text-decoration-none">
                                        {t('footer.blog')}
                                    </Link></li>
                                    <li>
                                        <Link to="#featuresSection" class="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.features_and_privacy')}
                                        </Link>
                                    </li>
                                </ul>
                                <p class="pb-2 fw-500 m-0 pt-3">{t('footer.info')}</p>
                                <ul class="list-unstyled">
                                    <li>
                                        <Link to="/privacy-policy" class="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.privacy_policy')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-agreement" class="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.user_agreement')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us" class="py-2 d-block text-secondary text-decoration-none">
                                            {t('footer.about_us')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="col-md-4 mb-md-0 mb-4">
                            <div class="footer-links-block d-block m-auto">
                                <p class="pb-2 fw-500 m-0">{t('footer.users')}</p>
                                <ul class="list-unstyled">
                                    <li><Link to="/register" class="py-2 d-block text-secondary text-decoration-none">
                                        {t('footer.sign_up')}
                                    </Link></li>
                                    <li><Link to="/login" class="py-2 d-block text-secondary text-decoration-none">
                                        {t('footer.log_in')}
                                    </Link></li>
                                    <li><Link to="/customer-support" class="py-2 d-block text-secondary text-decoration-none">
                                        {t('footer.contact_support')}
                                    </Link></li>
                                </ul>
                                <p class="pb-2 fw-500 m-0 pt-3">{t('footer.contact')}</p>
                                <ul class="list-unstyled">
                                    <li><Link to="/customer-support" class="py-2 d-block text-secondary text-decoration-none">
                                        <i class="fa-solid fa-headset pe-2"></i>
                                        {t('footer.contact_live_support')}
                                    </Link></li>
                                    <li><Link to="tel:33613498382" class="py-2 d-block text-secondary text-decoration-none"><i class="fa fa-phone pe-2"></i> +423563953</Link>
                                    </li>
                                    <li><Link to="mailto:contact@multi-chat.io" class="py-2 d-block text-secondary text-decoration-none"><i class="fa fa-envelope pe-2"></i> contact@multi-chat.io</Link>
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