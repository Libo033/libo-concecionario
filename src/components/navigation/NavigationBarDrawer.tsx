import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationBarDrawer = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="h-screen bg-gradient-to-b from-[var(--primary)] to-zinc-900 relative md:hidden">
      <Image
        className="absolute right-4 top-4 sm:right-6 sm:top-6"
        onClick={(e) => onClose()}
        src={"/img/cross.svg"}
        alt="cross"
        width={36}
        height={36}
      />
      <ul className="mt-28 flex flex-col px-10 gap-10 sm:px-20">
        <li>
          <Link
            className="text-white text-xl font-semibold underline decoration-1 decoration-[var(--secondary)] sm:text-2xl"
            href={"/buy"}
          >
            All the cars
          </Link>
        </li>
        <li>
          <Link
            className="text-white text-xl font-semibold underline decoration-1 decoration-[var(--secondary)] sm:text-2xl"
            href={"/sell"}
          >
            Sell
          </Link>
        </li>
        <li>
          <Link
            className="text-white text-xl font-semibold underline decoration-1 decoration-[var(--secondary)] sm:text-2xl"
            href={"/private-sale"}
          >
            Private Sales
          </Link>
        </li>
        <li>
          <Link
            className="text-white text-xl font-semibold underline decoration-1 decoration-[var(--secondary)] sm:text-2xl"
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-white text-xl font-semibold underline decoration-1 decoration-[var(--secondary)] sm:text-2xl"
            href={"/support"}
          >
            Support
          </Link>
        </li>
        <li className="w-24 py-1 border border-[var(--secondary)] rounded-full text-center sm:w-32">
          <Link
            className="text-l text-[var(--secondary)] font-medium sm:text-xl"
            href={"/sign-in"}
          >
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBarDrawer;
