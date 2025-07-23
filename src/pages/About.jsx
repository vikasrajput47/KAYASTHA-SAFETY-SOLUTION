import React from "react";

function About() {
  return (
    <section
      id="About"
      className="w-full bg-gray-100 py-20 px-6 md:px-10 flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10"
    >
      {/* Image Section */}
      <div className="hidden md:flex md:w-[40%] justify-center items-center">
        <img
          src="/images/about.jpg"
          alt="About Kayastha Safety Solution"
          className="h-[80%] max-h-[400px] rounded-3xl object-cover shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-[50%] flex flex-col justify-center text-gray-800">
        <h2 className="text-red-700 font-bold text-4xl mb-2">WHO WE ARE</h2>
        <h3 className="text-xl font-semibold mb-4">Kayastha Safety Solution</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed">
          <li>
            Kayastha Safety Solution is a trusted MSME provider of comprehensive
            fire safety solutions, committed to protecting lives, property, and
            the environment. Established in 2025, we've become a reliable name
            in the fire protection industry, offering expert services that meet
            the highest standards of safety and compliance.
          </li>
          <li>
            Our approach is centered on prevention, preparedness, and
            protection. We serve residential buildings, educational
            institutions, commercial complexes, and industrial facilities with
            customized fire safety solutions designed to minimize risk.
          </li>
          <li>
            Safety is not just our job—it's our mission. We're committed to
            continuous improvement, customer satisfaction, and maintaining the
            highest ethical and operational standards. Let us help you create a
            safer tomorrow—today.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
