"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import DragNode from "../DragNode";

export default function PlayArea() {
  const playAreaRef = useRef<HTMLInputElement>(null);

  return (
    <motion.div ref={playAreaRef} className=" w-96 h-96 bg-slate-400">
      <DragNode containerRef={playAreaRef} />
    </motion.div>
  );
}
