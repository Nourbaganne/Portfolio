import React from 'react'

function LandingPage() {
  return (
    <>
      <div className=' max-w-6xl m-auto min-h-screen sm:min-h-[900px] flex flex-col items-center justify-center gap-8'>
        <h1 className="text-3xl md:text-7xl text-center font-extrabold bg-gradient-to-r text-transparent from-[#95dff1] to-[#3F0071] bg-clip-text">
          Software engineer &
          <br className='hidden sm:block'/>
          Full stack JavaScript Developer
        </h1>
        <div className='text-[#B5B4B5] text-sm sm:text-base font-light max-w-[90%] sm:max-w-2xl text-center'>
          <p><span className='font-extrabold'>Greetings!</span> I&apos;m Nour Baganne, an enthusiastic <span className='font-bold'>software engineer</span> and <span className='font-bold'>QA Tester</span> deeply immersed in the world of technology.</p> 
          <br />

          <p>My expertise lies in crafting robust and efficient solutions using a <span className='font-bold'>full-stack JavaScript</span> approach, with a particular fondness for <span className='font-bold'>React</span>, <span className='font-bold'>Node.js</span>, and <span className='font-bold'>Next.js</span>. </p>
          <br />

          <p>Currently thriving in my role as a <span className='font-bold'>full-stack software developer</span> at <span className='font-bold'>Retain Health</span>, I consider JavaScript not just a language but my creative playground.</p>
          <br />
          <p>
            Driven by a passion for innovation, I specialize in developing <span className='font-bold'>high-performance applications</span> that push the boundaries of what is possible. I am always eager to explore new opportunities and tackle fresh challenges in the dynamic realm of software engineering. <a href="#" className='underline decoration-2 font-bold'>Let&apos;s connect</a> and bring your ideas to life through the power of code!
            </p>
        </div>
        <div className=' flex items-center justify-center gap-6'>
          <a href="https://github.com/Nourbaganne" target='_blank'>
            <button type="button" className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary h-10 px-4 bg-gradient-to-r text-black from-purple-500 via-purple-700 to-purple-900 w-32 sm:w-48 font-light py-3 sm:py-6 rounded text-base sm:text-lg hover:scale-[1.05] transition duration-500 hover:bg-white">Github</button>
          </a>

          <a href="/cv-nour-baganne.pdf" download>
            <button className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 bg-transparent text-white w-32 sm:w-48 font-light py-3 sm:py-6 rounded text-base sm:text-lg hover:border-slate-300 transition duration-500 border-[1px] border-slate-600">Resume</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default LandingPage