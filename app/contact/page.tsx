"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [showMapOnly, setShowMapOnly] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3983.895094635971!2d101.67364755297056!3d3.122438942040024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSUITE%208-11-4%2C%20MENARA%20MUTIARA%20BANGSAR%2C%20JALAN%20LIKU%20OFF%20JALAN%20RIONG%2C%2059100%20KUALA%20LUMPUR!5e0!3m2!1sen!2suk!4v1732475647576!5m2!1sen!2suk"
          title="map"
          width="100%"
          height="100%"
          style={{
            filter: showMapOnly
              ? "none"
              : "grayscale(1) contrast(1.2) opacity(0.4)",
          }}
          scrolling="no"
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Toggle Button */}
      <button
        className="absolute left-4 top-2 z-20 rounded bg-gray-800 px-4 py-1 text-white shadow-lg hover:bg-gray-700"
        onClick={() => setShowMapOnly(!showMapOnly)}
      >
        {showMapOnly ? "Hide Map" : "Show Map"}
      </button>

      {/* Content Section */}
      {!showMapOnly && (
        <div className="py-12">
          <div className="container relative z-10 mx-auto max-w-5xl bg-white px-6 py-16">
            {/* Heading */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                Contact Us
              </h1>
              <p className="mt-2 text-lg text-gray-700">
                Reach out to our friendly team for assistance.
              </p>
            </div>
            {/* Additional Info */}
            <div className="mx-auto mb-16 grid max-w-4xl gap-12 lg:grid-cols-2">
              {/* Image Section */}
              <div className="overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Contact"
                  className="transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              {/* Address and Contacts */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Our Address
                  </h3>
                  <div className="text-gray-700">
                    <p>United Kingdom</p>
                    <address className="mt-1 not-italic">
                      300 Bath Street, Tay House
                      <br />
                      Glasgow G2 4JR
                    </address>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Our Contacts
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600">Email us</p>
                      <a
                        href="mailto:hello@example.so"
                        className="font-medium hover:underline"
                      >
                        hello@example.so
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-600">Call us</p>
                      <a
                        href="tel:+44222777000"
                        className="font-medium hover:underline"
                      >
                        +44 222 777-000
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Email Us */}
              <div className="flex flex-col items-center text-center">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Mail className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-semibold">Email Us</h2>
                <p className="mb-3 text-gray-600">
                  Our team is ready to assist.
                </p>
                <a
                  href="mailto:abc@example.com"
                  className="font-semibold hover:underline"
                >
                  abc@example.com
                </a>
              </div>
              {/* Visit Us */}
              <div className="flex flex-col items-center text-center">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <MapPin className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-semibold">Visit Us</h2>
                <p className="mb-3 text-gray-600">
                  Drop by our office for a chat.
                </p>
                <address className="font-semibold not-italic hover:underline">
                  1234 Street Name, City Name
                </address>
              </div>
              {/* Call Us */}
              <div className="flex flex-col items-center text-center">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Phone className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-semibold">Call Us</h2>
                <p className="mb-3 text-gray-600">
                  We’re available Mon-Fri, 9am-5pm.
                </p>
                <a
                  href="tel:+1234567890"
                  className="font-semibold hover:underline"
                >
                  +123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
