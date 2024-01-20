"use client";
import { FaCalendarAlt } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Badge from "@/components/Badge";
import Badges from "@/components/Badges";
import ShareButtons from "@/components/ShareButtons";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({ post }: any) {
  debugger;
  return (
    <article key={post.id} className="bg-gray-200 rounded-lg p-3 flex flex-col">
      <div className="flex space-x-1 text-sm text-gray-500">
        <span>
          <FaCalendarAlt className="h-5 w-5 text-gray-800" aria-hidden="true" />
          <time dateTime={post.updated}>{post.updated_pretty}</time>
        </span>
        <span aria-hidden="true">&middot;</span>
        <span>
          <LuAlarmClock className="h-5 w-5 text-gray-800" aria-hidden="true" />
          <span>{post.read_time}</span>
        </span>
      </div>
      <Link href={`/blog/${post.slug}`} className="relative aspect-square flex-shrink-0 rounded-lg overflow-hidden shadow-2xl">
        <Image
          className="h-48 w-full object-cover"
          src={"https://picsum.photos/200"}
          alt={post.title}
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
        />
        <ShareButtons />
      </Link>
      <Badges>
        {post.tags.map((tag: any) => {
          return (
            <Badge key={tag} text={tag.name} url={`/blog/tags/${tag.slug}`} />
          );
        })}
      </Badges>
      <div className="flex flex-col justify-between items-between flex-auto">
        <Link href={`/blog/${post.slug}`} className="block mb-5">
          <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
          <p className="mt-2 text-base text-gray-500 line-clamp-3">
            {post.description}
          </p>
        </Link>

        <Link
          href={`/blog/${post.slug}`}
          className="bg-black text-white p-4 w-full rounded-xl block text-center mt-auto"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
