import React from "react";

function ContactForm() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-red-50">
      <div className="max-w-4xl mx-auto text-center break-words">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-700">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg mb-8 text-gray-700">
          We'd love to hear from you! Reach out to us through the details below.
        </p>
        <div className="space-y-6 text-base sm:text-lg break-words">
          <p>
            📞 <span className="font-semibold">+91 9013807874</span>
          </p>
          <p>
            📧{" "}
            <span className="font-semibold">
              kmpowerandfiresolution@gmail.com
            </span>
          </p>
          <p>
            📍{" "}
            <span className="font-semibold">
              Registered Office: B2 Street-01, Shyam Kunj, Near Bharat Chowk,
              Gurugram, Haryana (IN)-122102
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
