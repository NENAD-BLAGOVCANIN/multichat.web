import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faWindows } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';
import { faBoltLightning, faCheck, faDownload, faX } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as WindowsIcon } from '../assets/img/svg/WindowsIcon.svg';
import { ReactComponent as AppleIcon } from '../assets/img/svg/AppleIcon.svg';

function Downloads() {

  const { t } = useTranslation();

  return (
    <div className='container py-5 px-5'>

      <div className="row">
        <div className="col-md-6 py-4">
          <div className='card border-0 shadow-sm rounded-0'>
            <div className='card-body'>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='mt-3'>
                  <WindowsIcon className='platform-icon' />
                </div>
              </div>

              <div className='h-100 text-center pt-4'>
                <div className='p-3'>
                  <a href='https://multichat-storage.netlify.app/setup.exe' className='btn btn-dark w-fit rounded py-3 px-4'>
                    <FontAwesomeIcon className='pe-2' icon={faDownload} />
                    {t('home.hero_section.download_for_windows')}
                  </a>
                </div>
                <a className='text-decoration-none color-text small'>Win 10 or higher</a>
              </div>


              <div className='px-5 py-4'>
                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span className='medium'>OS</span>
                    <span className='bold medium'>Windows 10+</span>
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span className='medium'>Disk space</span>
                    <span className='bold medium'>2MB</span>
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span className='medium'>RAM for comfortable experience</span>
                    <span className='bold medium'>4-8GB</span>
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
                <div className='mt-3'>
                  <AppleIcon className='platform-icon' />
                </div>
              </div>

              <div className='h-100 text-center pt-4'>
                <div className='p-3'>
                  <a href='https://multichat-storage.netlify.app/setup.exe' className='btn btn-dark w-fit rounded py-3 px-4'>
                    <FontAwesomeIcon className='pe-2' icon={faDownload} />
                    {t('home.hero_section.download_for_mac')}
                  </a>
                </div>
                <a className='text-decoration-none color-text small'>MacOS 10 or higher</a>
              </div>


              <div className='px-5 py-4'>
                <div className='d-flex flex-column justify-content-between px-5 py-2'>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span className='medium'>OS</span>
                    <span className='bold medium'>MacOS 10+</span>
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span className='medium'>Disk space</span>
                    <span className='bold medium'>2MB</span>
                  </div>
                  <div className='d-flex align-items-center h-100 justify-content-between py-1'>
                    <span className='medium'>RAM for comfortable experience</span>
                    <span className='bold medium'>4-8GB</span>
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