import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { getUserInfo } from '../../common/api/user';

function Pricing() {

    const { t } = useTranslation();
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const fetchedUserInfo = await getUserInfo();
                setUserInfo(fetchedUserInfo);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div className='container py-5 px-5'>

            <div className="row">
                <div className="col-md-4 py-4">
                    <div className='card border-0 shadow-sm rounded-0 h-100'>
                        <div className='card-body'>
                            <h4 className='mt-2'>
                                {t('pricing.standard')}
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>8$</h2>
                                <span className='text-muted ps-1'>/{t('pricing.month')}</span>
                            </div>
                            <p className='medium pt-2'>{t('pricing.billed_monthly')}</p>


                            <div className='py-4'>
                                <form action="https://api.multi-chat.io/payments/create-checkout-session" method='POST'>
                                    <input type="hidden" name="user_id" value={userInfo?.id} />
                                    <input type="hidden" name="subscription_id" value={1} />
                                    <button type='submit' className='btn btn-dark w-100 py-2'>Start Free Trial</button>
                                </form>
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-1 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.up_to_20')}</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.priority_support')}</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.advanced_notifications')}</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.ai_assistant')}</span>
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
                                {t('pricing.free')}
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>0$</h2>
                                <span className='text-muted ps-1'>/{t('pricing.month')}</span>
                            </div>
                            <p className='medium pt-2'>{t('pricing.billed_monthly')}</p>


                            <div className='py-4'>
                                <div style={{ height: 37.33 }} />
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-1 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.up_to_5')}</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.basic_support')}</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.standard_notifications')}</span>
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
                                {t('pricing.pro')}
                            </h4>
                            <div className='d-flex align-items-center pt-2'>
                                <h2 className='bold mb-0'>24$</h2>
                                <span className='text-muted ps-1'>/{t('pricing.month')}</span>
                            </div>
                            <p className='medium pt-2'>{t('pricing.billed_monthly')}</p>

                            <div className='py-4'>
                                <a href='https://pay.raply.ai/b/00g6oWd884XreYw5kJ' className='btn btn-dark w-100 py-2'>Start Free Trial</a>
                            </div>


                            <div className=''>
                                <div className='d-flex flex-column justify-content-between px-1 py-2'>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.unlimited_tabs')}</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.premium_support')}</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.full_notifications')}</span>
                                        <FontAwesomeIcon icon={faCheck} className='text-success' />
                                    </div>
                                    <div className='d-flex align-items-center h-100 justify-content-between py-2'>
                                        <span className='pe-2'>{t('pricing.ai_assistant')}</span>
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