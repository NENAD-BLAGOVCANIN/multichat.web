import React from 'react'
import Features from '../components/home/Features'
import PlatformsView from '../components/home/PlatformsView'
import multichatExample from '../assets/img/multichatExample.webp'
import messagingExample from '../assets/img/messagingScreensExample.png'
import logo from '../assets/img/logo.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <div className='blur-background-wrapper'>
      <div className='main-content-wrapper'>

        <h1 className='text-center bold pt-5 align-items-center d-flex justify-content-center' style={{ fontSize: '35pt' }}>
          <img src={logo} className='img-fluid' style={{ height: 65 }} alt="" />
          <span class="animation-target ps-3" data-content="Welcome to Multichat"></span>
        </h1>
        <p className='text-center opacity-80'>Access all of your messages from one platform.</p>

        <button className='btn btn-primary rounded-lg py-3 px-3 m-auto d-block mt-5'>
          Download for Windows
          <FontAwesomeIcon className='ps-2' icon={faArrowRight} />
        </button>

        <div className="container pt-5">

          <img src={multichatExample} style={{ maxWidth: 730 }} class='m-auto w-100 d-block image-animation' alt="" />

          <div className='py-5 text-center mt-5'>
            <h1 className='bold mb-3'>Bringing Your Conversations Together
            </h1>
            <p className='opacity-80 text-center m-auto d-block' style={{ maxWidth: 1000 }}>
              Welcome to MultiChat, your all-in-one messaging solution designed to streamline your digital communication experience. With MultiChat, you can conveniently manage multiple messaging services in one centralized location. Say goodbye to switching between apps and hello to effortless multitasking.
            </p>

            <img src={messagingExample} style={{ maxWidth: 800 }} className='w-100' alt="" />

          </div>

          <div className='py-5'>
            <PlatformsView />
          </div>


          <div className="py-5 mt-5">
            <h1 className='text-center bold'>Features</h1>
          </div>

          <Features />

        </div>
      </div>
    </div>
  )
}

export default Home