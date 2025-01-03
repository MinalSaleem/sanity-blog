import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { main } from "../../../../data/main";

export default function Main() {
  return (
    <>
      <div className="bg-[#7C4EE4] text-white flex flex-col-reverse md:flex-row py-16 md:py-24">
        <div className="w-full md:w-1/2 px-8 md:px-24 space-y-6 md:space-y-11">
          <h4 className="text-lg md:text-2xl">{main[0].h4}</h4>
          <h2 className="text-2xl md:text-4xl font-bold">{main[0].h2}</h2>
          <p className="text-sm md:text-base">{main[0].p}</p>
          <Button variant="outline" className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C4EE4] text-[#7C4EE4] hover:text-white hover:bg-[#7C4EE4] hover:border hover:border-white">
            <Link href="/blog">{main[0].button}</Link>
          </Button>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            src={main[0].image}
            alt="AI"
            width={200}
            height={200}
            className="rounded-xl object-contain w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row justify-center mx-8 md:mx-28 my-16 md:my-24">
        <div className="w-full md:w-3/4">
          <Image
            src={main[1].image}
            alt="AI"
            width={500}
            height={500}
            className="rounded-xl object-contain w-full md:w-[1232px] h-[200px] md:h-[576px]"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-auto bg-white/90 p-4 md:p-6 rounded-b-lg shadow-lg w-full md:w-[500px] hover:scale-105 transition-transform ease-out duration-700">
          <h4 className="text-xs md:text-sm text-gray-500 uppercase mb-1 md:mb-2">
            {main[1].h4}
          </h4>
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">
            {main[1].h2}
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4">
            {main[1].p}
          </p>
          <Button variant="outline" className="text-[#7C4EE4] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C4EE4] hover:bg-[#7C4EE4] hover:text-white">
            <Link href="/blog">{main[1].button}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
