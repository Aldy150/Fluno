
"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 5%"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65, 1],
    [0.92, 1, 1, 0.88]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65, 1],
    direction === "down"
      ? [-35, 0, 0, 35]
      : [35, 0, 0, -35]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65, 1],
    direction === "left"
      ? [35, 0, 0, -35]
      : direction === "right"
        ? [-35, 0, 0, 35]
        : [0, 0, 0, 0]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, scale, x, y }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
