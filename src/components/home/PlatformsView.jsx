import React from 'react'
import whatsAppLogo from '../../assets/img/WhatsAppLogo.svg'
import telegramLogo from '../../assets/img/TelegramLogo.svg'
import skypeLogo from '../../assets/img/SkypeLogo.svg'
import weChatLogo from '../../assets/img/WeChatLogo.svg'
import discordLogo from '../../assets/img/DiscordLogo.svg'
import messengerLogo from '../../assets/img/MessengerLogo.svg'
import { useTranslation } from 'react-i18next';

function PlatformsView() {

    const { t } = useTranslation();

    return (
        <div className='bg-white py-5'>
            <div className='py-5 mt-5 mb-3'>
                <p className='opacity-80 text-center h5 fw-400'>
                    {t('home.platforms.title')}
                </p>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <div className='p-4'>
                    <img src={whatsAppLogo} className='img-fluid' style={{ width: 125 }} alt="" />
                </div>
                <div className='p-4'>
                    <img src={weChatLogo} className='img-fluid' style={{ width: 135 }} alt="" />
                </div>
                <div className='p-4'>
                    <img src={telegramLogo} className='img-fluid' style={{ width: 125 }} alt="" />
                </div>
                
            </div>
            <div className='d-flex justify-content-center align-items-center pt-3 mb-5 pb-5'>
                <div className='p-4'>
                    <img src={skypeLogo} className='img-fluid' style={{ width: 125 }} alt="" />
                </div>
                <div className='p-4'>
                    <img src={discordLogo} className='img-fluid' style={{ width: 135 }} alt="" />
                </div>
                <div className='p-4'>
                    <img src={messengerLogo} className='img-fluid' style={{ width: 125 }} alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default PlatformsView