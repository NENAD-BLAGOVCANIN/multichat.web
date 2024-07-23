import React from 'react'
import whatsAppLogo from '../../common/assets/img/WhatsAppLogo.svg'
import telegramLogo from '../../common/assets/img/TelegramLogo.svg'
import skypeLogo from '../../common/assets/img/SkypeLogo.svg'
import weChatLogo from '../../common/assets/img/WeChatLogo.svg'
import discordLogo from '../../common/assets/img/DiscordLogo.svg'
import messengerLogo from '../../common/assets/img/MessengerLogo.svg'
import { useTranslation } from 'react-i18next';
import platformsViewImg from '../../common/assets/img/platformsViewImageLight.png'

function PlatformsView() {

    const { t } = useTranslation();

    return (
        <div className='px-5 mt-5 pt-5'>

            <div className="row pb-5">

                <div className="col-md-5">
                    <div className='pe-3' style={{ maxWidth: 620 }}>
                        <div className="pb-3">
                            <h1>{t('home.platforms.title')}</h1>
                        </div>

                        <p className='text-muted'>
                            {t('home.platforms.text')}
                        </p>


                        <div className='d-flex w-100 align-items-center'>
                            <div className='py-4 pe-4'>
                                <img src={whatsAppLogo} className='img-fluid' style={{ width: 55 }} alt="" />
                            </div>
                            <div className='p-4'>
                                <img src={weChatLogo} className='img-fluid' style={{ width: 65 }} alt="" />
                            </div>
                            <div className='p-4'>
                                <img src={telegramLogo} className='img-fluid' style={{ width: 55 }} alt="" />
                            </div>

                        </div>
                        <div className='d-flex w-100 align-items-center pt-3 pb-5'>
                            <div className='py-4 pe-4'>
                                <img src={skypeLogo} className='img-fluid' style={{ width: 55 }} alt="" />
                            </div>
                            <div className='p-4'>
                                <img src={discordLogo} className='img-fluid' style={{ width: 65 }} alt="" />
                            </div>
                            <div className='p-4'>
                                <img src={messengerLogo} className='img-fluid' style={{ width: 55 }} alt="" />
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-md-7 d-flex align-items-center justify-content-end">
                    <img src={platformsViewImg} style={{ maxWidth: 700 }} className='shadow m-auto rounded w-100 d-block' alt="" />
                </div>



            </div>


        </div>
    )
}

export default PlatformsView