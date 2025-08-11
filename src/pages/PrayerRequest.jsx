import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa6";

const PrayerRequest = ()=> {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center px-4">
      <div className="bg-white shadow-lg border-1 rounded-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">


        {/* Right Section */}
        <div className="md:w-full p-8">
          <h2 className="text-3xl mb-[40px] font-bold text-gray-800 ">
            Prayer Request
          </h2>

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

export default PrayerRequest;
