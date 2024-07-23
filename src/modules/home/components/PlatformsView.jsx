import React from 'react'
import whatsAppLogo from '../../common/assets/img/WhatsAppLogo.svg'
import telegramLogo from '../../common/assets/img/TelegramLogo.svg'
import skypeLogo from '../../common/assets/img/SkypeLogo.svg'
import weChatLogo from '../../common/assets/img/WeChatLogo.svg'
import discordLogo from '../../common/assets/img/DiscordLogo.svg'
import messengerLogo from '../../common/assets/img/MessengerLogo.svg'
import { useTranslation } from 'react-i18next';

function PlatformsView() {

    const { t } = useTranslation();

    return (
        <div className='px-5 pt-5' style={{ maxWidth: 620 }}>

            <div className="row">
                <div className="pt-5 pb-3">
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
                <div className='d-flex w-100 align-items-center pt-3 mb-5 pb-5'>
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
    )
}

export default PlatformsView