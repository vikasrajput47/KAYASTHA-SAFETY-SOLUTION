import React from "react";

function Contact() {
  return (
    <section className="py-20 bg-red-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-8">
          Have questions or need a quote? Contact us today!
        </p>
        <a
          href="mailto:info@firesolution.com"
          className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
        >
          Email Us
        </a>
      </div>
    </section>
  );
}

export default Contact;
