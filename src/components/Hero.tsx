import heroImg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <div className='md:flex justify-between items-end bg-[url("/bg-hero.svg")] bg-[percentage:90%] bg-no-repeat bg-center mb-8 lg:border-b-[10px] border-primary'>
      <div className='flex flex-col items-center md:items-start py-16 md:pl-4'>
        <h1 className='text-4xl sm:text-5xl font-black text-center md:text-left text-[#2E2E2E]'>
          RIZKY
          <span className='block text-[#1A7DF1]'>RAMADHAN</span>
        </h1>
        <div className='mt-20 flex flex-col gap-2'>
          <a
            href=''
            className='bg-[#E0F11B] hover:bg-[#c2d309] w-[150px] h-10 flex items-center justify-center transition'>
            Download CV
          </a>
          <a
            href='mailto:ramarizdev@gmail.com'
            className='border-2 border-black hover:border-[#c2d309] hover:text-[#c2d309] w-[150px] h-10 flex items-center justify-center transition'>
            Contact Me
          </a>
        </div>
      </div>
      <img src={heroImg} alt='' className='hidden md:block h-96 lg:h-[480px]' />
    </div>
  );
};

export default Hero;
