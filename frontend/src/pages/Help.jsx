import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layouts/DashboardLayout';
import { LuFileText, LuDownload, LuPalette, LuSave, LuShare2, LuCircleHelp } from 'react-icons/lu';

const Help = () => {
  const faqs = [
    {
      question: 'How do I create a new resume?',
      answer: 'Go to your Dashboard and click the "Add New Resume" card. Choose a template, give your resume a title, and start filling in your information.'
    },
    {
      question: 'Can I download my resume as a PDF?',
      answer: 'Yes! Open your resume in the editor and click the "Download PDF" button in the top right corner. Your resume will be downloaded in high-quality PDF format.'
    },
    {
      question: 'How many resume templates are available?',
      answer: 'We offer 3 professionally designed templates: Modern Professional, Creative Designer, and Executive Classic. Each template can be customized with 5 different color themes.'
    },
    {
      question: 'Is my data automatically saved?',
      answer: 'Yes! The resume editor automatically saves your changes every 2 seconds. You\'ll see a "Saving..." indicator when your data is being saved.'
    },
    {
      question: 'Can I edit my resume after creating it?',
      answer: 'Absolutely! Click on any resume card in your Dashboard to open and edit it. All your changes are saved automatically.'
    },
    {
      question: 'How do I change the color theme?',
      answer: 'In the resume editor, click the "Theme" button in the top toolbar. Choose from 5 professional color schemes to match your personal style.'
    },
    {
      question: 'Can I add a profile photo?',
      answer: 'Yes! In the Personal Information section, you can upload a profile photo. This is optional and works best with the Creative Designer template.'
    },
    {
      question: 'What sections can I include in my resume?',
      answer: 'You can add: Personal Information, Professional Summary, Work Experience, Education, Skills, Projects, Certifications, and Languages. All sections except Personal Information are optional.'
    }
  ];

  const features = [
    {
      icon: <LuFileText className='text-2xl' />,
      title: 'Multiple Templates',
      description: 'Choose from professional templates designed for different industries and career levels.'
    },
    {
      icon: <LuPalette className='text-2xl' />,
      title: 'Customizable Themes',
      description: 'Personalize your resume with 5 different color themes to match your style.'
    },
    {
      icon: <LuSave className='text-2xl' />,
      title: 'Auto-Save',
      description: 'Your work is automatically saved every few seconds. Never lose your progress.'
    },
    {
      icon: <LuDownload className='text-2xl' />,
      title: 'PDF Export',
      description: 'Download your resume as a high-quality PDF ready to send to employers.'
    }
  ];

  return (
    <DashboardLayout>
      <div className='max-w-5xl mx-auto py-8 px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <LuCircleHelp className='text-5xl text-purple-600 mx-auto mb-4' />
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Help & Support</h1>
          <p className='text-gray-600'>Everything you need to know about using Resume Builder</p>
        </div>

        {/* Quick Links */}
        <div className='bg-purple-50 rounded-lg p-6 mb-12'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Quick Links</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Link
              to='/dashboard'
              className='flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition'
            >
              <LuFileText className='text-2xl text-purple-600' />
              <div>
                <h3 className='font-semibold text-gray-900'>Create Resume</h3>
                <p className='text-sm text-gray-600'>Start building your resume</p>
              </div>
            </Link>
            <a
              href='mailto:support@resumebuilder.com'
              className='flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition'
            >
              <LuCircleHelp className='text-2xl text-purple-600' />
              <div>
                <h3 className='font-semibold text-gray-900'>Contact Support</h3>
                <p className='text-sm text-gray-600'>Get help from our team</p>
              </div>
            </a>
            <Link
              to='/profile'
              className='flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition'
            >
              <LuShare2 className='text-2xl text-purple-600' />
              <div>
                <h3 className='font-semibold text-gray-900'>Profile Settings</h3>
                <p className='text-sm text-gray-600'>Update your account</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Features Overview */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Key Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div key={index} className='bg-white rounded-lg p-6 border border-gray-200'>
                <div className='text-purple-600 mb-3'>{feature.icon}</div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div key={index} className='bg-white rounded-lg p-6 border border-gray-200'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{faq.question}</h3>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className='mt-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-white text-center'>
          <h2 className='text-2xl font-bold mb-2'>Still Need Help?</h2>
          <p className='mb-6'>Our support team is here to assist you</p>
          <a
            href='mailto:support@resumebuilder.com'
            className='inline-block px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition font-semibold'
          >
            Contact Support
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Help;
