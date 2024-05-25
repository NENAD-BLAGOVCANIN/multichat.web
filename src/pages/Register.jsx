import React, { useState } from 'react';
import { register } from '../api/register';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/login';
import mobileImgExample from '../assets/img/mobile-img-example.png'
import { Link } from 'react-router-dom'; 

export default function Register({ authenticated, setAuthenticated }) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(name, email, password);
      const response = await login(email, password);
      if (response.success) {
        setAuthenticated(true);
        navigate('/');
      }

    } catch (error) {
      setError('An error occurred while logging in.');
      console.error(error);
    }
  };


  return (
    <div className='main-auth-page-container'>

      <div className="card p-0 w-100 bg-transparent overflow-hidden" style={{ maxWidth: 'unset', height: '100vh' }}>

        <div className="row m-0">
          <div className="col-md-6 d-flex align-items-center" style={{ height: '100vh' }}>
            <div className='w-100 px-4 m-auto d-block' style={{ maxWidth: 600 }}>


              <div className='pt-3 pb-5'>
                <span className='py-3 h3 bold'>Sign up</span>
              </div>


              {error && <span className='text-danger small'>{error}</span>} { }

              <form onSubmit={handleSubmit}>
                <div className='py-2'>
                  <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className='form-control py-3 border-0' style={{ backgroundColor: '#EBE9F9' }} placeholder='Your Name' />
                </div>
                <div className='py-2'>
                  <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control py-3 border-0' style={{ backgroundColor: '#EBE9F9' }} placeholder='Your email address' />
                </div>
                <div className='py-2'>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='form-control py-3 border-0' style={{ backgroundColor: '#EBE9F9' }} placeholder='Your password' />
                </div>
                <div className='py-2 mb-3'>
                  <button type="submit" className='btn btn-primary w-100 py-3 border-0 fw-500' style={{ backgroundColor: '#EBE9F9' }}>Sign Up</button>
                </div>

                <div className='d-flex justify-content-between py-2'>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label color-text-lighter small" htmlFor="flexCheckDefault">
                      Remember Me
                    </label>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <span className='text-secondary small fw-500 text-decoration-none pe-2'>Already have an account?</span>
                    <Link to="/#/login" className='small fw-500 color-text text-decoration-none'>Log In</Link>
                  </div>
                </div>




              </form>
            </div>

          </div>
          <div className="col-md-6 px-0">
            <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
              <img src={mobileImgExample} className='w-100 h-100' style={{ objectFit: 'cover', maxWidth: 800 }} alt="" />
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}
