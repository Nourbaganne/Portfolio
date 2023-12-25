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
        <div className='flex flex-row'>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2 w-32 sm:w-48">Github</button>
          <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-light rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white">
            <span className="py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-lg w-32 sm:w-48">
            Resume
            </span>
          </button>
        </div>
      </div>
      <hr className='mx-24'/>  
    </>
  )
}

export default LandingPage