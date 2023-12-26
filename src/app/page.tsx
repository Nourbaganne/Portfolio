'use client'

import Image from 'next/image'
import LandingPage from './ui/landingPage/landingPage';
import Experiencce from './ui/experience/experience'
import Timeline from './ui/timeline/timeline';


export default function Home() {
  return (
    <>
      <main className='z-20 relative top-20'>
        <LandingPage />
        <Experiencce />
        <Timeline />
        
      </main>
    </>
  )
}
