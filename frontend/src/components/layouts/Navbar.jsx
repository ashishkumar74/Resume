import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCards";
import { Link, useLocation } from 'react-router-dom';
import { LuFileText, LuCircleHelp } from 'react-icons/lu';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/dashboard', label: 'My Resumes', icon: <LuFileText /> },
    { path: '/help', label: 'Help', icon: <LuCircleHelp /> },
  ];

  return (
    <div className='h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30'>
        <div className='container mx-auto flex items-center justify-between gap-5'>
            <div className='flex items-center gap-8'>
              <Link to='/dashboard'>
                <h2 className='text-lg md:text-xl font-medium text-black leading-5'>
                    Resume Builder
                </h2>
              </Link>

              <nav className='hidden md:flex items-center gap-1'>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                      location.pathname === link.path
                        ? 'bg-purple-50 text-purple-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <ProfileInfoCard />
        </div>
    </div>
  )
}

export default Navbar