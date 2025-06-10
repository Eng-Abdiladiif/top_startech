'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Element } from "react-scroll/modules"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from "../../image/Logo.png"
import Image from 'next/image';
import ModeToggle from "../../src/components/ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/', to: "Home" },
    { name: 'Services', href: '/Services' , to:  "Services"},
    { name: 'About', href: '/About', to: "About" },
     { name: 'Price', href: '/Price', to: "Price" },
    { name: 'Contact', href: '/Contact', to: "Contant" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md 
     z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="">

            <Image src={Logo}  width={100}  height={100}
                alt='image'/>
              
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    to = {item.to}
                    active = {true}
                    className="text-gray-700
                    hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className='flex gap-x-10'>
               

                <button className='
                px-5 py-2 bg-orange-600 text-white rounded-lg font-bold
                hover:bg-orange-400 transition-all duration-500 cursor-pointer'>Get Started</button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
           
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md
            hover:text-orange-600 focus:outline-none
               cursor-pointer"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              active = {true}
              className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 