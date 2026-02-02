"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative overflow-hidden pb-8 pt-12">
      {/* Background glow effect */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="h-32 w-64 rounded-full bg-blue-500/30 blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Logo / Title */}
          <h1 className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
            PHYSIO SHOT
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            フィジオショット
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-sm font-medium text-slate-300">
              施術事例 Before / After
            </span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
