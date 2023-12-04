const Hero = () => {
  return (
    <div className='flex flex-col items-center py-16 bg-[url("bg-hero.svg")] bg-[percentage:90%] bg-no-repeat bg-center'>
      <h1 className='text-4xl font-black text-center text-[#2E2E2E]'>
        RIZKY
        <span className='block text-[#1A7DF1]'>RAMADHAN</span>
      </h1>
      <div className='mt-20 flex flex-col gap-2'>
        <button className='bg-[#E0F11B] hover:bg-[#c2d309] w-[150px] h-10 flex items-center justify-center transition'>
          Download CV
        </button>
        <button className='border-2 border-black hover:border-[#c2d309] hover:text-[#c2d309] w-[150px] h-10 flex items-center justify-center transition'>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;
