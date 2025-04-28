"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="px-10 py-14 flex flex-col md:flex-row justify-between relative overflow-hidden">
      <img
        src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/shape3.png"
        width={600}
        height={600}
        className="absolute -bottom-[140px] -left-[140px]  md:hidden"
      />
      <img
        src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/shape3.png"
        width={600}
        height={600}
        className="absolute -top-[130px] -right-[220px]  md:hidden"
      />
      <div className="order-2 md:order-1 text-center md:text-start lg:pl-18">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className="text-[#aeaeae] text-base md:text-2xl font-[200] tracking-wider my-8 md:my-13"
        >
          Skip the impossible
        </motion.h3>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="text-3xl md:text-5xl font-[300] tracking-wider mb-2"
        >
          Extraodinary
        </motion.h3>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="text-4xl md:text-7xl tracking-wider font-bold mb-4"
        >
          Performance
        </motion.h3>

        <div className="pt-6 md:pt-12 flex gap-2 flex-col md:flex-row">
          <CtaButton
            title="Purchase Now"
            className="bg-blue-500 text-white "
            delay={0.6}
          />

          <CtaButton
            title="Hot Deals!!!"
            className="text-black  border-black border border-solid"
            delay={0.7}
          />
        </div>
      </div>

      <div
        className="order-1 md:order-2 flex-grow overflow-hidden bg-no-repeat bg-[length:250px] relative"
        style={{
          backgroundImage: `
                 url('https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/shape3.pn'),
                 url('https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/shape3.pn')
               `,
          backgroundPosition: "top right, bottom left",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "350px, 350px", // adjust size if you want
        }}
      >
        <img
          src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/shape3.png"
          width={500}
          height={500}
          className="absolute -bottom-[160px] left-[100px] hidden md:block"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.2,
          }}
          src="/iphone16.png"
          width={700}
          height={700}
          className="md:translate-x-24 relative z-10"
        />{" "}
        <img
          src="https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/shape3.png"
          width={500}
          height={500}
          className="absolute -top-[160px] -right-[100px] hidden md:block"
        />
      </div>
    </div>
  );
}

type ctaProps = {
  title: string;
  className: string;
  delay: number;
};
function CtaButton({ title, className, delay }: ctaProps) {
  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeInOut",
      }}
      className={`${className} rounded-[30px] px-10 font-semibold py-4 hover:brightness-150 duration-100 hover:shadow-xl`}
    >
      {title}
    </motion.button>
  );
}
