import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';
import { faBoltLightning, faCheck, faDownload, faX } from '@fortawesome/free-solid-svg-icons'

function Pricing() {

    const { t } = useTranslation();

    return (
        <div className='container py-5 px-5'>

            <h2><b>Pricing</b></h2>
            <p>You can always use the free plan with limited features.</p>

            <div className="row">
                <div className="col-md-4 py-4">
                    <div className='card border-0 shadow-sm rounded-0'>
                        <div className='card-body'>
                            <h4 className='mt-3'>
                                Standard Plan
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>8$</h2>
                                <span className='text-muted'>/month</span>
                            </div>
                            <p className='medium pt-2'>Billed yearly</p>


                            <div className='py-4'>
                                <button className='btn btn-basic border w-100'>Start Free Trial</button>
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Unlimited Tabs</span>
                                        <FontAwesomeIcon icon={faX} className='text-danger' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Unlimited Sessions</span>
                                        <FontAwesomeIcon icon={faX} className='text-danger' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Automatic Updates</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>24/7 Customer Support</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-4">
                    <div className='card shadow-sm rounded-0' style={{ border: '1px solid var(--color-primary)' }}>
                        <div className='card-body'>
                            <h4 className='mt-3'>
                                Free Plan
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>0$</h2>
                                <span className='text-muted'>/month</span>
                            </div>
                            <p className='medium pt-2'>Billed yearly</p>


                            <div className='py-4'>
                                <button className='btn btn-basic border w-100'>Start Free Trial</button>
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Unlimited Tabs</span>
                                        <FontAwesomeIcon icon={faX} className='text-danger' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Unlimited Sessions</span>
                                        <FontAwesomeIcon icon={faX} className='text-danger' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Automatic Updates</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>24/7 Customer Support</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-4">
                    <div className='card border-0 shadow-sm rounded-0'>
                        <div className='card-body'>
                            <h4 className='mt-3'>
                                Pro Enterprise Plan
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>24$</h2>
                                <span className='text-muted'>/month</span>
                            </div>
                            <p className='medium pt-2'>Billed yearly</p>

                            <div className='py-4'>
                                <button className='btn btn-basic border w-100'>Start Free Trial</button>
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Unlimited Tabs</span>
                                        <FontAwesomeIcon icon={faX} className='text-danger' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Unlimited Sessions</span>
                                        <FontAwesomeIcon icon={faX} className='text-danger' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>Automatic Updates</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                                        <span>24/7 Customer Support</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing