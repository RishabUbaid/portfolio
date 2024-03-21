import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover '
        src='https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg'
        alt=''
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/80'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl front-bold text-white'>
            I'm Rishab Ubaid Ismail 
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
            I'm a
            <TypeAnimation
              sequence={[
                'Developer', 
                2000,  
                'Coder',  
                2000, 
                'Tech Enthusiast',
                2000, 
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full text-white'>
          <a href="https://twitter.com/rishabubaid1"> <FaTwitter className='cursor-pointer' size={20} /></a>
          <a href="https://www.facebook.com/mohammed.rishab.9/">  <FaFacebookF className='cursor-pointer' size={20} /></a>
          <a href="https://www.instagram.com/rishab_ubaid/"> <FaInstagram className='cursor-pointer' size={20} /></a>
            <FaLinkedinIn className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
