import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LuHouse, LuFileQuestion, LuSearch, LuCircleHelp } from 'react-icons/lu';

const NotFound = () => {
  const popularLinks = [
    { name: 'Create Resume', path: '/dashboard', icon: <LuFileQuestion /> },
    { name: 'Templates', path: '/templates', icon: <LuFileQuestion /> },
    { name: 'Help Center', path: '/help', icon: <LuCircleHelp /> },
    { name: 'Contact Us', path: '/contact', icon: <LuCircleHelp /> }
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className='flex-1 flex items-center justify-center px-4 py-16'>
        <div className='text-center max-w-2xl'>
          <div className='mb-8'>
            <div className='relative inline-block'>
              <div className='text-9xl font-bold text-purple-600 mb-4'>404</div>
              <LuFileQuestion className='absolute -top-4 -right-8 text-5xl text-purple-300 animate-bounce' />
            </div>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Oops! Page Not Found</h1>
            <p className='text-xl text-gray-600 mb-8'>
              The page you're looking for seems to have wandered off. Don't worry, 
              we'll help you find your way back!
            </p>
          </div>

          {/* Popular Links */}
          <div className='mb-12'>
            <h2 className='text-lg font-semibold text-gray-900 mb-4'>Popular Pages</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {popularLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className='flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all group'
                >
                  <div className='text-2xl text-purple-600 group-hover:scale-110 transition-transform'>
                    {link.icon}
                  </div>
                  <span className='text-sm font-medium text-gray-900'>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Link
              to='/'
              className='flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl font-semibold'
            >
              <LuHouse className='text-lg' />
              Go to Home
            </Link>
            <Link
              to='/dashboard'
              className='flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all font-semibold'
            >
              <LuFileQuestion className='text-lg' />
              Go to Dashboard
            </Link>
          </div>

          {/* Help Text */}
          <div className='text-sm text-gray-500'>
            <p>
              Still can't find what you're looking for?{' '}
              <Link to='/contact' className='text-purple-600 hover:underline font-semibold'>
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
