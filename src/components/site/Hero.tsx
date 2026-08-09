import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/hero-prototypes.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-70" />

      {/* CAD-inspired line animations */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full text-foreground/25"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {[18, 50, 82].map((v, i) => (
          <motion.line
            key={v}
            x1={v}
            y1="0"
            x2={v}
            y2="100"
            stroke="currentColor"
            strokeWidth="0.08"
            strokeDasharray="1.4 1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.2 + i * 0.18, ease: "easeInOut" }}
          />
        ))}
        <motion.circle
          cx="82"
          cy="34"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.08"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, delay: 0.6, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 pt-32 pb-14 md:px-12">
        <motion.div
          style={{ y: imgY }}
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] items-start justify-end pt-24 lg:flex"
        >
          <motion.img
            src={heroImage}
            alt="3D printed prototype parts and machined components produced by 100KRAFT"
            width={1600}
            height={1200}
            className="h-[64vh] w-full object-cover object-center mix-blend-multiply"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <motion.div style={{ y: textY, opacity: fade }} className="relative max-w-4xl">
          <motion.div
            className="label-technical mb-8 flex flex-wrap items-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span>Design &amp; Manufacturing Atelier</span>
            <span className="text-accent">Antalya · TR</span>
          </motion.div>

          <h1 className="font-display text-[13vw] leading-[0.86] tracking-[-0.045em] sm:text-[9vw] lg:text-[7.4vw]">
            {["From Idea", "to Production."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.15, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? (
                    <>
                      to <span className="italic text-accent">Production.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Product Design, 3D Printing, Mold Design &amp; Manufacturing Consulting.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 overflow-hidden bg-foreground px-8 py-4"
            >
              <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="label-technical relative text-primary-foreground">
                Start a Project
              </span>
              <span className="relative text-primary-foreground transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a href="#projects" className="label-technical underline-offset-8 hover:underline">
              View selected work
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute right-6 bottom-14 hidden md:block md:right-12">
        <motion.div
          className="label-technical [writing-mode:vertical-rl]"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
