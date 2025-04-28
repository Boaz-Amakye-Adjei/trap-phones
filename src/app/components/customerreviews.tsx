"use client";
import ScrollSection from "./scrollSection";

import { motion } from "framer-motion";

export default function CustomerReviews() {
  return (
    <section className="px-5 md:px-10 py-15 md:py-10 bg-white text-black">
      <div className="mb-12 md:flex justify-between">
        <h1 className="font-bold text-3xl">Customer Reviews</h1>
        <button className="text-sm p-3">View all reviews</button>
      </div>

      <ScrollSection>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ScrollSection>
    </section>
  );
}

function ReviewCard() {
  const data = [1, 2, 3, 4, 5];
  return (
    <motion.div
      whileHover={{ scale: 0.97 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="shadow-xl w-[400px] h-[250px] px-7"
    >
      <div className="bg-white flex py-5">
        <div className="w-[50px]"></div>
        <div>
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
          <h5 className="font-light text-sm ">Boaz Amakye Adjei</h5>
        </div>
      </div>
      <div>
        <h3 className="font-bold my-3">I LOVE MY IPHONE 11!!</h3>
        <p className="font-light text-[#aeaeae]">
          I ordered this iphone because i wanted to switch from Andriod to Apple
          and the iphone came like if i just bought it from Apple
        </p>
      </div>
    </motion.div>
  );
}
