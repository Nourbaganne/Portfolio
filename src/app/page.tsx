'use client'

import LandingPage from './ui/landingPage/landingPage';
import Experiencce from './ui/experience/experience'
import Education from './ui/education/education';
import Contact from './ui/contact/contact';


export default function Home() {
  return (
    <>
      <main className='z-20 relative top-20'>
        <LandingPage />
        <Experiencce />
        <Education />
        <Contact />
      </main>
    </>
  )
}
