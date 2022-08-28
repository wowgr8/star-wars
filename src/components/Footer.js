import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
      <span className="text-sm sm:text-center text-gray-400">&copy; 2022 <a href="https://github.com/wowgr8" className="hover:underline">/wowgr8</a>.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
        <li>
          <a href='https://github.com/wowgr8' className="mr-4 hover:underline md:mr-6"><BsGithub /></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/cesar-aug-lopez/' className="mr-4 hover:underline md:mr-6"><BsLinkedin /></a>
        </li>
        <li>
          <a href='mailto:lopez.cesar.aug@gmail.com' className="mr-4 hover:underline md:mr-6"><AiOutlineMail /></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer