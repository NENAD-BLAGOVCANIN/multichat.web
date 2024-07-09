import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';
import { faBoltLightning, faCheck, faDownload, faX } from '@fortawesome/free-solid-svg-icons'

function Pricing() {

    const { t } = useTranslation();

    return (
        <div className='container py-5 px-5'>

            <div className="row">
                <div className="col-md-4 py-4">
                    <div className='card border-0 shadow-sm rounded-0 h-100'>
                        <div className='card-body'>
                            <h4 className='mt-2'>
                                Standard Plan
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>8$</h2>
                                <span className='text-muted ps-1'>/month</span>
                            </div>
                            <p className='medium pt-2'>Billed monthly</p>


                            <div className='py-4'>
                                <a href='https://pay.raply.ai/b/7sI14Cd88blP6s0aF2' className='btn btn-primary w-100 py-2'>Start Free Trial</a>
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-1 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Up to 20 tabs</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Priority support</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Enhanced data synchronization (every 15 minutes)</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Advanced notifications</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Additional themes</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Basic file sharing (coming soon)</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Automatic backups and easy restore (coming soon)</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-4">
                    <div className='card shadow-sm rounded-0 h-100' style={{ border: '1px solid var(--color-primary)' }}>
                        <div className='card-body'>
                            <h4 className='mt-2'>
                                Free Plan
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>0$</h2>
                                <span className='text-muted ps-1'>/month</span>
                            </div>
                            <p className='medium pt-2'>Billed monthly</p>


                            <div className='py-4'>
                                <div style={{height: 37.33}} />
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-1 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Up to 5 tabs</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Basic support</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Basic data synchronization (hourly)</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Standard desktop notifications</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Limited themes</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-4">
                    <div className='card border-0 shadow-sm rounded-0 h-100'>
                        <div className='card-body'>
                            <h4 className='mt-2'>
                                Pro Enterprise Plan
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>24$</h2>
                                <span className='text-muted ps-1'>/month</span>
                            </div>
                            <p className='medium pt-2'>Billed monthly</p>

                            <div className='py-4'>
                                <a href='https://pay.raply.ai/b/00g6oWd884XreYw5kJ' className='btn btn-primary w-100 py-2'>Start Free Trial</a>
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-1 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Unlimited tabs</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Premium 24/7 support</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Real-time data synchronization</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Full notifications suite</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Complete theme access</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Advanced file sharing (coming soon)</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Premium backup options with version history (coming soon)</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>Enhanced security with end-to-end encryption and 2FA (coming soon)</span>
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