import React from "react";
import Image from "next/image";
import AboutCard from "@/components/(pages)/AboutCard";
import { about } from "../../../../data/main";
export default function About() {
  return (
    <div>
      <section className="text-center py-12 sm:px-3">
        <p className="text-[#666666] font-bold">About Us</p>
        <h1 className="text-5xl font-bold my-9 text-center sm:text-3xl lg:text-5xl text-[#333333]">
          Creative Blog Writting and publishing site
        </h1>
        <p className="text-[#666666]">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          <br /> collaborative thinking to further the overall value
          proposition. Organically grow the holistic world view of disruptive
          innovation via workplace <br /> diversity and empowerment.
        </p>
      </section>

      <div className="flex flex-col md:flex-row justify-center mx-8 md:mx-28 my-16 md:my-24">
        <Image
          src="/images/about.png"
          alt="AI"
          width={500}
          height={500}
          className="rounded-xl object-contain w-full md:w-[1232px] h-[200px] md:h-[576px]"
        />
      </div>

      <section className="text-start py-12 sm:px-3 px-2">
        <p className="text-[#666666] font-bold">How We Work</p>
        <h1 className="font-bold my-9 text-start text-4xl lg:text-5xl text-[#333333]">
          I will show you how our team works
        </h1>
      </section>

      <section className="flex flex-col lg:flex-row mx-9 lg:space-x-8 space-y-8">
        <AboutCard
          num={about[0].num}
          title={about[0].title}
          detail={about[0].detail}
        />
        <AboutCard
          num={about[1].num}
          title={about[1].title}
          detail={about[1].detail}
        />
      </section>
    </div>
  );
}
