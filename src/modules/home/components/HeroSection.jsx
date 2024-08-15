import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';
import multichatExample from '../../common/assets/img/multichatExample.webp'
import { Download } from 'react-bootstrap-icons';

function HeroSection() {

    const { t } = useTranslation();

    return (
        <div className='w-100 py-5'>
            <div className='container py-5 px-5'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='h-100 d-flex flex-column justify-content-center'>
                            <h1 className='headline'>
                                <span>{t('home.hero_section.title')}</span>
                            </h1>
                            <p className='py-3 hero-subtitle'>{t('home.hero_section.subtitle')}</p>

                            <div className='d-flex align-items-center mt-1'>
                                <a href='https://multichat-storage.netlify.app/Multichat-Setup-0.3.8.exe' className='btn btn-primary w-fit rounded-lg py-3 px-4'>
                                    <Download className='me-2' />
                                    {t('home.hero_section.download_for_windows')}
                                </a>

                                <span className='px-3 text-white medium'>
                                    {t('home.hero_section.windows_10_or_higher')}
                                </span>
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