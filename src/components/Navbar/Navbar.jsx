import React, { useState } from 'react';
import logo from "../images/logo1.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='flex items-center  justify-end h-20 px-4 shadow-md sticky top-0 bg-white'>
        <div className='flex-grow flex justify-end '>
          <Link to="/" className='mr-auto'>
            <img src={logo} alt="logo" className='h-[60px] w-40' />
          </Link>
          <div className='hidden md:flex space-x-20'> {/* Increased space between links */}
            <ul className='flex space-x-20'> 
              <li>
                <Link to="/about" className='relative top-2 text-gray-600 hover:text-red-500'>About Us</Link>
              </li>
              <li>
                <Link to="/service" className='text-gray-600 hover:text-red-500 relative top-2'>Services</Link>
              </li>
              <li>
                <Link to="/feature" className='text-gray-600 hover:text-red-500 relative top-2'>Feature</Link>
              </li>
              <li>
                <Link to="/blog" className='text-gray-600 hover:text-red-500 relative top-2'>Blog</Link>
              </li>
              <li>
                <Link to="/careers" className='text-gray-600 hover:text-red-500 relative top-2'>Careers</Link>
              </li>
            </ul>
          </div>
          <div className='hidden md:block ml-5'>
            <button type='button' className='px-5 py-2 rounded-lg text-white bg-blue-950'>
              <Link to='/contact'>Contact Us</Link>
            </button>
          </div>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-gray-600 hover:text-red-500 focus:outline-none'>
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='md:hidden bg-white shadow-md'>
          <ul className='flex flex-col space-y-2 px-4 py-2'>
            <li>
              <Link to="/about" className='text-gray-600 hover:text-red-500'>About Us</Link>
            </li>
            <li>
              <Link to="/service" className='text-gray-600 hover:text-red-500'>Services</Link>
            </li>
            <li>
              <Link to="/feature" className='text-gray-600 hover:text-red-500'>Feature</Link>
            </li>
            <li>
              <Link to="/blog" className='text-gray-600 hover:text-red-500'>Blog</Link>
            </li>
            <li>
              <Link to="/careers" className='text-gray-600 hover:text-red-500'>Careers</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;