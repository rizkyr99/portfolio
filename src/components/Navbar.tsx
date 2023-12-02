import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className='max-w-6xl mx-auto h-12 bg-white flex items-center justify-between px-4'>
        <img src={logo} className='h-8' alt='' />
        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
        <div
          className={`${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } h-full w-32 fixed top-0 right-0 bg-white shadow-[0_0_20px_rgba(0,0,0,0.25)] z-50 transition`}>
          <div className='relative py-16 flex flex-col items-center gap-y-6'>
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4'>
              <X />
            </button>
            <a
              href=''
              className='relative font-bold after:block after:h-1 after:w-[calc(100%+8px)] after:absolute after:-left-1 after:bottom-[5px] after:-z-[1] after:bg-[#63A6F4]'>
              Home
            </a>
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
      </nav>
    </header>
  );
};

export default Navbar;
