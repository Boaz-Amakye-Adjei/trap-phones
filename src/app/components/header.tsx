export default function Header() {
  return (
    <header className="shadow-2xl p-4 px-5 md:px-10 flex justify-between items-center font-semibold sticky top-0 z-50 bg-white/70 backdrop-blur-2xl">
      <h1 className="text-2xl flex">
        <img
          src="https://img.icons8.com/?size=100&id=Mv7K3xjMvfuS&format=png&color=000000"
          width={35}
          height={6}
        />
        <span className="font-bold">Trap</span>{" "}
        <span className="text-[#aeaeae] font-thin ml-1">Phones</span>
      </h1>

      <div className="hidden md:block">
        <nav className="flex gap-2 [&button]:p-4 items-center ">
          <button className="p-4 text-lg ">Home</button>

          <button className="p-4 text-lg text-[#aeaeae]">Collections</button>
          <button className="p-4 text-lg text-[#aeaeae]">Phones</button>
          <button className="p-4 text-lg text-[#aeaeae]">Qiuck Find</button>
        </nav>
      </div>

      <div className="flex gap-2 items-center">
        <button className="py-4 px-10 text-white bg-black rounded-[30px] hidden md:block">
          Contact Us
        </button>
        <button className="relative py-4 px-4 text-white rounded-[30px] border border-solid border-[grey]/80">
          <img
            src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
            width={24}
            height={24}
          />

          <div className="absolute bottom-0 right-0 bg-red-500 text-white size-5 p-1 grid place-content-center rounded-full text-xs">
            0
          </div>
        </button>
      </div>
    </header>
  );
}
