"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  onClick: () => void;
}

export default function VideoCard({ title, thumbnailUrl, onClick }: VideoCardProps) {
  return (
    <motion.div
      className="video-card cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-slate-800">
        {/* Thumbnail */}
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, 200px"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pulse-ring relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/90 backdrop-blur-sm">
            <svg
              className="ml-0.5 h-5 w-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="line-clamp-2 text-sm font-bold leading-tight text-white">
            {title}
          </h3>
          <p className="mt-1 text-xs text-blue-300">
            Before / After
          </p>
        </div>

        {/* Badge */}
        <div className="absolute left-2 top-2">
          <span className="rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-semibold text-white shadow-lg">
            事例
          </span>
        </div>
      </div>
    </motion.div>
  );
}
