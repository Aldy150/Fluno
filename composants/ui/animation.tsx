"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function TexteScroll() {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["#cbd5e1", "#1d4ed8"]
  );

  return (
    <motion.p
      ref={ref}
      style={{ color }}
      className="max-w-3xl text-xl leading-relaxed md:text-3xl"
    >
      Nous concevons des solutions technologiques qui simplifient
      le travail, automatisent les processus et aident les entreprises
      à prendre de meilleures décisions.
    </motion.p>
  );
}
