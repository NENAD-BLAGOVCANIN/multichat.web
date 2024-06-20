import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faWindows } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';
import { faBoltLightning, faCheck, faDownload, faX } from '@fortawesome/free-solid-svg-icons'

function Downloads() {

  const { t } = useTranslation();

  return (
    <div className='container py-5 px-5'>

      <h3 className='m-0'>Free</h3>

      <div className="row">
        <div className="col-md-6 py-4">
          <div className='card border-0 shadow-sm rounded-0'>
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

              <hr />

              <div className='px-5'>
                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Unlimited Tabs</span>
                    <FontAwesomeIcon icon={faX} className='text-danger' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Unlimited Sessions</span>
                    <FontAwesomeIcon icon={faX} className='text-danger' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Automatic Updates</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>24/7 Customer Support</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>

                </div>
              </div>



            </div>
          </div>
        </div>
        <div className="col-md-6 py-4">
          <div className='card border-0 shadow-sm rounded-0'>
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

              <hr />

              <div className='px-5'>
                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Unlimited Tabs</span>
                    <FontAwesomeIcon icon={faX} className='text-danger' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Unlimited Sessions</span>
                    <FontAwesomeIcon icon={faX} className='text-danger' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Automatic Updates</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>24/7 Customer Support</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <h3 className='mt-3 m-0'>Premium <FontAwesomeIcon icon={faBoltLightning} className='text-warning' /> </h3>

      <div className="row">
        <div className="col-md-6 py-4">
          <div className='card border-0 shadow-sm rounded-0'>
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

              <hr />

              <div className='px-5'>
                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Unlimited Tabs</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Unlimited Sessions</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Automatic Updates</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>24/7 Customer Support</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
        <div className="col-md-6 py-4">
          <div className='card border-0 shadow-sm rounded-0'>
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

              <hr />

              <div className='px-5'>
                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Unlimited Tabs</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Unlimited Sessions</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>Automatic Updates</span>
                    <FontAwesomeIcon icon={faCheck} className='text-success' />
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span>24/7 Customer Support</span>
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

export default Downloads