"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/app/utils/lib/hooks/use-scroll";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>cleanLoop</p>
          </Link>
          
          {/* New navigation buttons */}
          <div className="hidden space-x-4 sm:flex">
            <NavButton href="/feature-0">Feature 0</NavButton>
            <NavButton href="/feature-1">Feature 1</NavButton>
            <NavButton href="/feature-2">Feature 2</NavButton>
            <NavButton href="/feature-3">Feature 3</NavButton>
          </div>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="Dashboard"
                    labelIcon={<LayoutDashboard className="h-4 w-4" />}
                    href="/"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </>
  );
}

function NavButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-black">
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform group-hover:scale-x-100" />
    </Link>
  );
}
