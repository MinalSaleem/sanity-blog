import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <header className="flex justify-between py-4 px-8 mx-auto">
      {/* Logo */}
      <div>
        <h2 className="text-[#7C4EE4] font-bold text-4xl">M.A</h2>
      </div>
      {/* Nav buttons */}
      <ul className="hidden md:block text-xl text-[#333333]">
        <li className="space-x-7 py-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <GiHamburgerMenu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Explore</SheetTitle>
            <SheetDescription>
              <div>
                <ul>
                  <li className="flex flex-col py-4 space-y-5 text-[#333333]">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blogs</Link>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
