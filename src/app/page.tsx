import Image from 'next/image'
import LandingPage from './ui/landingPage/landingPage';
import Experiencce from './ui/experience/experience'

export default function Home() {
  return (
    <>
      <main className='z-20 relative top-20'>
        <LandingPage />
        <Experiencce />
      </main>
    </>
  )
}
