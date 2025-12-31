import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import ProfileInfoCards from './Cards/ProfileInfoCards';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import Modal from './Modal';
import { LuMenu, LuX } from 'react-icons/lu';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className='container mx-auto px-4 py-6 flex justify-between items-center border-b border-gray-200'>
        <Link to='/' className='text-2xl font-bold text-gray-900'>
          RESUME BUILDER
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          <Link to='/' className='text-gray-600 hover:text-purple-600 transition'>
            Home
          </Link>
          <Link to='/features' className='text-gray-600 hover:text-purple-600 transition'>
            Features
          </Link>
          <Link to='/templates' className='text-gray-600 hover:text-purple-600 transition'>
            Templates
          </Link>
          <Link to='/pricing' className='text-gray-600 hover:text-purple-600 transition'>
            Pricing
          </Link>
          <Link to='/faq' className='text-gray-600 hover:text-purple-600 transition'>
            FAQ
          </Link>
          <Link to='/contact' className='text-gray-600 hover:text-purple-600 transition'>
            Contact
          </Link>
        </nav>

        {/* Auth Section */}
        <div className='hidden md:flex items-center'>
          {user ? (
            <ProfileInfoCards />
          ) : (
            <button
              className='bg-purple-600 text-sm font-semibold text-white px-7 py-2.5 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer shadow-lg shadow-purple-600/20'
              onClick={() => setOpenAuthModal(true)}
            >
              Login/Signup
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-gray-900'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label='Toggle menu'
        >
          {mobileMenuOpen ? <LuX className='text-2xl' /> : <LuMenu className='text-2xl' />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white border-b border-gray-200'>
          <nav className='container mx-auto px-4 py-4 flex flex-col gap-4'>
            <Link
              to='/'
              className='text-gray-600 hover:text-purple-600 transition py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to='/features'
              className='text-gray-600 hover:text-purple-600 transition py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to='/templates'
              className='text-gray-600 hover:text-purple-600 transition py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link
              to='/pricing'
              className='text-gray-600 hover:text-purple-600 transition py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to='/faq'
              className='text-gray-600 hover:text-purple-600 transition py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to='/contact'
              className='text-gray-600 hover:text-purple-600 transition py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {!user && (
              <button
                className='bg-purple-600 text-sm font-semibold text-white px-7 py-2.5 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer mt-2'
                onClick={() => {
                  setOpenAuthModal(true);
                  setMobileMenuOpen(false);
                }}
              >
                Login/Signup
              </button>
            )}
          </nav>
        </div>
      )}

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
