"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const StayInTouchCard = () => {
  return (
    <motion.div
      initial={{ translateX: -300, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      className="bg-gradient-to-br from-[var(--primary)] to-gray-800 my-20 mx-3 shadow-2xl rounded-lg max-w-[450px]"
    >
      <div className="text-white p-8">
        <p className="text-3xl font-bold text-left">Join Our Community</p>
        <p className="font-normal text-pretty pt-7">
          Join our community of enthusiasts and collectors. Get connected with
          our team and sign up for updates for your specific vehicle
          preferences.
        </p>
        <Link
          href={"/sign-in"}
          className="pt-10 text-xl font-medium flex gap-2 items-center underline decoration-[var(--secondary)] duration-150 hover:gap-4"
        >
          Create an Account
          <Image
            src={"/img/forward_arrow.svg"}
            alt="car"
            width={21}
            height={21}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default StayInTouchCard;
