import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiWordpress } from 'react-icons/si';

const Experience = () => {
  return (
    <div name='experience'
      className=" bg-gradient-to-b from-gray-800 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-100">Experience</h2>
          <p className="mt-2 text-lg text-gray-300">
            Here are some of the front-end skills I've worked with:
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-8 shadow-lg">
          <div className="flex flex-col items-center">
            <FaReact className="text-8xl text-gray-100 mb-4" />
            <p className="text-lg font-bold text-gray-100">React</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-8xl text-gray-100 mb-4" />
            <p className="text-lg font-bold text-gray-100">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-8xl text-gray-100 mb-4" />
            <p className="text-lg font-bold text-gray-100">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-8xl text-gray-100 mb-4" />
            <p className="text-lg font-bold text-gray-100">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-8xl text-gray-100 mb-4" />
            <p className="text-lg font-bold text-gray-100">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <SiWordpress  className="text-8xl text-gray-100 mb-4" />
            <p className="text-lg font-bold text-gray-100">Wordpress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
