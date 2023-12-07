import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  link?: string;
  github?: string;
  rightImage?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  techs,
  link,
  github,
  rightImage,
}) => {
  return (
    <div className='grid md:grid-cols-2 max-md:shadow-[0_4px_24px_rgba(0,0,0,0.1)] gap-4 w-full max-sm:max-w-md mx-auto'>
      <img
        src={image}
        alt=''
        className={`w-full object-contain ${rightImage && 'md:order-2'}`}
      />
      <div className='p-4 max-sm:pt-2'>
        <h3 className='text-xl text-center sm:text-left md:text-2xl mb-4'>
          {title}
        </h3>
        <p className='mb-2'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-2'>
          {techs.map((tech) => (
            <div className='bg-[#ececec] px-4 py-1 text-sm'>{tech}</div>
          ))}
        </div>
        {(link || github) && (
          <div className='flex gap-2'>
            {link && (
              <a href={link}>
                <ExternalLink className='cursor-pointer hover:opacity-50 transition' />
              </a>
            )}
            {github && (
              <a href={github}>
                <Github className='cursor-pointer hover:opacity-50 transition' />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
