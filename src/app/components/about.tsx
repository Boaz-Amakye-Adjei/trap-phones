"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="flex flex-col md:flex-row my-10  md:my-24 gap-5 px-5 md:px-10">
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
          className="text-3xl font-bold my-10 max-w-[380px]"
        >
          Hello! I&apos;m Trap, and I sell high-quality, affordable iPhones.
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
          I specialize in offering premium iPhones at unbeatable prices.
          Bringing you the latest models, trusted quality, and fast, reliable
          service. Your satisfaction is my top priority, backed by honest deals
          and excellent support.
        </motion.p>
        <div className="hidden md:block">
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
            <span className="size-14 block md:size-16 rounded-full bg-[grey]/80"></span>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold">Trap Mensah</h4>
              <h5 className="text-[#aeaeae]">Phones and Accessories Dealer</h5>
            </div>
          </motion.div>
        </div>
      </article>
      <article className="bg-[black] w-full h-[200px] md:h-[500px] md:w-[480px] rounded-2xl order-1 mt-7 md:mt-0">
        <img src="/profile-pic.jpg" alt="" className="w-full h-full" />
      </article>
    </section>
  );
}
