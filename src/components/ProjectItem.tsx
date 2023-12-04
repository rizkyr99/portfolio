import project1 from '../assets/project1.png';
import { ExternalLink, Github } from 'lucide-react';

const ProjectItem = () => {
  return (
    <div className='grid sm:grid-cols-2 max-sm:shadow-[0_4px_24px_rgba(0,0,0,0.1)] gap-4 w-full max-sm:max-w-md mx-auto'>
      <img src={project1} alt='' className='h-full w-full object-contain' />
      <div className='p-4 max-sm:pt-2'>
        <h3 className='text-xl text-center sm:text-left md:text-2xl mb-4'>
          Inventory Management
        </h3>
        <p className='mb-2'>
          Designed and implemented a user-friendly web application for efficient
          inventory control. A project team is carried out by 4 people. Act as
          frontend lead.
        </p>
        <div className='flex flex-wrap gap-2 mb-2'>
          <div className='bg-[#ececec] px-4 py-1 text-sm'>react</div>
          <div className='bg-[#ececec] px-4 py-1 text-sm'>tailwind</div>
          <div className='bg-[#ececec] px-4 py-1 text-sm'>mongodb</div>
          <div className='bg-[#ececec] px-4 py-1 text-sm'>nextjs</div>
          <div className='bg-[#ececec] px-4 py-1 text-sm'>express</div>
          <div className='bg-[#ececec] px-4 py-1 text-sm'>node</div>
        </div>
        <div className='flex gap-2'>
          <ExternalLink className='cursor-pointer hover:opacity-50 transition' />
          <Github className='cursor-pointer hover:opacity-50 transition' />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
