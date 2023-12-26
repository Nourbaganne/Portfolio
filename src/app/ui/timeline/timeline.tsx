import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <>
      <div className="max-w-6xl m-auto mt-24 text-gray-200" id="education">
      <h1 className='text-5xl font-medium text-center mb-20'>Education</h1>
      <VerticalTimeline>
          <VerticalTimelineElement
            visible ={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid  #8CABFF' }}
            date="2022 - present"
            iconStyle={{ background: '#8CABFF', color: '#fff' }}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>}
          >
            <h1 className="vertical-timeline-element-title text-4xl">Software Engineering</h1>
            <h4 className="vertical-timeline-element-subtitle text-lg">EPI Digital School</h4>
            <p className='text-md'>
              <span className='font-extralight'>
              Currently, I&apos;m a software engineering student where I get more in depth lessons about algorithms, mathematics, software architecture and more.
              </span>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible ={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid  #8CABFF' }}
            date="2022 - present"
            iconStyle={{ background: '#8CABFF', color: '#fff' }}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>}
          >
            <h1 className="vertical-timeline-element-title text-4xl">Software Engineering</h1>
            <h4 className="vertical-timeline-element-subtitle text-lg">EPI Digital School</h4>
            <p className='text-md'>
              <span className='font-extralight'>
              Currently, I&apos;m a software engineering student where I get more in depth lessons about algorithms, mathematics, software architecture and more.
              </span>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible ={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid  #8CABFF' }}
            date="2022 - present"
            iconStyle={{ background: '#8CABFF', color: '#fff' }}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>}
          >
            <h1 className="vertical-timeline-element-title text-4xl">Software Engineering</h1>
            <h4 className="vertical-timeline-element-subtitle text-lg">EPI Digital School</h4>
            <p className='text-md'>
              <span className='font-extralight'>
              Currently, I&apos;m a software engineering student where I get more in depth lessons about algorithms, mathematics, software architecture and more.
              </span>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible ={true}
            iconStyle={{ background: '#512B81', color: '#fff' }}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          }
          >
          </VerticalTimelineElement>

          
        </VerticalTimeline>
      </div>

    </>
  );
}

export default Timeline;