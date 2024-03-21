import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../assets/property.jpg';
import driveImg from '../assets/property.jpg';
import beachesImg from '../assets/property.jpg';
import bestEatsImg from '../assets/property.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Welcome to my portfolio project showcase! Here you'll find a curated collection of my most notable works, spanning various domains and showcasing my skills and expertise. Each project is a testament to my dedication, creativity, and problem-solving abilities. Feel free to explore and get a glimpse into my professional journey.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={driveImg} title='project 1' />
        <ProjectItem img={propertyImg} title='Project 2' />
        <ProjectItem img={beachesImg} title='project 3' />
        <ProjectItem img={bestEatsImg} title='project 4' />
      </div>
    </div>
  );
};

export default Projects;
