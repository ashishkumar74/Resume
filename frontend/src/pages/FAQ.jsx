import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from '../components/Navbar';
import { LuCircleHelp, LuArrowRight, LuSearch, LuFileText, LuDownload, LuPalette, LuShield, LuCreditCard } from 'react-icons/lu';

const FAQ = () => {
  const { user } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: <LuCircleHelp /> },
    { id: 'getting-started', name: 'Getting Started', icon: <LuFileText /> },
    { id: 'features', name: 'Features', icon: <LuPalette /> },
    { id: 'export', name: 'Export & Download', icon: <LuDownload /> },
    { id: 'account', name: 'Account & Security', icon: <LuShield /> },
    { id: 'billing', name: 'Billing & Pricing', icon: <LuCreditCard /> }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I create my first resume?',
      answer: 'Creating your first resume is easy! After signing up, go to your Dashboard and click the "Add New Resume" card. Choose a template you like, give your resume a title, and start filling in your information. The editor auto-saves your progress every 2 seconds.'
    },
    {
      category: 'getting-started',
      question: 'Do I need to create an account to use Resume Builder?',
      answer: 'Yes, you need a free account to create and save resumes. This ensures your data is securely stored and accessible from any device. Signing up takes less than a minute with just your email address.'
    },
    {
      category: 'getting-started',
      question: 'How long does it take to create a resume?',
      answer: 'Most users create a complete, professional resume in 15-20 minutes. If you have your information prepared, you can create one even faster! The intuitive interface makes the process quick and straightforward.'
    },
    {
      category: 'features',
      question: 'How many resume templates are available?',
      answer: 'We offer 3 professionally designed templates in the Free plan: Modern Professional, Creative Designer, and Executive Classic. Premium users get access to 10+ additional templates. Each template can be customized with 5 different color themes.'
    },
    {
      category: 'features',
      question: 'Can I change the template after creating my resume?',
      answer: 'Yes! You can switch templates anytime without losing your content. Open your resume in the editor, click the "Template" button, and select a new template. Your information will be automatically formatted to match the new design.'
    },
    {
      category: 'features',
      question: 'Is my data automatically saved?',
      answer: 'Absolutely! Resume Builder uses auto-save technology that saves your changes every 2 seconds. You\'ll see a "Saving..." indicator when your data is being saved. This means you never have to worry about losing your work.'
    },
    {
      category: 'features',
      question: 'Can I add a profile photo to my resume?',
      answer: 'Yes! In the Personal Information section, you can upload a profile photo. This is optional and works best with certain templates like the Creative Designer. We recommend using a professional headshot.'
    },
    {
      category: 'features',
      question: 'What sections can I include in my resume?',
      answer: 'You can add multiple sections including: Personal Information, Professional Summary, Work Experience, Education, Skills, Projects, Certifications, and Languages. All sections except Personal Information are optional. You can reorder sections by dragging and dropping.'
    },
    {
      category: 'features',
      question: 'How do I change the color theme of my resume?',
      answer: 'In the resume editor, click the "Theme" button in the top toolbar. Choose from 5 professional color schemes: Blue, Purple, Green, Orange, and Red. The color change is applied instantly to your entire resume.'
    },
    {
      category: 'export',
      question: 'Can I download my resume as a PDF?',
      answer: 'Yes! Open your resume in the editor and click the "Download PDF" button in the top right corner. Your resume will be downloaded in high-quality PDF format, ready to send to employers. Downloads are unlimited and completely free.'
    },
    {
      category: 'export',
      question: 'What format is the downloaded resume?',
      answer: 'Resumes are exported as PDF files, which is the industry standard for job applications. PDFs preserve formatting across all devices and are accepted by all employers and Applicant Tracking Systems (ATS).'
    },
    {
      category: 'export',
      question: 'Can I print my resume directly?',
      answer: 'Yes! You can either download the PDF and print it, or use your browser\'s print function directly from the resume preview. We recommend downloading the PDF first for best print quality.'
    },
    {
      category: 'export',
      question: 'Are your resumes ATS-friendly?',
      answer: 'Absolutely! All our templates are designed to be compatible with Applicant Tracking Systems (ATS). We use proper formatting, standard fonts, and optimized layouts to ensure your resume passes ATS screening and reaches human recruiters.'
    },
    {
      category: 'account',
      question: 'How do I edit my profile information?',
      answer: 'Click on your profile picture or name in the top right corner, then select "Profile" from the dropdown menu. You can update your name, email, and profile photo from there.'
    },
    {
      category: 'account',
      question: 'Can I create multiple resumes?',
      answer: 'Yes! You can create unlimited resumes, even on the Free plan. This is perfect for tailoring different resumes for different job applications or industries. All your resumes are saved in your Dashboard.'
    },
    {
      category: 'account',
      question: 'How do I delete a resume?',
      answer: 'In your Dashboard, click the three-dot menu icon on any resume card and select "Delete". You\'ll be asked to confirm before the resume is permanently deleted. Note: This action cannot be undone.'
    },
    {
      category: 'account',
      question: 'Is my data secure?',
      answer: 'Yes! We take security seriously. Your data is encrypted both in transit and at rest. We use industry-standard security measures and never share your personal information with third parties. Read our Privacy Policy for complete details.'
    },
    {
      category: 'account',
      question: 'Can I export my data?',
      answer: 'Yes! You can download all your resumes as PDFs anytime. If you need your raw data in another format, contact our support team and we\'ll assist you with data export.'
    },
    {
      category: 'account',
      question: 'How do I delete my account?',
      answer: 'Go to your Profile page and scroll down to find the "Delete Account" button. Note that this will permanently delete all your resumes and data. If you\'re having issues, please contact support first – we\'re here to help!'
    },
    {
      category: 'billing',
      question: 'Is Resume Builder really free?',
      answer: 'Yes! Our core features are completely free forever – no credit card required, no hidden fees, no watermarks. You can create unlimited resumes, use 3 professional templates, and download PDFs at no cost. We also offer a Premium plan with advanced features for power users.'
    },
    {
      category: 'billing',
      question: 'What\'s included in the Premium plan?',
      answer: 'Premium includes everything in Free plus: 10+ additional templates, cover letter builder, LinkedIn profile optimizer, priority 24/7 support, ad-free experience, advanced analytics, and career resources. See our Pricing page for full details.'
    },
    {
      category: 'billing',
      question: 'How much does Premium cost?',
      answer: 'Premium is $9.99/month or $79.99/year (save 33%). We offer a 30-day money-back guarantee, so you can try it risk-free. No long-term commitment required – cancel anytime.'
    },
    {
      category: 'billing',
      question: 'Can I cancel my Premium subscription?',
      answer: 'Yes! You can cancel your Premium subscription anytime from your Profile page. Even after cancellation, you\'ll retain access to all your resumes, though premium-only features will be locked. No cancellation fees or penalties.'
    },
    {
      category: 'billing',
      question: 'Do you offer refunds?',
      answer: 'Yes! We offer a 30-day money-back guarantee for Premium subscriptions. If you\'re not satisfied for any reason, contact us within 30 days of your purchase for a full refund.'
    },
    {
      category: 'billing',
      question: 'Will my resumes be deleted if I cancel Premium?',
      answer: 'Never! All your resumes remain safe and accessible on the Free plan. You can continue editing and downloading them. You\'ll only lose access to premium-exclusive features like additional templates and cover letter builder.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navbar />

      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <LuCircleHelp className='text-6xl text-purple-600 mx-auto mb-6' />
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Frequently Asked Questions
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Find answers to common questions about Resume Builder
          </p>
        </div>

        {/* Search Bar */}
        <div className='max-w-2xl mx-auto mb-12'>
          <div className='relative'>
            <LuSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl' />
            <input
              type='text'
              placeholder='Search for answers...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none text-gray-900 text-lg'
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className='max-w-4xl mx-auto'>
          {filteredFaqs.length > 0 ? (
            <div className='space-y-4'>
              {filteredFaqs.map((faq, index) => (
                <details 
                  key={index} 
                  className='bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all group'
                >
                  <summary className='font-bold text-lg text-gray-900 cursor-pointer flex items-start gap-3'>
                    <span className='text-purple-600 flex-shrink-0'>Q:</span>
                    <span className='flex-1'>{faq.question}</span>
                    <span className='text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0'>▼</span>
                  </summary>
                  <div className='mt-4 pl-8 text-gray-600 leading-relaxed'>
                    <span className='text-purple-600 font-bold'>A:</span> {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <LuSearch className='text-6xl text-gray-300 mx-auto mb-4' />
              <p className='text-xl text-gray-500'>No questions match your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className='mt-4 text-purple-600 hover:text-purple-700 font-semibold'
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Quick Links Section */}
        <section className='mt-20 max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Still Have Questions?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Link
              to='/contact'
              className='bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all text-center group'
            >
              <div className='w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                <LuCircleHelp className='text-3xl text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Contact Support</h3>
              <p className='text-gray-600 mb-4'>Get help from our friendly team</p>
              <span className='text-purple-600 font-semibold flex items-center justify-center gap-2'>
                Contact Us <LuArrowRight />
              </span>
            </Link>

            <Link
              to='/help'
              className='bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all text-center group'
            >
              <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                <LuFileText className='text-3xl text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Help Center</h3>
              <p className='text-gray-600 mb-4'>Browse guides and tutorials</p>
              <span className='text-blue-600 font-semibold flex items-center justify-center gap-2'>
                Visit Help Center <LuArrowRight />
              </span>
            </Link>

            <Link
              to={user ? '/dashboard' : '/'}
              className='bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all text-center group'
            >
              <div className='w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                <LuFileText className='text-3xl text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Start Building</h3>
              <p className='text-gray-600 mb-4'>Create your resume today</p>
              <span className='text-green-600 font-semibold flex items-center justify-center gap-2'>
                Get Started <LuArrowRight />
              </span>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className='mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white'>
          <h2 className='text-4xl font-bold mb-4'>
            Ready to Create Your Resume?
          </h2>
          <p className='text-xl mb-8 text-purple-100'>
            Join thousands of job seekers who trust Resume Builder
          </p>
          <Link
            to={user ? '/dashboard' : '/'}
            className='inline-flex items-center gap-2 bg-white text-purple-600 text-sm font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl'
          >
            {user ? 'Go to Dashboard' : 'Get Started Free'}
            <LuArrowRight className='text-lg' />
          </Link>
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

export default FAQ;
