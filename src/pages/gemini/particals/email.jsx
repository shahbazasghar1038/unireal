const Email = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[40px] bg-section-gradient px-5 py-[70px] md:py-[95px] 2xl:gap-[50px] 2xl:py-[105px]">
      <h3 className="text-center text-[30px] font-[400] text-white md:text-[35px]">
        Stay ahead with exclusive announcements and updates!{" "}
      </h3>
      <div className="relative flex h-[60px] w-full max-w-[716px] items-center justify-center overflow-hidden rounded-lg bg-[white] md:h-[70px] 2xl:h-[86px]">
        <input
          type="text"
          className="h-full w-full rounded-lg pl-4 text-[20px] font-[400] text-black placeholder:text-black md:pl-[28px] md:text-[24px]"
          placeholder="Enter your email"
        />
        <button className="absolute right-[10px] h-[46px] rounded-lg bg-black px-5 text-[20px] font-[500] text-white transition-all hover:opacity-80 md:h-[50px] md:px-[45px] md:text-[24px] 2xl:right-[15px] 2xl:h-[60px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Email;
