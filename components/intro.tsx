"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="scroll-mt-28" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/headshot.jpg"
              alt="Emmanuel portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-100 w-100 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-3 text-4xl"
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🎓
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="justify-center items-center text-center mb-10 mt-4 px-4 py-6 border-gray-300 rounded-md text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello! I&apos;m Emmanuel.</span> I recently graduated from{" "}
        <span className="font-bold">California State University, Monterey Bay (CSU MB)</span> with a{" "}
        <span className="font-bold">bachelor&apos;s degree in Computer Science.</span> I am currently looking for my next role as a{" "}
        <span className="font-bold">Data Analyst.</span> I have a passion for technology, data, and{" "}
        <span className="italic">storytelling through data visualization.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/emmanuelsalcedo/"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Let&apos;s Connect
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/resume"
        >
          View Resume
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
      </motion.div>
    </section>
  );
}
