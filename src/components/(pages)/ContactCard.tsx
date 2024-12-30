import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  address: string;
}

export default function ContactCard({ icon, title, address }: Props) {
  return (
    <div className=" w-auto h-auto lg:h-[230px] bg-white shadow-lg shadow-zinc-400">
      <div className="flex flex-col justify-center text-center border border-gray-100 w-[140px] h-auto lg:w-[270px] lg:h-[230px] py-10 ">
        <div className="flex justify-center">{icon}</div>
        <h2 className="text-[#7C4EE4] text-xl font-bold">{title}</h2>
        <p className="text-[#7A7A7A]">{address}</p>
      </div>
    </div>
  );
}
