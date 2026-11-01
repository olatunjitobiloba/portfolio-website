"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";

interface BookCoverProps {
  src: string;
  alt: string;
  title: string;
  author: string;
  status: string;
}

export function BookCover({ src, alt, title, author, status }: BookCoverProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-[#18181B] text-white p-2.5 flex flex-col justify-between select-none rounded-lg border border-white/10 shadow-inner">
        <div className="flex items-center justify-between">
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400/90 font-medium">
            {status}
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-[11px] font-serif font-medium line-clamp-3 leading-tight text-zinc-100">
            {title}
          </p>
          <p className="text-[9px] font-mono text-zinc-400 truncate">
            {author}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      onError={() => setHasError(true)}
      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
      sizes="(max-width: 640px) 80px, 96px"
    />
  );
}
