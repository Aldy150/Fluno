
"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function TexteScroll() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["#cbd5e1", "#1d4ed8"]
  );

  const mots = [
    "Nous",
    "transformons",
    "vos",
    "idées",
    "en",
    "solutions",
    "numériques",
    "concrètes.",
  ];

  return (
    <section ref={ref} className="py-12">
      <motion.p
        style={{ color }}
        className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
      >
        {mots.map((mot, index) => {
          const debut = index / mots.length;
          const fin = (index + 1) / mots.length;

          return (
            <motion.span
              key={mot + index}
              className="mr-[0.25em] inline-block"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              style={{
                color: useTransform(
                  scrollYProgress,
                  [debut, fin],
                  ["#cbd5e1", "#1d4ed8"]
                ),
              }}
            >
              {mot}
            </motion.span>
          );
        })}
      </motion.p>

      <motion.div
        className="mt-6 h-1 rounded-full bg-blue-100"
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      >
        <div className="h-full w-full rounded-full bg-blue-600" />
      </motion.div>
    </section>
  );
}
