"use client";
import { motion } from "framer-motion";
import ScrollSection from "./scrollSection";

export default function Sales() {
  const data = [
    {
      name: "iPhone 12 pro Black",
      image:
        "https://www.plug.tech/cdn/shop/products/i12black.png?v=1624121675&%3Bwidth=500&em-format=avif",
      initialPrice: "7200",
      price: "6999",
    },
    {
      name: "iPhone 14 pro max Black",
      image:
        "https://www.plug.tech/cdn/shop/products/iPhone14ProMaxSpaceBlack_Dual.png?v=1675379830&%3Bwidth=200&em-format=avif&em-width=200%20200w",
      initialPrice: "9800",
      price: "9400",
    },
    {
      name: "iPhone 13 Red",
      image:
        "https://www.plug.tech/cdn/shop/products/iPhone13Red_Back.png?v=1655144259&%3Bwidth=200&em-format=avif&em-width=200%20200w",
      initialPrice: "4500",
      price: "4000",
    },
    {
      name: "iPhone 11 Black",
      image:
        "https://www.plug.tech/cdn/shop/products/0007_11-black-2_b9e66e0f-a56d-4489-bbb8-8d82f2c1e325.png?v=1624120214&%3Bwidth=200&em-format=avif&em-width=200%20200w",
      initialPrice: "3400",
      price: "3200",
    },
    {
      name: "iPhone 13 pro Black",
      image:
        "https://www.plug.tech/cdn/shop/products/iPhone14ProMaxDeepPurple_Back.png?v=1675380097&%3Bwidth=200&em-format=avif&em-width=200%20200w",
      initialPrice: "4400",
      price: "4200",
    },
  ];

  return (
    <section className="px-5 py-20 bg-[#f2f2f2]">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-center font-bold tracking-wide text-4xl px-5"
      >
        <span className="text-blue-600">HOT</span> Deals
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-5 text-center py-10 max-w-[520px] mx-auto font-semibold text-[#aeaeae]"
      >
        Get the hottest smartphone deals at unbeatable prices. Limited stock —
        grab yours now before theyre gone!
      </motion.p>

      <ScrollSection>
        {data.map((data, index) => (
          <Card {...data} key={index} />
        ))}
      </ScrollSection>

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

type CardProps = {
  name: string;
  image: string;
  initialPrice: string;
  price: string;
};

function Card({ name, image, initialPrice, price }: CardProps) {
  const data = [1, 2, 3, 4, 5];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="w-[270px] rounded overflow-hidden"
    >
      <div className="h-[250px] bg-[#aeaeae] w-full">
        <img src={image} className="w-full h-full" />
      </div>

      <div className="bg-white w-full flex flex-col justify-center items-center p-5">
        <p className="text-xs mt-2">Apple</p>
        <h4 className="mt-2.5 font-bold tracking-wide text-center">{name}</h4>
        <p className="font-bold">&#40;Unlocked&#41;</p>
        <ul className="flex">
          {data.map((star) => (
            <li key={star}>
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/FAB005/star.png"
                width={10}
                height={10}
              />
            </li>
          ))}
        </ul>
        <div className="flex text-sm gap-1">
          <p className="mb-2 mt-2">{price}</p>
          <p className="mb-2 mt-2 line-through text-red-400">{initialPrice}</p>
        </div>
      </div>
    </motion.div>
  );
}
