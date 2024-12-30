import React from "react";

export default function Contactform() {
  return (
    <div className="w-full lg:w-[768px] h-auto bg-white shadow-lg shadow-zinc-400 p-6">
      <form className="space-y-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-[#4C4C4C]">Name:</label>
            <input
              type="text"
              name="name"
              required
              className="bg-gray-100 py-[13px] pl-[16px] rounded-md w-full h-[54px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-[#4C4C4C]">Email:</label>
            <input
              type="email"
              name="email"
              required
              className="bg-gray-100 py-[13px] pl-[16px] rounded-md w-full h-[54px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-[#4C4C4C]">Phone:</label>
            <input
              type="phonenumber"
              name="phone"
              required
              className="bg-gray-100 py-[13px] pl-[16px] rounded-md w-full h-[54px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-[#4C4C4C]">Subject:</label>
            <input
              type="text"
              name="subject"
              required
              className="bg-gray-100 py-[13px] pl-[16px] rounded-md w-full h-[54px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
          </div>
        </div>

        <div>
          <label className="font-semibold text-[#4C4C4C]">Message:</label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-2 bg-gray-100 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="w-full md:w-80 bg-[#7C4EE4] hover:text-[#7C4EE4] hover:bg-white text-white px-4 py-2 rounded font-bold shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}
