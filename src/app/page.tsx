"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import { videos, getYoutubeThumbnail } from "@/data/videos";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title: string;
  } | null>(null);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-lg px-4 pb-8">
        <Header />

        {/* Video Grid */}
        {videos.length > 0 ? (
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <VideoCard
                  id={video.id}
                  title={video.title}
                  thumbnailUrl={getYoutubeThumbnail(video.youtubeId)}
                  onClick={() =>
                    setSelectedVideo({
                      youtubeId: video.youtubeId,
                      title: video.title,
                    })
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800/50">
              <svg
                className="h-12 w-12 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">
              動画を追加してください
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              src/data/videos.ts に動画データを追加すると
              <br />
              ここに事例が表示されます
            </p>
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.youtubeId || ""}
        title={selectedVideo?.title || ""}
      />
    </div>
  );
}
