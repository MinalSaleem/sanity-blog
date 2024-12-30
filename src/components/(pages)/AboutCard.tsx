import React from "react";

interface Props {
  num: number;
  title: string;
  detail: string;
}

export default function AboutCard({ num, title, detail }: Props) {
  return (
    <div className=" w-auto h-auto lg:w-[400px] lg:h-[408px] bg-white shadow-lg shadow-zinc-400 hover:scale-105 transition-transform ease-out duration-700">
      <div className="flex flex-col justify-start text-start border border-gray-100 w-[140px] h-auto lg:w-[270px] lg:h-[230px] py-10 px-7">
        <h1 className="text-[#7C4EE4] flex justify-start font-bold text-6xl">
          {num}
        </h1>
        <h2 className="text-[#7C4EE4] text-2xl font-bold">{title}</h2>
        <p className="text-[#666666]">{detail}</p>
      </div>
    </div>
  );
}
