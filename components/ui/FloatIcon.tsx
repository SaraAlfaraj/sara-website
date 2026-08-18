"use client";

import { motion } from "framer-motion";

export default function FloatIcon({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
