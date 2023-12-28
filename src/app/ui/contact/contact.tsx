import { SocialIcon } from 'react-social-icons'


const Contact = () => {
  return(
    <div className="max-w-6xl m-auto mt-32" id="contact">
      <div className='bg-gradient-to-r text-transparent from-[#95dff1] to-[#3F0071] bg-clip-text'>
        <h1 className='text-6xl font-extrabold text-center mb-5'>Get In Touch?</h1>
        <div className='flex justify-center'>
          <hr className='w-3/5 md:w-4/5 mb-12 border-none h-0.5 bg-gradient-to-r  from-[#95dff1] to-[#3F0071]'/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-200 max-w-4xl mx-32 pb-16">
        <span className='font-medium mb-4 md:mb-0'>Bagannenour007@gmail.com</span>
        <div>
          <a href="https://github.com/Nourbaganne" target="_blank"><SocialIcon as='span' bgColor='transparent' network="github"/></a>
          <a href="https://www.linkedin.com/in/nour-baganne-19b5b0218/" target="_blank"><SocialIcon as='span' bgColor='transparent' network="linkedin" /></a>
          <a href="https://www.facebook.com/Nour.baganne.007/" target="_blank"><SocialIcon as='span' bgColor='transparent' network="facebook"/></a>
          <a href="https://www.instagram.com/nour_bgn/" target="_blank"><SocialIcon as='span' bgColor='transparent' network="instagram" /></a> 
        </div>
      </div>
    </div>
  )
}

export default Contact;