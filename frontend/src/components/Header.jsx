"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNav = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="../">Home</Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="../Information">Information</Link>
                <Link href="../Help">How Parents Can Help</Link>
                <Link href="../Livestreaming">Livestreaming</Link>
                <Link href="../SocialMediaApps">SocialMediaApps</Link>
                <Link href="../Contact">Contact</Link>
                <Link href="../Legislation">Legislation</Link>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleNav}>
                {!isClicked ? <p>menu</p> : <p>cross</p>}
              </button>
            </div>
          </div>

          <div
            className={`md:hidden transition-max-height duration-500 ease-in-out ${
              isClicked ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="../Information"
                  className="p-2 block"
                >
                  Information
                </Link>
                <Link href="../Help" className="p-2 block">
                  How Parents Can Help
                </Link>
                <Link href="../Livestreaming" className="p-2 block">
                  Livestreaming
                </Link>
                <Link href="../SocialMediaApps" className="p-2 block">
                  SocialMediaApps
                </Link>
                <Link href="../Contact" className="p-2 block">
                  Contact
                </Link>
                <Link href="../Legislation" className="p-2 block">
                  Legislation
                </Link>
              </div>
            </div>
          </div>
          {/* {isClicked && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="../Information" className="p-2 block">
                  Information
                </Link>
                <Link href="../Help" className="p-2 block">
                  How Parents Can Help
                </Link>
                <Link href="../Livestreaming" className="p-2 block">
                  Livestreaming
                </Link>
                <Link href="../SocialMediaApps" className="p-2 block">
                  SocialMediaApps
                </Link>
                <Link href="../Contact" className="p-2 block">
                  Contact
                </Link>
                <Link href="../Legislation" className="p-2 block">
                  Legislation
                </Link>
              </div>
            </div>
          )} */}
        </div>
      </nav>
    </>
  );
}
