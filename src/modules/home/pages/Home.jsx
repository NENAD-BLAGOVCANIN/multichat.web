import React from 'react'
import Features from '../components/Features'
import PlatformsView from '../components/PlatformsView';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import Navbar from '../../common/components/navbar/Navbar';
import welcomeViewImage from '../../common/assets/img/welcomeViewImage.png'

function Home() {

  const { t } = useTranslation();

  return (
    <div className='main-content-wrapper'>

      <div id='hero-section-wrapper'>
        <Navbar />
        <HeroSection />
      </div>



      <div className="container pt-5">

        <div className="row pt-3">
          <div className="col-md-5">
            <div className='px-5 mt-5'>
              <h1 className='mb-3'>{t('home.section_2.title')}</h1>
              <p className='opacity-80 py-3 w-100' style={{ maxWidth: 460, textAlign: 'justify' }}>
                {t('home.section_2.subtitle')}
              </p>

            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <img src={welcomeViewImage} style={{ maxWidth: 700 }} className='shadow m-auto rounded w-100 d-block' alt="" />
          </div>
        </div>


      </div>

      <div className='container py-5'>
        <PlatformsView />
      </div>

      <div className="container">

        <Features />

      </div>
    </div >
  )
}

export default Home