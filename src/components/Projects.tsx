import SectionTitle from './SectionTitle';

import ProjectItem from './ProjectItem';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  return (
    <section
      id='works'
      className='flex flex-col items-center px-4 mt-6 lg:mt-12 gap-y-4 lg:gap-y-8 scroll-m-20'>
      <SectionTitle label='My Works' />
      <div className='w-full grid max-md:grid-cols-[minmax(0,450px)] place-content-center gap-4'>
        <ProjectItem
          title='Antipu'
          description='Antipu is an application to protect against fraudulent applications developed by a team of 5 people. Designed and developed a landing page website for Antipu, and created a backend system for the application.'
          image={project1}
          techs={['next.js', 'react', 'typescript', 'tailwind']}
          link='https://antipu-web.vercel.app/'
        />
        <ProjectItem
          title='Inventory Management'
          description='Designed and implemented a user-friendly web application for efficient
          inventory control. A project team is carried out by 4 people. Act as
          frontend lead.'
          image={project2}
          techs={['next.js', 'react', 'tailwind', 'express', 'mongodb']}
          link='https://binarinventorymanagement.online'
          github='https://github.com/AgriAdhiatma24/binar-inventory-management'
          rightImage
        />
        <ProjectItem
          title='PMII Connect'
          description='A member management system for a provincial level organization in South Sumatra. Used by approximately 1000 member organizations. Equipped with features such as online membership cards, the latest events, and live forums.'
          image={project3}
          techs={['next.js', 'react', 'typescript', 'tailwind', 'shadcn']}
        />
      </div>
    </section>
  );
};

export default Projects;
