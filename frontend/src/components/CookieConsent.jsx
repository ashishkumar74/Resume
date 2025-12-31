import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuCookie, LuX, LuShield } from 'react-icons/lu';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none'>
      <div className='w-full max-w-4xl pointer-events-auto'>
        <div className='bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden'>
          {/* Header */}
          <div className='bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <LuCookie className='text-3xl' />
              <div>
                <h3 className='text-xl font-bold'>Cookie Settings</h3>
                <p className='text-purple-100 text-sm'>We value your privacy</p>
              </div>
            </div>
            <button
              onClick={handleReject}
              className='text-white hover:text-purple-100 transition-colors'
              aria-label='Close'
            >
              <LuX className='text-2xl' />
            </button>
          </div>

          {/* Content */}
          <div className='p-6'>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We use cookies and similar technologies to enhance your browsing experience, 
              analyze site traffic, and personalize content. By clicking "Accept All", 
              you consent to our use of cookies.
            </p>

            {/* Details Section */}
            {showDetails && (
              <div className='bg-gray-50 rounded-xl p-4 mb-4 space-y-4'>
                <div>
                  <h4 className='font-bold text-gray-900 mb-2 flex items-center gap-2'>
                    <LuShield className='text-green-500' />
                    Essential Cookies (Required)
                  </h4>
                  <p className='text-sm text-gray-600'>
                    These cookies are necessary for the website to function and cannot be disabled. 
                    They include authentication, security, and basic functionality.
                  </p>
                </div>

                <div>
                  <h4 className='font-bold text-gray-900 mb-2'>Analytics Cookies (Optional)</h4>
                  <p className='text-sm text-gray-600'>
                    Help us understand how visitors interact with our website by collecting 
                    and reporting anonymous information. This helps us improve the user experience.
                  </p>
                </div>

                <div>
                  <h4 className='font-bold text-gray-900 mb-2'>Marketing Cookies (Optional)</h4>
                  <p className='text-sm text-gray-600'>
                    Used to track visitors across websites to display relevant ads and 
                    marketing campaigns that may be of interest to you.
                  </p>
                </div>
              </div>
            )}

            {/* Toggle Details */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className='text-purple-600 hover:text-purple-700 font-semibold text-sm mb-4 underline'
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3'>
              <button
                onClick={handleAcceptAll}
                className='flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
              >
                Accept All Cookies
              </button>
              <button
                onClick={handleAcceptEssential}
                className='flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors'
              >
                Essential Only
              </button>
              <button
                onClick={handleReject}
                className='flex-1 bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors'
              >
                Reject All
              </button>
            </div>

            {/* Privacy Policy Link */}
            <p className='text-xs text-gray-500 mt-4 text-center'>
              Learn more about how we use cookies in our{' '}
              <Link to='/privacy' className='text-purple-600 hover:text-purple-700 underline'>
                Privacy Policy
              </Link>
              . You can change your preferences anytime in settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
