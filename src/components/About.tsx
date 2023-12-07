import SectionTitle from './SectionTitle';
import aboutBg from '../assets/about-bg.svg';

const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col items-center px-4 gap-y-4 lg:gap-y-8 scroll-m-20'>
      <SectionTitle label='About Me' />
      <div className='grid md:grid-cols-2 gap-5 items-center'>
        <img src={aboutBg} alt='' className='hidden md:block' />
        <p className='text-justify'>
          Hey there! I'm Rizky Ramadhan, a versatile developer specializing in
          both frontend and full-stack development. From crafting elegant user
          interfaces to implementing robust server-side solutions, I bring a
          holistic approach to web development. Dive into my portfolio to see
          how I blend design and functionality. Excited to collaborate on your
          next project!
        </p>
      </div>
    </section>
  );
};

export default About;
