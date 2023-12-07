import { AlignRight, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrolledNavbar = () => {
    const windowHeight = window.scrollY;
    windowHeight > 200 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrolledNavbar);

    return () => {
      window.removeEventListener('scroll', scrolledNavbar);
    };
  }, []);

  console.log(isScrolled);

  return (
    <header
      className={`${
        isScrolled && 'shadow-md'
      } fixed top-0 left-0 w-full z-50 transition`}>
      <nav className='max-w-6xl mx-auto h-12 sm:h-20 bg-white flex items-center justify-between px-4'>
        <img src={logo} className='h-8' alt='' />
        <div className='flex items-center gap-x-12 max-sm:hidden'>
          <a href='#about'>About</a>
          <a href='#works'>Works</a>
          <a href='#contact'>Contact</a>
        </div>
        <div className='sm:hidden'>
          <button onClick={() => setIsOpen(true)}>
            <AlignRight />
          </button>
          <div
            className={`${
              isOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            } h-full w-32 fixed top-0 right-0 bg-white shadow-[0_0_20px_rgba(0,0,0,0.25)] z-50 transition`}>
            <div className='relative py-16 flex flex-col items-center gap-y-6'>
              <button
                onClick={() => setIsOpen(false)}
                className='absolute top-4 right-4'>
                <X />
              </button>
              <a
                href='#about'
                className='relative hover:font-bold after:invisible hover:after:visible after:block after:h-1 after:w-0 hover:after:w-[calc(100%+8px)] after:absolute after:-left-1 after:bottom-[5px] after:-z-[1] after:bg-[#63A6F4] after:transition-all'>
                About
              </a>
              <a
                href='#works'
                className='relative hover:font-bold after:invisible hover:after:visible after:block after:h-1 after:w-0 hover:after:w-[calc(100%+8px)] after:absolute after:-left-1 after:bottom-[5px] after:-z-[1] after:bg-[#63A6F4] after:transition-all'>
                Works
              </a>
              <a
                href='#contact'
                className='relative hover:font-bold after:invisible hover:after:visible after:block after:h-1 after:w-0 hover:after:w-[calc(100%+8px)] after:absolute after:-left-1 after:bottom-[5px] after:-z-[1] after:bg-[#63A6F4] after:transition-all'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
