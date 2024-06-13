import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mobileImgExample from '../assets/img/mobile-img-example.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import logo from '../assets/img/logo.png'
import { useTranslation } from 'react-i18next';

export default function Login() {

    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await login(email, password);
        if (response.success) {
            toast.success('Successfully logged in!');
            navigate('/home');
        } else {
            setError(response.message);
        }
    };


    return (
        <div className='main-auth-page-container'>

            <div className="card p-0 w-100 bg-transparent overflow-hidden" style={{ maxWidth: 'unset', minHeight: '100vh' }}>

                <div className="row m-0">
                    <div className="col-md-6 d-flex align-items-center" style={{ minHeight: '100vh' }}>
                        <div className='w-100 px-4 m-auto d-block py-4' style={{ maxWidth: 600 }}>

                            <div className='d-flex align-items-center mb-3'>
                                <div className='py-3'>
                                    <img src={logo} alt="" className='auth-page-logo' />
                                </div>

                                <div className='ps-4'>
                                    <h2 className='bold'>{t('login.login')}</h2>
                                    <p>{t('login.welcome')}</p>
                                </div>

                            </div>

                            {error && <span className='text-danger small'>{error}</span>} { }

                            <form onSubmit={handleSubmit} className='w-100'>
                                <div className='py-2'>
                                    <label className='mb-1 ps-1'>{t('login.email')}</label>
                                    <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder={t('login.enter_your_email')} />
                                </div>
                                <div className='py-2'>
                                    <label className='mb-1 ps-1'>{t('login.password')}</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder='••••••••' />
                                </div>

                                <div className='d-flex justify-content-between py-3'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            {t('login.remember_pass')}
                                        </label>
                                    </div>
                                    <a href="/forgot-password" className='text-primary fw-500 text-decoration-none'>{t('login.forgot_password')}</a>
                                </div>


                                <div className='py-2 mt-3'>
                                    <button type="submit" className='btn btn-primary hover-lg w-100 py-3 border-0 fw-500' style={{ backgroundColor: '#EBE9F9' }}>{t('login.login')}</button>
                                </div>

                                <div className='d-flex justify-content-center pt-3'>
                                    <span className='text-secondary small fw-500 text-decoration-none pe-2'>{t('login.dont_have_an_account')}</span>
                                    <Link to="/register" className='small fw-500 color-text text-decoration-none'>{t('login.sign_up')}</Link>
                                </div>


                            </form>
                        </div>

                    </div>
                    <div className="col-md-6 px-0">
                        <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
                            <img src={mobileImgExample} className='w-100' style={{ objectFit: 'cover', maxWidth: 800 }} alt="" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
