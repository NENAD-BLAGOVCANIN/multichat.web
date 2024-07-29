import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleHalfStroke, faEdit, faKeyboard, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import { Bell, Chat, CircleHalf, Grid1x2, Infinity, Keyboard, Pencil, Robot, ShieldLock, WindowStack } from 'react-bootstrap-icons';

function Features() {

    const { t } = useTranslation();

    return (

        <div className='px-3 pb-5'>

            <div className="pt-5 pb-3 px-3">
                <h1>{t('home.features.title')}</h1>
            </div>

            <div className="row pb-4" id="features">
                <div className="col-md-4 p-4">
                    <div className='card rounded bg-app py-3 px-4 h-100 border-0 shadow-sm'>
                        <CircleHalf className='me-auto mb-3 h2 text-primary' />
                        <span className="mb-2 bold">
                            {t('home.features.box_1.title')}
                        </span>
                        <p className="opacity-80 medium">
                            {t('home.features.box_1.text')}
                        </p>
                    </div>

                </div>
                <div className="col-md-4 p-4">
                    <div className='card rounded bg-app py-3 px-4 h-100 border-0 shadow-sm'>
                        <Chat className='me-auto mb-3 h2 text-primary' />
                        <span className="mb-2 bold">
                            {t('home.features.box_2.title')}
                        </span>
                        <p className="opacity-80 medium">
                            {t('home.features.box_2.text')}
                        </p>
                    </div>

                </div>
                <div className="col-md-4 p-4">
                    <div className='card rounded bg-app py-3 px-4 h-100 border-0 shadow-sm'>
                        <Robot className='me-auto mb-3 h2 text-primary' />
                        <span className="mb-2 bold">
                            {t('home.features.box_3.title')}
                        </span>
                        <p className="opacity-80 medium">
                            {t('home.features.box_3.text')}
                        </p>
                    </div>

                </div>
                <div className="col-md-4 p-4">
                    <div className='card rounded bg-app py-3 px-4 h-100 border-0 shadow-sm'>
                        <ShieldLock className='me-auto mb-3 h2 text-primary' />
                        <span className="mb-2 bold">
                            {t('home.features.box_4.title')}
                        </span>
                        <p className="opacity-80 medium">
                            {t('home.features.box_4.text')}
                        </p>
                    </div>

                </div>
                <div className="col-md-4 p-4">
                    <div className='card rounded bg-app py-3 px-4 h-100 border-0 shadow-sm'>
                        <WindowStack className='me-auto mb-3 h2 text-primary' />
                        <span className="mb-2 bold">
                            {t('home.features.box_5.title')}
                        </span>
                        <p className="opacity-80 medium">
                            {t('home.features.box_5.text')}
                        </p>
                    </div>

                </div>
                <div className="col-md-4 p-4">
                    <div className='card rounded bg-app py-3 px-4 h-100 border-0 shadow-sm'>
                        <Bell className='me-auto mb-3 h2 text-primary' />
                        <span className="mb-2 bold">
                            {t('home.features.box_6.title')}
                        </span>
                        <p className="opacity-80 medium">
                            {t('home.features.box_6.text')}
                        </p>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Features