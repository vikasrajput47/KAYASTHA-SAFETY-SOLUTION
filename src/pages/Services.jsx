import React from "react";

function Services() {
  const services = [
    {
      title: "Fire Extinguishers",
      desc: "Installation and maintenance of all types of fire extinguishers.",
    },
    {
      title: "Fire Alarm Systems",
      desc: "Early warning systems to save lives and reduce damage.",
    },
    {
      title: "Sprinkler Systems",
      desc: "Automatic water spray systems for fire suppression.",
    },
    {
      title: "Emergency Exit Plans",
      desc: "Strategic evacuation planning for businesses and homes.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
