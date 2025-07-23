import React from "react";

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
    "/images/hydrant.jpg",
    "Fire hydrant systems and sprinkler installations",
    "Comprehensive hydrant and sprinkler solutions for consistent fire suppression.",
  ],
  [
    "/images/exhaust.png",
    "Smoke control & ventilation system",
    "Efficient systems to manage smoke and ensure safe evacuation.",
  ],
  [
    "/images/communication.png",
    "Public address & communication system",
    "Reliable PA systems to coordinate emergency responses effectively.",
  ],
  [
    "/images/fire-exit.png",
    "Emergency lights & signages",
    "Clearly visible exit signs and lighting to guide people to safety.",
  ],
  // [
  //   "/images/fire-door.png",
  //   "Fire doors & compartments",
  //   "Fire-rated doors and barriers to contain fire and protect critical areas.",
  // ],
  [
    "/images/training.png",
    "Fire safety audits and training programs",
    "Regular audits and staff training to ensure preparedness and compliance.",
  ],
  [
    "/images/contract.png",
    "AMC (Annual Maintenance Contracts)",
    "Scheduled maintenance and inspections to keep systems fully operational.",
  ],
];

function Services() {
  // Split services into pairs (2 per row)
  const servicePairs = [];
  for (let i = 0; i < services.length; i += 2) {
    servicePairs.push(services.slice(i, i + 2));
  }

  return (
    <section
      id="Service"
      className="py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fire-background.jpg')" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-700">
          Our Services
        </h2>

        <div className="space-y-16">
          {servicePairs.map((pair, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row md:justify-between gap-10"
            >
              {pair.map(([image, title, desc], indexInPair) => {
                const globalIndex = rowIndex * 2 + indexInPair;
                const reverse = globalIndex % 2 !== 0;
                return (
                  <div
                    key={globalIndex}
                    className={`flex flex-col md:flex-row items-center ${
                      reverse ? "md:flex-row-reverse" : "md:flex-row"
                    } gap-8 w-full`}
                  >
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={image}
                        alt={title}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="rounded-xl hover:shadow-lg   border px-6 py-4 max-w-xl w-full bg-white bg-opacity-80 h-40">
                      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                      <p className="text-sm">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
