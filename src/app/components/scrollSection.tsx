"use client";
import { motion } from "framer-motion";

export default function ScrollSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex overflow-auto gap-2 md:gap-0 mt-10 my-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3, // Delay of 0.3s between each child
            },
          },
        }}
        className="md:ml-6 mb-2 flex gap-4"
      >
        {children}
      </motion.div>
    </div>
  );
}
