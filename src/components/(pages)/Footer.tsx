import Link from "next/link";
import React from "react";
import FooterInbox from "./FooterInbox";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" w-full   mt-12 divide-y-2 divide-gray-300">
      <FooterInbox />

      <div className="flex flex-col items-center py-16">
        <h2 className="text-[#7C4EE4] font-bold text-4xl ">M.A</h2>
        <span className="space-x-7 py-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </span>
        <span className="flex flex-row space-x-7 py-4 text-[#7C4EE4]">
          <p>
            <FaInstagram size={24} color="" />
          </p>
          <p>
            <FaFacebook size={24} color="" />
          </p>
          <Link
            href="https://www.linkedin.com/in/minalsaleem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/MinalSaleem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </Link>
        </span>
      </div>
      <div className="text-center items-center py-7 text-[#150E06]">
        <p>Copyright Ideapeel Inc © 2024. All Right Reserved</p>
      </div>
    </footer>
  );
}
