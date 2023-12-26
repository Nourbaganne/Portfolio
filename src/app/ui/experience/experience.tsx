import { Experience } from "@/app/lib/definitions";
import Image from "next/image";
import React from "react"
const {experiences} = require("../../lib/placeholder-data") ;


const Experiencce = () => {
    return(
        <div className="max-w-6xl m-auto mt-24 text-gray-200" id="experience">
          {experiences.map((experience: Experience) => (
            <> 
              <div key={experience.id.toString()} className="border-y-[1px] border-slate-500">
                <div className=" px-4 sm:px-12 py-8">

                  <div className="flex items-center sm:justify-between mb-6 gap-8">
                    <h2 className="text-lg sm:text-xl">{experience.role}</h2>
                    <p className=" text-purple-500 text-sm">{experience.startDate} - {experience.endDate}</p>
                  </div>

                  <div className="flex items-center mb-6 gap-1">
                    <span className="text-3xl -mt-2">@</span>
                    <Image src={experience.companyLogo} alt="Company Logo Here" height={200} width={200}/>
                  </div>

                  <div className=" relative sm:pr-36 mb-4 sm:mb-8">
                    <p className="text-base sm:text-2xl leading-snug font-light">{experience.description}</p>
                    <a href={experience.url} target="_blank" className=" hidden sm:flex hover:scale-105 transition duration-300 absolute top-1/2 -translate-y-1/2 right-0 w-14 aspect-square rounded-full  backdrop-blur items-center justify-center border border-slate-300 ">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" color="white" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {experience.skills.map((skill: any, index: any) => (
                      <>
                        <div key={index} className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm border-[1px] border-slate-800 bg-[#4F4F4F]/50 rounded">
                          {skill}
                        </div>
                      </>
                    ))}
                  </div>

                </div>
              </div>
            </>
          ))}
        </div>
    )
}

export default Experiencce;