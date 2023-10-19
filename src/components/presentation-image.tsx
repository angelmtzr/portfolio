"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Info } from "@/types";

type PresentationImageProps = { href: string } & Info;

export default function PresentationImage({
  href,
  name,
  profession,
  imageUrl,
}: PresentationImageProps) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Link href={href}>
          <Image
            src={imageUrl}
            alt={`${name} photograph`}
            width="200"
            height="200"
            priority={true}
            className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-110 transition"
          />
        </Link>
      </motion.div>
      <motion.span
        className="text-4xl font-semibold capitalize"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.1,
          duration: 0.7,
        }}
      >
        {name}
      </motion.span>
      <motion.span
        className="text-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.2,
          duration: 0.6,
        }}
      >
        {profession}
      </motion.span>
    </div>
  );
}
