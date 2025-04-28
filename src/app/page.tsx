import { About } from "./components/about";
import Hero from "./components/hero";
import { Ethics } from "./components/ethics";
import Sales from "./components/sales";
import CustomerReviews from "./components/customerreviews";

export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <Ethics />
        <Sales />
        <About />
        <CustomerReviews />

        <section className="px-10 my-14">
          <div className="w-full h-[400px] bg-black/20 rounded-[30px]"></div>
        </section>
      </main>
    </div>
  );
}
