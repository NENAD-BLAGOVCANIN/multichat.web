import React from 'react'
import Features from '../components/Features'
import PlatformsView from '../components/PlatformsView';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import Navbar from '../../common/components/navbar/Navbar';

function Home() {

  const { t } = useTranslation();

  return (
    <div className='main-content-wrapper'>

      <div id='hero-section-wrapper'>
        <Navbar />
        <HeroSection />
      </div>



      <div className="container pt-5">

        <div className="row">
          <div className="col-md-6">
            <div className='pt-5 px-5 mt-5'>
              <h1 className='mb-3'>{t('home.section_2.title')}</h1>
              <p className='opacity-80 py-3 w-100' style={{ maxWidth: 800, textAlign: 'justify' }}>
                {t('home.section_2.subtitle')}
              </p>

            </div>
          </div>
          <div className="col-md-6">

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