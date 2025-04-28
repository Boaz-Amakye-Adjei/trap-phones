"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="flex flex-col md:flex-row  md:my-24 gap-5 px-5 md:px-10">
      <article className="flex-grow p-[20px]">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="font-bold text-blue-600 tracking-wider"
        >
          About Trap
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="text-3xl font-bold my-7 max-w-[380px]"
        >
          Hello! Am Trap I sell quality and affordable IPhones!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: "easeInOut",
          }}
          className="text-[#aeaeae] text-2xl font-bold max-w-[600px]"
        >
          I specialize in selling premium iPhones at unbeatable prices. Bringing
          you the latest models, trusted quality, and fast service you can rely
          on. Your satisfaction is my top priority, with honest deals and
          excellent support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="flex gap-2 mt-8"
        >
          <span className="size-14 md:size-16 rounded-full bg-[grey]/80"></span>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold">Trap Mensah</h4>
            <h5 className="text-[#aeaeae]">Phones and Accessories Dealer</h5>
          </div>
        </motion.div>
      </article>
      <article className="bg-[black] w-full h-[200px] md:h-[500px] md:w-[480px] rounded-2xl order-1"></article>
    </section>
  );
}
