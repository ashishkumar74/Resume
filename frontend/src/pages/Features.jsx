import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from '../components/Navbar';
import { 
  LuFileText, LuDownload, LuPalette, LuSave, LuZap, LuShield, 
  LuClock, LuGlobe, LuSmartphone, LuLayoutGrid, LuCircleCheck, 
  LuArrowRight, LuStar, LuRefreshCw, LuLayers 
} from 'react-icons/lu';

const Features = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!user) {
      navigate('/');
    } else {
      navigate('/dashboard');
    }
  };

  const mainFeatures = [
    {
      icon: <LuFileText className='text-3xl' />,
      title: 'Professional Templates',
      description: 'Choose from 3 expertly designed resume templates tailored for different industries and career levels.',
      color: 'from-blue-500 to-blue-600',
      benefits: [
        'ATS-optimized layouts',
        'Modern and classic designs',
        'Industry-specific formats',
        'One-page and multi-page options'
      ]
    },
    {
      icon: <LuPalette className='text-3xl' />,
      title: 'Custom Color Themes',
      description: 'Personalize your resume with 5 professional color schemes that match your personal brand.',
      color: 'from-purple-500 to-purple-600',
      benefits: [
        '5 curated color palettes',
        'Professional color combinations',
        'Consistent styling throughout',
        'Easy one-click theme switching'
      ]
    },
    {
      icon: <LuSave className='text-3xl' />,
      title: 'Auto-Save Technology',
      description: 'Never lose your work with automatic cloud saving every 2 seconds as you type.',
      color: 'from-green-500 to-green-600',
      benefits: [
        'Real-time auto-saving',
        'Cloud-based storage',
        'Work from anywhere',
        'No manual save required'
      ]
    },
    {
      icon: <LuDownload className='text-3xl' />,
      title: 'High-Quality PDF Export',
      description: 'Download your resume as a professional PDF ready to send to employers.',
      color: 'from-orange-500 to-orange-600',
      benefits: [
        'Print-ready quality',
        'Optimized file size',
        'Perfect formatting preserved',
        'Unlimited downloads'
      ]
    },
    {
      icon: <LuZap className='text-3xl' />,
      title: 'ATS-Friendly',
      description: 'Our templates are optimized to pass Applicant Tracking Systems used by 99% of companies.',
      color: 'from-yellow-500 to-yellow-600',
      benefits: [
        'Keyword optimization',
        'Proper formatting',
        'Compatible with all ATS',
        'Increased interview chances'
      ]
    },
    {
      icon: <LuShield className='text-3xl' />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and secure. We never share your information with third parties.',
      color: 'from-indigo-500 to-indigo-600',
      benefits: [
        'End-to-end encryption',
        'GDPR compliant',
        'No data selling',
        'Secure cloud storage'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <LuClock />,
      title: 'Quick Creation',
      description: 'Build a complete professional resume in just 15-20 minutes'
    },
    {
      icon: <LuGlobe />,
      title: 'Access Anywhere',
      description: 'Work on your resume from any device with internet connection'
    },
    {
      icon: <LuSmartphone />,
      title: 'Mobile Responsive',
      description: 'Edit and preview your resume on smartphones and tablets'
    },
    {
      icon: <LuLayoutGrid />,
      title: 'Section Management',
      description: 'Add, remove, or reorder resume sections with ease'
    },
    {
      icon: <LuRefreshCw />,
      title: 'Unlimited Updates',
      description: 'Edit and update your resume anytime without restrictions'
    },
    {
      icon: <LuLayers />,
      title: 'Multiple Resumes',
      description: 'Create and manage unlimited resumes for different job applications'
    }
  ];

  const comparisonFeatures = [
    { feature: 'Professional Templates', us: true, others: 'Limited' },
    { feature: 'ATS-Friendly Designs', us: true, others: 'Sometimes' },
    { feature: 'Auto-Save', us: true, others: false },
    { feature: 'Unlimited Downloads', us: true, others: false },
    { feature: 'No Watermarks', us: true, others: false },
    { feature: 'Free Forever', us: true, others: 'Trial Only' },
    { feature: 'Multiple Resumes', us: true, others: 'Paid Feature' },
    { feature: 'Cloud Storage', us: true, others: 'Paid Feature' },
    { feature: 'Custom Themes', us: true, others: 'Paid Feature' },
    { feature: 'Priority Support', us: true, others: 'Paid Feature' }
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navbar />

      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-20'>
          <div className='inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-6'>
            ⚡ Powerful Features
          </div>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
            Everything You Need to Build the{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600'>
              Perfect Resume
            </span>
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            From professional templates to ATS optimization, we've packed Resume Builder 
            with features that help you stand out and land more interviews.
          </p>
        </div>

        {/* Main Features Grid */}
        <section className='mb-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {mainFeatures.map((feature, index) => (
              <div key={index} className='bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all p-8'>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>{feature.title}</h3>
                <p className='text-gray-600 mb-6 leading-relaxed'>{feature.description}</p>
                <ul className='space-y-2'>
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className='flex items-start gap-2 text-sm text-gray-700'>
                      <LuCircleCheck className='text-green-500 mt-0.5 flex-shrink-0' />
                      <span>{benefit}</span>
                    </li>
                  ))})
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className='mb-24 bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-12'>
          <h2 className='text-4xl font-bold text-gray-900 text-center mb-12'>Even More Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {additionalFeatures.map((feature, index) => (
              <div key={index} className='bg-white rounded-xl p-6 hover:shadow-lg transition-all'>
                <div className='text-3xl text-purple-600 mb-4'>{feature.icon}</div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{feature.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className='mb-24'>
          <h2 className='text-4xl font-bold text-gray-900 text-center mb-4'>
            Why Choose Resume Builder?
          </h2>
          <p className='text-xl text-gray-600 text-center mb-12'>
            See how we compare to other resume builders
          </p>
          <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-purple-600 text-white'>
                  <tr>
                    <th className='px-6 py-4 text-left text-lg font-bold'>Feature</th>
                    <th className='px-6 py-4 text-center text-lg font-bold'>Resume Builder</th>
                    <th className='px-6 py-4 text-center text-lg font-bold'>Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className='px-6 py-4 font-medium text-gray-900'>{item.feature}</td>
                      <td className='px-6 py-4 text-center'>
                        {item.us === true ? (
                          <LuCircleCheck className='text-green-500 text-2xl mx-auto' />
                        ) : (
                          <span className='text-purple-600 font-semibold'>{item.us}</span>
                        )}
                      </td>
                      <td className='px-6 py-4 text-center'>
                        {item.others === true ? (
                          <LuCircleCheck className='text-green-500 text-2xl mx-auto' />
                        ) : item.others === false ? (
                          <span className='text-red-500 text-2xl'>✕</span>
                        ) : (
                          <span className='text-gray-500 text-sm'>{item.others}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='mb-24'>
          <div className='bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white'>
            <h2 className='text-4xl font-bold text-center mb-12'>Trusted by Thousands</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              <div>
                <div className='text-5xl font-bold mb-2'>10K+</div>
                <div className='text-purple-200'>Resumes Created</div>
              </div>
              <div>
                <div className='text-5xl font-bold mb-2'>95%</div>
                <div className='text-purple-200'>Success Rate</div>
              </div>
              <div>
                <div className='text-5xl font-bold mb-2'>4.9</div>
                <div className='text-purple-200'>Average Rating</div>
              </div>
              <div>
                <div className='text-5xl font-bold mb-2'>100%</div>
                <div className='text-purple-200'>Free Forever</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className='mb-24'>
          <div className='max-w-3xl mx-auto text-center'>
            <div className='flex justify-center gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <LuStar key={i} className='text-yellow-400 fill-yellow-400 text-2xl' />
              ))}
            </div>
            <blockquote className='text-2xl text-gray-700 leading-relaxed mb-6 italic'>
              "Resume Builder has all the features I needed without any of the complexity. 
              I created my resume in 20 minutes and had 3 interview calls within a week!"
            </blockquote>
            <div className='flex items-center justify-center gap-3'>
              <div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400'></div>
              <div className='text-left'>
                <div className='font-bold text-gray-900'>Sarah Johnson</div>
                <div className='text-sm text-gray-600'>Software Engineer at Tech Corp</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white'>
          <h2 className='text-4xl font-bold mb-4'>
            Ready to Experience These Features?
          </h2>
          <p className='text-xl mb-8 text-purple-100'>
            Join thousands of professionals creating amazing resumes
          </p>
          <button
            onClick={handleGetStarted}
            className='bg-white text-purple-600 text-sm font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl cursor-pointer inline-flex items-center gap-2'
          >
            {user ? 'Go to Dashboard' : 'Get Started Free'}
            <LuArrowRight className='text-lg' />
          </button>
          <p className='text-purple-200 mt-4 text-sm'>
            No credit card required • Free forever • No hidden fees
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-gray-400'>
            © 2025 Resume Builder. Made with <span className='text-red-500'>❤</span> for job seekers everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Features;
