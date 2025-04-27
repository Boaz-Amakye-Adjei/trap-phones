"use client";
import { motion } from "framer-motion";

export function Ethics() {
  const ethics = [
    {
      src: "https://img.icons8.com/?size=100&id=X8t9nq1Y9xhF&format=png&color=228BE6",
      title: "Reliable Phones",
      description:
        "We sell reliable phones that last till as long as you need it",
    },
    {
      src: "https://img.icons8.com/?size=100&id=EPWi0qK2GM93&format=png&color=228BE6",
      title: "Always Available",
      description: "Shop and online are open 24/7 to make easy for you to buy",
    },
    {
      src: "https://img.icons8.com/?size=100&id=G7xxWUssqjYw&format=png&color=228BE6",
      title: "Affordable Prices",
      description:
        "Dont break the bank. Top notch quality for and affordable price.",
    },
    {
      src: "https://img.icons8.com/?size=100&id=y2lxWyggBa1t&format=png&color=228BE6",
      title: "Best Quality",
      description: "Enjoy the best of the best when you choose Trap phones",
    },
  ];
  return (
    <motion.section
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
      className="px-10 py-10 mt-9 grid grid-cols-1 md:grid-cols-4 gap-3"
    >
      {ethics.map(({ src, title, description }) => (
        <motion.div
          key={title}
          className="group flex justify-center items-center flex-col gap-2 cursor-pointer mb-6 md:mb-0"
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <img
            src={src}
            width={50}
            height={50}
            className="group-hover:rotate-y-180 transition-transform duration-700 ease-in-out"
          />
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-center text-[#aeaeae]">{description}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
