import React from "react";

const ContactUs = () => {
  return (
    <section  id="Contact" className="w-full bg-green-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>

          <div className="space-y-6 text-lg text-gray-800 font-medium">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <span>+91 8825114085</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl">✉️</span>
              <span>kayasthasafetysolution@gmail.com</span>
            </div>

            {/* <div className="flex items-center gap-4">
              <span className="text-2xl">🌐</span>
              <span>www.kayasthasafetysolution.in</span>
            </div> */}

            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <span>
                B-258, Mandawar, Gurugram
                <br />
                Haryana - 122003
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Logo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/logo.png" // Replace this path as needed
            alt="Kayastha Safety Solution Logo"
            className="w-[280px] h-[280px] object-contain border border-gray-300 rounded-full p-4 bg-white shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
