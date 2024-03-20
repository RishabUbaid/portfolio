import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2019,
    title: 'High school',
    duration: '2 years',
    details:
      'completed my High school studies from kerala HSE',
  },
  {
    year: 2020,
    title: 'BSC CS',
    duration: '3 years',
    details:
      'completed UG from Kannur University',
  },
  {
    year: 2024,
    title: 'Synnefo',
    duration: '6 months',
    details:
      'MERN ',
  },
 
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl fotn-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
