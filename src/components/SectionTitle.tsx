const SectionTitle = ({ label }: { label: string }) => {
  return (
    <h2 className='relative inline-block uppercase text-center text-2xl md:text-3xl font-bold after:w-[calc(100%+16px)] after:h-2 after:content-[""] after:bg-[#63A6F4] after:absolute after:-left-2 after:bottom-1 after:-z-10'>
      {label}
    </h2>
  );
};

export default SectionTitle;
