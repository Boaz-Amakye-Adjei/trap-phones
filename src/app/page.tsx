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

        <section className="px-5 md:px-10 my-14">
          <div
            className="w-full h-[400px] overflow-hidden bg-black/90 rounded-[30px] flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: "url('/delivery.jpg')" }}
          >
            <div className="h-full bg-black/20 w-full text-white">
              <div className="flex flex-col space-evenly justify-center items-center gap-6 mx-auto md:max-w-[400px] px-5 h-full">
                <h2 className="font-bold text-4xl">Delivery</h2>
                <p className="text-white text-center">
                  We deliver your phone right to your doorstep where ever you
                  are in Ghana. Just get in touch with trap phones collection
                </p>
                <div className="flex gap-2 flex-col md:flex-row">
                  <button className="rounded-[30px] px-10 font-semibold py-4 hover:brightness-150 duration-100 hover:shadow-xl bg-black">
                    See More
                  </button>
                  <button className="rounded-[30px] px-10 font-semibold py-4 hover:brightness-150 duration-100 hover:shadow-xl bg-white text-black">
                    Locations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
