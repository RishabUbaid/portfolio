import React from "react";

import { 
  DiCss3,
  DiJavascript ,
 

} from "react-icons/di";

import { AiFillHtml5} from "react-icons/ai";
import { SiMongodb,SiExpress,SiReact, SiTailwindcss } from "react-icons/si";
import { FaBootstrap,FaNodeJs  } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-secondery text-black px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Rishab Ubaid Ismail I am a
            full Stack Developer. I build beautifull websites with MERN and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Html, Css, Axios, Tailwind CSS, Css3 and many more.
          </p>

          <p>In backend I know Node.js, Express.js,MySQL, MongoDB, and Mongoose</p>

          <p>
            In my spare time I Try To Update With my Skills,build various projects.
          </p>
          <div className='flex justify-between pt-6 max-w-[200px] w-full text-black'>
          <a href="https://twitter.com/rishabubaid1"> <FaTwitter className='cursor-pointer' size={20} /></a>
          <a href="https://www.facebook.com/mohammed.rishab.9/">  <FaFacebookF className='cursor-pointer' size={20} /></a>
          <a href="https://www.instagram.com/rishab_ubaid/"> <FaInstagram className='cursor-pointer' size={20} /></a>
            <FaLinkedinIn className='cursor-pointer' size={20} />
          </div>

        </div>


        <div className="flex flex-row p-10">
        <h2 className="p-5 text-4xl font-bold mb-5">
            Skills: 
          </h2>
          <div className="flex-col">
          <DiCss3  className='cursor-pointer' size={72}/>
          <DiJavascript className='cursor-pointer' size={72}/>
          <AiFillHtml5  className='cursor-pointer' size={72} />
          <FaBootstrap className='cursor-pointer' size={72} />
          </div>
          <div className="pl-5 flex-col"> 
          <SiMongodb className='cursor-pointer' size={72}  />
          <SiExpress className='cursor-pointer' size={72} />
          <SiReact className='cursor-pointer' size={72}/>
          <FaNodeJs className='cursor-pointer' size={72} />
          </div>
          <div className="pl-5 flex-col"> 
          <SiTailwindcss  className='cursor-pointer' size={72}  />
          </div>
          </div>
         
         
        </div>
      
    </section>
  );
};

export default About;