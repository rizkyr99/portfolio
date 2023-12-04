import SectionTitle from './SectionTitle';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <section
      id='works'
      className='flex flex-col items-center px-4 mt-6 lg:mt-12 gap-y-4 lg:gap-y-8 scroll-m-20'>
      <SectionTitle label='My Works' />
      <div className='w-full grid grid-cols-1 gap-4'>
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
};

export default Projects;
