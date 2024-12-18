"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const NewsLetterCard = () => {
  return (
    <motion.div
      initial={{ translateX: 300, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      className="bg-gradient-to-bl from-[var(--secondary)] to-white mx-3 shadow-2xl rounded-lg max-w-[450px] md:w-1/2"
    >
      <div className="text-black p-8">
        <p className="text-3xl font-bold text-left">Join Our Newsletter</p>
        <p className="font-normal text-pretty pt-7">
          Subscribe to our mailing list to receive priority access on the latest
          cars, exclusive content, and special events.
        </p>
        <Link
          href={"/sign-in"}
          className="pt-10 text-xl font-medium flex gap-2 items-center underline decoration-[var(--primary)] duration-150 hover:gap-4"
        >
          Join Our Newsletter
          <Image
            className="invert"
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

export default NewsLetterCard;
