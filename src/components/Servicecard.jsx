import React from 'react'

const Servicecard = () => {

const services = [
  [
    "/images/fire-alarm.png",
    "Fire detection and alarm systems",
    "Advanced systems for early detection and rapid alert of fire incidents.",
  ],
  [
    "/images/extinguisher.png",
    "Fire extinguishers and suppression systems",
    "A wide range of extinguishers and suppression technologies for effective fire control.",
  ],
  [
    "/images/hydrant.png",
    "Fire hydrant systems and sprinkler installations",
    "Comprehensive hydrant and sprinkler solutions for consistent fire suppression.",
  ],
  [
    "/images/extinguisher.png",
    "Smoke control & ventilation system",
    "Efficient systems to manage smoke and ensure safe evacuation.",
  ],
  [
    "/images/extinguisher.png",
    "Public address & communication system",
    "Reliable PA systems to coordinate emergency responses effectively.",
  ],
  [
    "/images/extinguisher.png",
    "Emergency lights & signages",
    "Clearly visible exit signs and lighting to guide people to safety.",
  ],
  [
    "/images/extinguisher.png",
    "Fire doors & compartments",
    "Fire-rated doors and barriers to contain fire and protect critical areas.",
  ],
  [
    "/images/extinguisher.png",
    "Fire safety audits and training programs",
    "Regular audits and staff training to ensure preparedness and compliance.",
  ],
  [
    "/images/extinguisher.png",
    "AMC (Annual Maintenance Contracts)",
    "Scheduled maintenance and inspections to keep systems fully operational.",
  ],
];


    return (
        <div className='flex md:flex-row sm:flex-col gap-8 sm:px-10 flex-wrap justify-center'>
        {
            services.map((item,id) => (
                <div key={id} className='gap-5 md:w-[400px] w-[350px] bg-[#f3f3f379] rounded-3xl  border-2  border-[lightgrey]  px-6 py-6 hover:border-red-500 hover:drop-shadow-md hover:shadow-lg md:hover:scale-110 transition-transform duration-1000 ease' >
                <div className='pb-5'>
                    <img src={item[0]} alt="" className='h-16' />
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-medium text-lg'>{item[1]}</h2>
                    <p>{item[2]}</p>
                </div>
    
            </div>
            ))
        }
        </div>

    )
}

export default Servicecard