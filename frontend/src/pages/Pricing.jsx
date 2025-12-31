import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from '../components/Navbar';
import { 
  LuCheck, LuArrowRight, LuZap, LuStar, LuCircleHelp, LuCrown, LuShield 
} from 'react-icons/lu';

const Pricing = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!user) {
      navigate('/');
    } else {
      navigate('/dashboard');
    }
  };

  const features = {
    free: [
      'Unlimited resumes',
      '3 professional templates',
      '5 color themes',
      'Auto-save technology',
      'PDF export',
      'Cloud storage',
      'ATS-friendly designs',
      'Mobile responsive',
      'Email support',
      'Regular updates'
    ],
    premium: [
      'Everything in Free',
      '10+ premium templates',
      'Advanced customization',
      'Cover letter builder',
      'LinkedIn profile optimizer',
      'Priority support (24/7)',
      'No ads',
      'Advanced analytics',
      'Interview preparation guide',
      'Career coaching resources'
    ]
  };

  const faqs = [
    {
      question: 'Is Resume Builder really free?',
      answer: 'Yes! Our core features are completely free forever. No credit card required, no hidden fees, no watermarks. Create unlimited resumes and download them as PDF at no cost.'
    },
    {
      question: 'What\'s the difference between Free and Premium?',
      answer: 'The Free plan includes everything you need to create professional resumes. Premium adds advanced features like more templates, cover letter builder, and priority support. Most users find the Free plan sufficient.'
    },
    {
      question: 'Can I cancel my Premium subscription anytime?',
      answer: 'Absolutely! You can cancel your Premium subscription anytime. Even after cancellation, you\'ll retain access to your resumes, though premium-only features will be locked.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for Premium subscriptions. If you\'re not satisfied, contact us within 30 days for a full refund.'
    },
    {
      question: 'Will my resumes be deleted if I don\'t upgrade?',
      answer: 'Never! All your resumes are safe and accessible forever on the Free plan. You can edit and download them anytime without upgrading.'
    },
    {
      question: 'Can I switch between Free and Premium?',
      answer: 'Yes! You can upgrade to Premium anytime to unlock advanced features. If you cancel Premium, you keep access to all resumes created with both plans.'
    }
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navbar />

      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-20'>
          <div className='inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-6'>
            💰 Simple, Transparent Pricing
          </div>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
            Choose Your Plan
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Start for free and upgrade anytime. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className='max-w-6xl mx-auto mb-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Free Plan */}
            <div className='bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-2xl transition-all'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center'>
                  <LuShield className='text-white text-2xl' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900'>Free Forever</h3>
                  <p className='text-gray-600 text-sm'>Perfect for job seekers</p>
                </div>
              </div>

              <div className='mb-6'>
                <div className='flex items-baseline gap-2'>
                  <span className='text-5xl font-bold text-gray-900'>$0</span>
                  <span className='text-gray-600'>/forever</span>
                </div>
                <p className='text-gray-600 mt-2 text-sm'>No credit card required</p>
              </div>

              <button
                onClick={handleGetStarted}
                className='w-full bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-all mb-8 flex items-center justify-center gap-2'
              >
                Get Started Free
                <LuArrowRight />
              </button>

              <div className='space-y-4'>
                <p className='font-semibold text-gray-900 mb-4'>Everything you need:</p>
                {features.free.map((feature, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <LuCheck className='text-green-500 mt-1 flex-shrink-0' />
                    <span className='text-gray-700'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Plan */}
            <div className='bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white hover:shadow-2xl transition-all relative overflow-hidden'>
              <div className='absolute top-4 right-4 bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                <LuCrown className='text-sm' />
                POPULAR
              </div>

              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center'>
                  <LuZap className='text-white text-2xl' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold'>Premium</h3>
                  <p className='text-purple-200 text-sm'>Advanced features & support</p>
                </div>
              </div>

              <div className='mb-6'>
                <div className='flex items-baseline gap-2'>
                  <span className='text-5xl font-bold'>$9.99</span>
                  <span className='text-purple-200'>/month</span>
                </div>
                <p className='text-purple-200 mt-2 text-sm'>Or $79.99/year (save 33%)</p>
              </div>

              <button
                onClick={handleGetStarted}
                className='w-full bg-white text-purple-600 font-semibold py-4 rounded-xl hover:bg-gray-100 transition-all mb-8 flex items-center justify-center gap-2'
              >
                Upgrade to Premium
                <LuArrowRight />
              </button>

              <div className='space-y-4'>
                <p className='font-semibold mb-4'>Everything in Free, plus:</p>
                {features.premium.slice(1).map((feature, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <LuCheck className='text-yellow-400 mt-1 flex-shrink-0' />
                    <span className='text-white'>{feature}</span>
                  </div>
                ))}
              </div>

              <div className='mt-8 p-4 bg-white/10 backdrop-blur rounded-xl'>
                <p className='text-sm text-purple-100'>
                  <LuShield className='inline mr-2' />
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <section className='mb-24 max-w-5xl mx-auto'>
          <h2 className='text-4xl font-bold text-gray-900 text-center mb-12'>
            Detailed Feature Comparison
          </h2>
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gray-50 border-b border-gray-200'>
                  <tr>
                    <th className='px-6 py-4 text-left font-bold text-gray-900'>Feature</th>
                    <th className='px-6 py-4 text-center font-bold text-gray-900'>Free</th>
                    <th className='px-6 py-4 text-center font-bold text-purple-600'>Premium</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  <tr>
                    <td className='px-6 py-4 font-medium text-gray-900'>Number of Resumes</td>
                    <td className='px-6 py-4 text-center text-gray-700'>Unlimited</td>
                    <td className='px-6 py-4 text-center text-purple-600 font-semibold'>Unlimited</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='px-6 py-4 font-medium text-gray-900'>Templates</td>
                    <td className='px-6 py-4 text-center text-gray-700'>3 Templates</td>
                    <td className='px-6 py-4 text-center text-purple-600 font-semibold'>10+ Templates</td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 font-medium text-gray-900'>Color Themes</td>
                    <td className='px-6 py-4 text-center text-gray-700'>5 Themes</td>
                    <td className='px-6 py-4 text-center text-purple-600 font-semibold'>Unlimited</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='px-6 py-4 font-medium text-gray-900'>PDF Export</td>
                    <td className='px-6 py-4 text-center'><LuCheck className='text-green-500 mx-auto' /></td>
                    <td className='px-6 py-4 text-center'><LuCheck className='text-green-500 mx-auto' /></td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 font-medium text-gray-900'>Cover Letter Builder</td>
                    <td className='px-6 py-4 text-center text-gray-400'>—</td>
                    <td className='px-6 py-4 text-center'><LuCheck className='text-green-500 mx-auto' /></td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='px-6 py-4 font-medium text-gray-900'>LinkedIn Optimizer</td>
                    <td className='px-6 py-4 text-center text-gray-400'>—</td>
                    <td className='px-6 py-4 text-center'><LuCheck className='text-green-500 mx-auto' /></td>
                  </tr>
                  <tr>
                    <td className='px-6 py-4 font-medium text-gray-900'>Support</td>
                    <td className='px-6 py-4 text-center text-gray-700'>Email</td>
                    <td className='px-6 py-4 text-center text-purple-600 font-semibold'>24/7 Priority</td>
                  </tr>
                  <tr className='bg-gray-50'>
                    <td className='px-6 py-4 font-medium text-gray-900'>Ads</td>
                    <td className='px-6 py-4 text-center text-gray-700'>Minimal</td>
                    <td className='px-6 py-4 text-center text-purple-600 font-semibold'>Ad-free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='mb-24 max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <LuCircleHelp className='text-5xl text-purple-600 mx-auto mb-4' />
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>
              Everything you need to know about our pricing
            </p>
          </div>

          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <details key={index} className='bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all'>
                <summary className='font-bold text-lg text-gray-900 cursor-pointer'>
                  {faq.question}
                </summary>
                <p className='mt-4 text-gray-600 leading-relaxed'>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className='mb-24 max-w-3xl mx-auto'>
          <div className='bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 text-center border border-purple-100'>
            <div className='flex justify-center gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <LuStar key={i} className='text-yellow-400 fill-yellow-400 text-xl' />
              ))}
            </div>
            <blockquote className='text-xl text-gray-700 leading-relaxed mb-6 italic'>
              "I started with the free plan and it was perfect! After landing my job, 
              I upgraded to Premium to help with cover letters. Best investment ever!"
            </blockquote>
            <div className='flex items-center justify-center gap-3'>
              <div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400'></div>
              <div className='text-left'>
                <div className='font-bold text-gray-900'>Michael Chen</div>
                <div className='text-sm text-gray-600'>Marketing Manager</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white'>
          <h2 className='text-4xl font-bold mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-xl mb-8 text-purple-100'>
            Create your professional resume in minutes
          </p>
          <button
            onClick={handleGetStarted}
            className='bg-white text-purple-600 text-sm font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl cursor-pointer inline-flex items-center gap-2'
          >
            Start Building Free
            <LuArrowRight className='text-lg' />
          </button>
          <p className='text-purple-200 mt-4 text-sm'>
            No credit card required • Upgrade anytime • Cancel anytime
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

export default Pricing;
