import { Experience } from "@/app/lib/definitions";
import Image from "next/image";
import React from "react"
const {experiences} = require("../../lib/placeholder-data") ;


const Experiencce = () => {
    return(
        <div className="max-w-6xl m-auto mt-24 text-gray-200">
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
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {experience.skills.map((skill: any) => (
                      <>
                        <div className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm border-[1px] border-slate-800 bg-[#4F4F4F]/50 rounded">
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