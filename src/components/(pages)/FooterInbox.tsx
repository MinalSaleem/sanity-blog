import React from "react";
import { Button } from "@/components/ui/button";

export default function FooterInbox() {
  return (
    <div className="bg-[#7C4EE4] text-white flex flex-col items-center py-24 space-y-5">
      <h2 className="font-semibold text-4xl text-center">Get our stories delivered From
        <br /> us to your inbox weekly.</h2>
      <span className="flex flex-row space-x-2" >
      <input placeholder="Your Email" className="px-3 rounded-md"/>
    
     <Button variant="default" className="bg-transparent border-white border">Get Started</Button>
     </span>
     <p className="text-center">Get a response tomorrow if you submit by 9pm today. If we received after
     <br /> 9pm will get a reponse the following day.</p>
    </div>
  );
}