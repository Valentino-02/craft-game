"use client";

import { motion } from "framer-motion";
import { RefObject } from "react";

interface DragNodeProps {
  containerRef: RefObject<HTMLInputElement>;
}

export default function DragNode({ containerRef }: DragNodeProps) {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      className=" bg-red-800 w-5 h-5"
    ></motion.div>
  );
}
