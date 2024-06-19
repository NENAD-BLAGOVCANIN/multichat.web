import React from 'react'
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';
import multichatExample from '../../assets/img/multichatExample.webp'

function HeroSection() {

    const { t } = useTranslation();

    return (
        <div className='w-100 bg-dark py-5'>
            <div className='container py-5'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='h-100 d-flex flex-column justify-content-center'>
                            <h1 className='headline'>
                                <span>{t('home.hero_section.title')}</span>
                            </h1>
                            <p className='py-3 hero-subtitle'>{t('home.hero_section.subtitle')}</p>

                            <div className='d-flex align-items-center mt-1'>
                                <a href='https://multichat-storage.netlify.app/setup.exe' className='btn btn-primary w-fit rounded-lg py-3 px-4'>
                                    <FontAwesomeIcon className='pe-2' icon={faDownload} />
                                    {t('home.hero_section.download_for_windows')}
                                </a>

                                <span className='px-3 text-white medium'>Windows 10 or higher</span>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-6">
                        <img src={multichatExample} style={{ maxWidth: 700 }} className='m-auto w-100 d-block image-animation' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection