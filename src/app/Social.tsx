"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Html } from "@react-three/drei";
export default function Social() {
  const icon = "text-3xl";
  const platforms = [
    {
      name: "instagram",
      url: "https://www.instagram.com/ryanthedeveloper/",
      icon: <FaInstagram className={icon} />,
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/@ryanthedeveloper",
      icon: <IoLogoYoutube className={icon} />,
    },
    {
      name: "twitter",
      url: "https://twitter.com/ryanthedeveloper",
      icon: <FaXTwitter className={icon} />,
    },
  ];
  return (

    <div className="social fixed flex gap-3 bottom-5 right-5 z-50">
      {platforms.map((platform) => (
        <Link href={platform.url} key={platform.name}>
          {platform.icon}
        </Link>
      ))}
    </div>

  );
}
