import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa6";

export default function ContactForm() {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center px-4">
      <div className="bg-white shadow-lg border-1 rounded-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Section */}
        <div
          className="md:w-1/3 p-8 text-white"
          style={{ backgroundColor: "#FF9863" }}
        >
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <p className="text-sm mb-6">
            We’ll share uplifting messages and build strong connections to help grow your faith and strengthen our church community.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <FaPhone/> <span>+8801777877688</span>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone/> <span>+98887735366</span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope/> <span>support@uragency.com</span>
            </p>
            <p className="flex items-center gap-2">
              <FaLocationArrow/> <span>Agric Ojo, Lagos State Nigeria</span>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            We’d love to connect with you. Whether you have questions about our services, want to learn more about our ministries, or wish to get involved, our team is here to help.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Tragely"
                className="w-full border-b border-gray-300 focus:border-[#FF9863] outline-none py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="hello@nurency.com"
                className="w-full border-b border-gray-300 focus:border-[#FF9863] outline-none py-2"
              />
            </div>

            {/* Subject */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Your Subject
              </label>
              <input
                type="text"
                placeholder="I want to hire you quickly"
                className="w-full border-b border-gray-300 focus:border-[#FF9863] outline-none py-2"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Write here your message"
                className="w-full border-b border-gray-300 focus:border-[#FF9863] outline-none py-2 resize-none"
                rows="4"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                style={{ backgroundColor: "#FF9863" }}
                className="text-white font-semibold px-6 py-2 rounded hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
