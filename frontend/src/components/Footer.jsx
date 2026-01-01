import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LuMail, LuGithub, LuTwitter, LuLinkedin, LuFacebook, 
  LuInstagram, LuArrowUp 
} from 'react-icons/lu';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-4'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-4'>
          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <h3 className='text-2xl font-bold mb-4'>RESUME BUILDER</h3>
            <p className='text-gray-400 leading-relaxed mb-6'>
              Create professional resumes that get you hired. Fast, easy, and completely free. 
              Join thousands of job seekers who trust our platform.
            </p>
            <div className='flex gap-4'>
              <a 
                href='https://twitter.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors'
                aria-label='Twitter'
              >
                <LuTwitter className='text-lg' />
              </a>
              <a 
                href='https://linkedin.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors'
                aria-label='LinkedIn'
              >
                <LuLinkedin className='text-lg' />
              </a>
              <a 
                href='https://facebook.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors'
                aria-label='Facebook'
              >
                <LuFacebook className='text-lg' />
              </a>
              <a 
                href='https://instagram.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors'
                aria-label='Instagram'
              >
                <LuInstagram className='text-lg' />
              </a>
              <a 
                href='https://github.com' 
                target='_blank' 
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors'
                aria-label='GitHub'
              >
                <LuGithub className='text-lg' />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className='font-bold mb-4 text-lg'>Product</h4>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link to='/features' className='hover:text-white transition-colors'>
                  Features
                </Link>
              </li>
              <li>
                <Link to='/templates' className='hover:text-white transition-colors'>
                  Templates
                </Link>
              </li>
              <li>
                <Link to='/pricing' className='hover:text-white transition-colors'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to='/dashboard' className='hover:text-white transition-colors'>
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className='font-bold mb-4 text-lg'>Company</h4>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link to='/about' className='hover:text-white transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-white transition-colors'>
                  Contact
                </Link>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className='font-bold mb-4 text-lg'>Support</h4>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link to='/help' className='hover:text-white transition-colors'>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to='/faq' className='hover:text-white transition-colors'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to='/privacy' className='hover:text-white transition-colors'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/terms' className='hover:text-white transition-colors'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className='border-t border-gray-800 pt-4 mb-4'>
          <div className='max-w-2xl mx-auto text-center'>
            <h4 className='font-bold mb-2 text-lg'>Stay Updated</h4>
            <p className='text-gray-400 mb-4'>
              Get resume tips, career advice, and product updates delivered to your inbox
            </p>
            <div className='flex gap-2 max-w-md mx-auto'>
              <div className='relative flex-1'>
                <LuMail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-600'
                />
              </div>
              <button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm text-center md:text-left'>
            © {currentYear} Resume Builder. Made with <span className='text-red-500'>❤</span> for job seekers everywhere.
          </p>
          <button
            onClick={scrollToTop}
            className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm'
            aria-label='Scroll to top'
          >
            <span>Back to top</span>
            <LuArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
