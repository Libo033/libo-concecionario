import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)]">
      <div className="pb-12 pt-2">
        <div className="p-5 sm:px-12">
          <Image
            className="bg-[var(--secondary)] rounded-full"
            src={"/img/logo-no-bg.png"}
            alt="Libo Logo"
            width={102}
            height={102}
          />
        </div>
        <div className="md:flex md:justify-between">
          <div className="px-5 text-white sm:px-10 md:max-w-[50%] lg:max-w-[39%]">
            <p>
              LIBO is a full-service marketplace to buy and sell the most
              extraordinary motor vehicles in the world. Our team of automotive
              experts, with over 100 years of combined experience, deliver a
              transparent and delightful experience with every transaction.
              Whether you're looking to buy or sell a vintage classic or a
              modern supercar, ISSIMI was built with your collection in mind.
            </p>
          </div>
          <div className="md:px-10">
            <div className="pt-16 px-5 w-full flex items-center gap-7 sm:px-10 md:pt-0 md:gap-0 md:justify-between">
              <a href="" target="_blank" rel="noreferrer nofollow">
                <Image
                  className="invert"
                  src={
                    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1734445681/Social/pdcint9wclphamlysoiu.svg"
                  }
                  alt="facebook"
                  width={33}
                  height={33}
                />
              </a>
              <a href="" target="_blank" rel="noreferrer nofollow">
                <Image
                  className="invert"
                  src={
                    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1734445635/Social/caxusrg3z19vx0tpwygi.svg"
                  }
                  alt="instagram"
                  width={33}
                  height={33}
                />
              </a>
              <a href="" target="_blank" rel="noreferrer nofollow">
                <Image
                  className="invert"
                  src={
                    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1734445635/Social/wpejcais5h5wknaadxsb.svg"
                  }
                  alt="linkedin"
                  width={33}
                  height={33}
                />
              </a>
              <a href="" target="_blank" rel="noreferrer nofollow">
                <Image
                  className="invert"
                  src={
                    "https://res.cloudinary.com/dsuydyqgz/image/upload/v1734445635/Social/deigzfwtq0rh5tzw0vvf.svg"
                  }
                  alt="youtube"
                  width={33}
                  height={33}
                />
              </a>
            </div>
            <div className="pt-10 px-5 sm:px-10 md:w-80">
              <Link
                className="text-l text-white font-semibold flex gap-2 items-center duration-150 hover:gap-4"
                href={"/newsletter"}
              >
                Sign up to out Newsletter
                <Image
                  src={"/img/forward_arrow.svg"}
                  alt="forward arrow"
                  width={15}
                  height={15}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-400 mx-5 sm:mx-10">
          <p className="pt-4 text-xs text-[var(--secondary)] md:text-base">
            © 2024 LIBO Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
