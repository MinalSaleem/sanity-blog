import React from "react";
import Contactform from "@/components/(pages)/ContactForm";
import ContactCard from "@/components/(pages)/ContactCard";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] ">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold my-9 text-center sm:text-3xl lg:text-5xl text-[#333333]">
          Get in Touch
        </h1>
        <p className="text-[#666666]">
          Contact us to publish your content and show ads to our website and get
          a good reach.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 justify-items-center">
        <ContactCard
          icon={<RiHomeOfficeLine size={36} />}
          title="Office"
          address="Victoria Street, London, UK"
        />
        <ContactCard
          icon={<MdOutlineMail size={36} />}
          title="Email"
          address="hello@zarrin.com"
        />

        <ContactCard
          icon={<FaPhoneAlt size={36} />}
          title="Phone"
          address="001 2342 3467"
        />
      </section>
      <section className="flex justify-center my-16">
        <Contactform />
      </section>
    </div>
  );
}
