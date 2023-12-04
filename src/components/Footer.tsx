import logoDark from '../assets/logo-dark.svg';

const Footer = () => {
  return (
    <footer className='bg-[#2e2e2e] mt-12 text-white'>
      <div className='max-w-6xl flex justify-between items-center h-[50px] mx-auto px-4'>
        <img src={logoDark} alt='' className='h-[22px]' />
        2023 | Rizky Ramadhan
      </div>
    </footer>
  );
};

export default Footer;
