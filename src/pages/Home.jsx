import React from 'react'
import Features from '../components/home/Features'
import PlatformsView from '../components/home/PlatformsView'
import multichatExample from '../assets/img/multichatExample.webp'
import messagingExample from '../assets/img/messagingScreensExample.png'
import logo from '../assets/img/logo.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';

function Home() {

  const { t } = useTranslation();

  return (
    <div className='main-content-wrapper'>

      <h1 className='text-center bold pt-5 mt-5 align-items-center d-flex justify-content-center' style={{ fontSize: '45pt' }}>
        <img src={logo} className='img-fluid' style={{ height: 65 }} alt="" />
        <span class="animation-target ps-3" data-content={t('home.hero_section.title')}></span>
      </h1>
      <p className='text-center opacity-80'>{t('home.hero_section.subtitle')}</p>

      <a href='https://multichat-storage.netlify.app/setup.exe' className='btn btn-primary w-fit rounded-lg py-3 px-3 m-auto d-block mt-5'>
        {t('home.hero_section.download_for_windows')}
        <FontAwesomeIcon className='ps-2' icon={faArrowRight} />
      </a>

      <div className="container pt-5">

        <img src={multichatExample} style={{ maxWidth: 850 }} class='m-auto w-100 d-block image-animation' alt="" />

        <div className='py-5 text-center mt-5'>
          <h1 className='bold mb-3'>{t('home.section_2.title')}</h1>
          <p className='opacity-80 text-center m-auto d-block' style={{ maxWidth: 1000 }}>
            {t('home.section_2.subtitle')}
          </p>

          <img src={messagingExample} style={{ maxWidth: 800 }} className='w-100' alt="" />

        </div>

        <div className='py-5'>
          <PlatformsView />
        </div>


        <div className="py-5 mt-5">
          <h1 className='text-center bold'>{t('home.features.title')}</h1>
        </div>

        <Features />

      </div>
    </div>
  )
}

export default Home