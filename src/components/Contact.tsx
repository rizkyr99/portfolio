import { Instagram, Linkedin, Twitter } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center gap-y-4 mt-6 lg:mt-12 lg:gap-y-8'>
      <SectionTitle label='Contact Me' />
      <div className='flex gap-4'>
        <a
          href='https://www.instagram.com/rizkyr.99/'
          className='transition hover:text-rose-500'>
          <Instagram className='h-8 w-8' />
        </a>
        <a
          href='https://twitter.com/RizDev99'
          className='transition hover:text-sky-500'>
          <Twitter className='h-8 w-8' />
        </a>
        <a
          href='https://www.linkedin.com/in/rizkyrama99/'
          className='transition hover:text-blue-600'>
          <Linkedin className='h-8 w-8' />
        </a>
      </div>
    </section>
  );
};

export default Contact;
