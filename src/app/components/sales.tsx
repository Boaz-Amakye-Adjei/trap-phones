"use client";
import { motion } from "framer-motion";

export default function Sales() {
  return (
    <section className="px-5 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-center font-bold tracking-wide text-4xl px-5"
      >
        <span className="text-blue-600">Pear-IPhone</span> Products
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-5 text-center py-10 max-w-[520px] mx-auto font-semibold text-[#aeaeae]"
      >
        A smartwatch is a wearable computer in the form of a watch; modern
        smartwatches provide a local touchscreen interface for daily use.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 mt-10 my-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="px-10 w-full flex justify-center my-10">
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mx-auto group py-4 px-10 text-white bg-black rounded-[30px] hover:brightness-125 font-bold"
        >
          <div className="flex items-center gap-4">
            <img
              src="https://img.icons8.com/?size=100&id=11759&format=png&color=FFFFFF"
              alt=""
              width={30}
              height={30}
              className="rounded-full bg-black p-2 group-hover:translate-x-2.5 duration-100 ease-in-out"
            />
            <p>Discover more</p>
          </div>
        </motion.button>
      </div>
    </section>
  );
}

function Card() {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-[20px] w-full md:w-[88%] shadow-[#aeaeae] shadow-2xl flex flex-col justify-center items-center rounded-[30px]">
        <div className="size-[130px] md:size-[190px] mx-auto bg-[#aeaeae] rounded-full mb-3"></div>
        <h4 className="mt-2.5 font-bold tracking-wide text-center">
          Iphone 16 Pro
        </h4>
        <ul className="flex">
          {data.map((star) => (
            <li key={star}>
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/FAB005/star.png"
                width={15}
                height={15}
              />
            </li>
          ))}
        </ul>
        <h4 className="mb-2 mt-6 tracking-wider">GHC 12,000</h4>
        <button className="font-bold bg-blue-600 px-6 py-2 rounded-[30px] md:w-[80%] mx-auto text-white my-2.5 text-nowrap">
          Add to cart
        </button>
      </div>
    </div>
  );
}
