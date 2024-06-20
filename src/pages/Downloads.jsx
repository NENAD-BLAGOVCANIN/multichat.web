import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faWindows } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Downloads() {

  const { t } = useTranslation();

  return (
    <div className='container py-5 px-5'>

      <h2>{t('downloads.downloads')}</h2>

      <div className="row">
        <div className="col-md-6 py-4">
          <div className='card border-0 shadow-sm rounded-lg'>
            <div className='card-body'>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <h4 className='mt-3'>
                  <FontAwesomeIcon icon={faWindows} className='pe-2' />
                  Windows
                </h4>
              </div>

              <div className='h-100 d-flex justify-content-center align-items-center pt-3'>
                <div className='p-3'>
                  <a href='https://multichat-storage.netlify.app/setup.exe' className='btn btn-primary w-fit rounded-lg py-3 px-4'>
                    <FontAwesomeIcon className='pe-2' icon={faDownload} />
                    {t('home.hero_section.download_for_windows')}
                  </a>
                </div>
                <div className='p-3'>
                  <a className='text-decoration-none color-text small'>{t('downloads.system_reqs')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 py-4">
          <div className='card border-0 shadow-sm rounded-lg'>
            <div className='card-body'>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <h4 className='mt-3'>
                  <FontAwesomeIcon icon={faApple} className='pe-2' />
                  MacOS
                </h4>
              </div>

              <div className='h-100 d-flex justify-content-center align-items-center pt-3'>
                <div className='p-3'>
                  <a href='https://multichat-storage.netlify.app/setup.exe' className='btn btn-primary w-fit rounded-lg py-3 px-4'>
                    <FontAwesomeIcon className='pe-2' icon={faDownload} />
                    {t('home.hero_section.download_for_windows')}
                  </a>
                </div>
                <div className='p-3'>
                  <a className='text-decoration-none color-text small'>{t('downloads.system_reqs')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Downloads