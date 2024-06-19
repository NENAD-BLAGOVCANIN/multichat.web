import React from 'react'
import Features from '../../components/home/Features'
import PlatformsView from '../../components/home/PlatformsView'
import messagingExample from '../../assets/img/messagingScreensExample.png'
import { useTranslation } from 'react-i18next';
import HeroSection from './HeroSection'

function Home() {

  const { t } = useTranslation();

  return (
    <div className='main-content-wrapper'>

      <HeroSection />

      <div className="container pt-5">

        <div className='py-5 text-center mt-5'>
          <h1 className='bold mb-3'>{t('home.section_2.title')}</h1>
          <p className='opacity-80 text-center m-auto d-block py-3' style={{ maxWidth: 1000 }}>
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