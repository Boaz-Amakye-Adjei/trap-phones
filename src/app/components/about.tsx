export function About() {
  return (
    <section className="flex flex-col md:flex-row  md:my-32 gap-5 px-5 md:px-10">
      <article className="flex-grow p-[20px]">
        <h3 className="font-bold text-blue-600 tracking-wider">About Trap</h3>
        <h2 className="text-3xl font-bold my-7 max-w-[380px]">
          Hello! Am Trap I sell quality and affordable IPhones!
        </h2>
        <p className="text-[#aeaeae] text-2xl font-bold max-w-[600px]">
          I specialize in selling premium iPhones at unbeatable prices. Bringing
          you the latest models, trusted quality, and fast service you can rely
          on. Your satisfaction is my top priority, with honest deals and
          excellent support.
        </p>

        <div className="flex gap-2 mt-8">
          <span className="size-14 md:size-20 rounded-full bg-[grey]/80"></span>
          <div className="flex flex-col justify-evenly">
            <h4 className="font-bold">Trap Mensah</h4>
            <h5 className="text-[#aeaeae]">Phones and Accessories Dealer</h5>
          </div>
        </div>
      </article>
      <article className="bg-[black] w-full h-[200px] md:h-[500px] md:w-[450px] rounded-2xl order-1"></article>
    </section>
  );
}
