import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from '../components/Navbar';
import { LuFileText, LuArrowRight, LuCheck, LuStar, LuZap, LuCrown } from 'react-icons/lu';

const Templates = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [filterCategory, setFilterCategory] = useState('all');

  const handleUseTemplate = (templateId) => {
    if (!user) {
      navigate('/');
    } else {
      navigate('/dashboard');
    }
  };

  const templates = [
    {
      id: 'modern-professional',
      name: 'Modern Professional',
      category: 'professional',
      description: 'Clean and ATS-friendly design perfect for corporate jobs and traditional industries',
      icon: '💼',
      color: 'from-blue-400 to-blue-600',
      features: [
        'ATS-optimized layout',
        'Single column design',
        'Professional typography',
        'Perfect for corporate roles'
      ],
      bestFor: ['Software Engineers', 'Business Analysts', 'Project Managers', 'Accountants'],
      premium: false,
      popular: true
    },
    {
      id: 'creative-designer',
      name: 'Creative Designer',
      category: 'creative',
      description: 'Eye-catching two-column layout ideal for creative professionals and designers',
      icon: '🎨',
      color: 'from-purple-400 to-purple-600',
      features: [
        'Two-column layout',
        'Profile photo support',
        'Visual skills section',
        'Modern aesthetic'
      ],
      bestFor: ['Graphic Designers', 'UI/UX Designers', 'Marketing Managers', 'Content Creators'],
      premium: false,
      popular: true
    },
    {
      id: 'executive-classic',
      name: 'Executive Classic',
      category: 'executive',
      description: 'Traditional format designed for senior-level and executive positions',
      icon: '👔',
      color: 'from-green-400 to-green-600',
      features: [
        'Traditional layout',
        'Emphasis on experience',
        'Professional appearance',
        'Executive-level focus'
      ],
      bestFor: ['C-Level Executives', 'Senior Managers', 'Directors', 'VPs'],
      premium: false,
      popular: false
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      category: 'modern',
      description: 'Ultra-clean design with maximum white space for a contemporary look',
      icon: '✨',
      color: 'from-gray-400 to-gray-600',
      features: [
        'Minimal design',
        'Maximum readability',
        'Modern typography',
        'Distraction-free'
      ],
      bestFor: ['Tech Professionals', 'Startups', 'Modern Industries'],
      premium: true,
      popular: false
    },
    {
      id: 'bold-impact',
      name: 'Bold Impact',
      category: 'creative',
      description: 'Make a strong first impression with bold typography and striking design',
      icon: '⚡',
      color: 'from-orange-400 to-red-600',
      features: [
        'Bold typography',
        'High contrast',
        'Eye-catching design',
        'Stand out easily'
      ],
      bestFor: ['Sales Professionals', 'Marketing', 'Creative Roles'],
      premium: true,
      popular: false
    },
    {
      id: 'elegant-serif',
      name: 'Elegant Serif',
      category: 'professional',
      description: 'Sophisticated serif fonts for a refined, polished appearance',
      icon: '📜',
      color: 'from-indigo-400 to-indigo-600',
      features: [
        'Serif typography',
        'Elegant styling',
        'Timeless design',
        'Professional polish'
      ],
      bestFor: ['Legal Professionals', 'Academia', 'Finance', 'Consulting'],
      premium: true,
      popular: false
    },
    {
      id: 'tech-modern',
      name: 'Tech Modern',
      category: 'modern',
      description: 'Designed specifically for tech professionals with a modern edge',
      icon: '💻',
      color: 'from-cyan-400 to-blue-600',
      features: [
        'Tech-focused layout',
        'Skills showcase',
        'Project highlights',
        'GitHub/portfolio links'
      ],
      bestFor: ['Software Developers', 'Data Scientists', 'DevOps', 'IT Professionals'],
      premium: true,
      popular: true
    },
    {
      id: 'infographic',
      name: 'Infographic Style',
      category: 'creative',
      description: 'Visual resume with charts and icons for maximum impact',
      icon: '📊',
      color: 'from-pink-400 to-purple-600',
      features: [
        'Visual elements',
        'Chart integration',
        'Icon support',
        'Highly visual'
      ],
      bestFor: ['Designers', 'Marketers', 'Creative Directors', 'Brand Managers'],
      premium: true,
      popular: false
    },
    {
      id: 'compact-efficient',
      name: 'Compact Efficient',
      category: 'professional',
      description: 'Maximize information density while maintaining readability',
      icon: '📋',
      color: 'from-teal-400 to-green-600',
      features: [
        'Space-efficient',
        'Comprehensive layout',
        'Fit more content',
        'Still readable'
      ],
      bestFor: ['Experienced Professionals', 'Academic CVs', 'Research Positions'],
      premium: true,
      popular: false
    },
    {
      id: 'startup-friendly',
      name: 'Startup Friendly',
      category: 'modern',
      description: 'Perfect for startup culture with a casual yet professional vibe',
      icon: '🚀',
      color: 'from-yellow-400 to-orange-600',
      features: [
        'Casual professional',
        'Startup culture fit',
        'Modern aesthetic',
        'Personality showcase'
      ],
      bestFor: ['Startup Roles', 'Growth Hackers', 'Product Managers', 'Early-stage Companies'],
      premium: true,
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'professional', name: 'Professional' },
    { id: 'creative', name: 'Creative' },
    { id: 'modern', name: 'Modern' },
    { id: 'executive', name: 'Executive' }
  ];

  const filteredTemplates = filterCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === filterCategory);

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navbar />

      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <div className='inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-6'>
            🎨 Professional Templates
          </div>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
            Choose Your Perfect{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600'>
              Resume Template
            </span>
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            All templates are ATS-friendly, customizable, and designed by professionals 
            to help you make the best first impression.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilterCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                filterCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24'>
          {filteredTemplates.map((template) => (
            <div 
              key={template.id} 
              className='bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all overflow-hidden group'
            >
              {/* Template Preview */}
              <div className={`h-64 bg-gradient-to-br ${template.color} flex items-center justify-center relative`}>
                <div className='text-8xl'>{template.icon}</div>
                
                {/* Badges */}
                <div className='absolute top-4 left-4 flex flex-col gap-2'>
                  {template.popular && (
                    <div className='bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                      <LuStar className='text-xs' />
                      POPULAR
                    </div>
                  )}
                  {template.premium && (
                    <div className='bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                      <LuCrown className='text-xs' />
                      PREMIUM
                    </div>
                  )}
                </div>
              </div>

              {/* Template Info */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>{template.name}</h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>{template.description}</p>

                {/* Features */}
                <div className='mb-4'>
                  <p className='text-sm font-semibold text-gray-900 mb-2'>Key Features:</p>
                  <ul className='space-y-1'>
                    {template.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className='flex items-center gap-2 text-sm text-gray-700'>
                        <LuCheck className='text-green-500 flex-shrink-0' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className='mb-6'>
                  <p className='text-sm font-semibold text-gray-900 mb-2'>Best For:</p>
                  <div className='flex flex-wrap gap-2'>
                    {template.bestFor.slice(0, 2).map((role, index) => (
                      <span key={index} className='text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full'>
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleUseTemplate(template.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    template.premium
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Use This Template
                  <LuArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <section className='mb-24 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12'>
          <h2 className='text-4xl font-bold text-gray-900 text-center mb-12'>
            All Templates Include
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white rounded-xl p-6 text-center'>
              <div className='text-4xl mb-4'>✅</div>
              <h3 className='font-bold text-gray-900 mb-2'>ATS-Optimized</h3>
              <p className='text-sm text-gray-600'>Pass applicant tracking systems</p>
            </div>
            <div className='bg-white rounded-xl p-6 text-center'>
              <div className='text-4xl mb-4'>🎨</div>
              <h3 className='font-bold text-gray-900 mb-2'>Customizable</h3>
              <p className='text-sm text-gray-600'>Change colors and themes</p>
            </div>
            <div className='bg-white rounded-xl p-6 text-center'>
              <div className='text-4xl mb-4'>📱</div>
              <h3 className='font-bold text-gray-900 mb-2'>Responsive</h3>
              <p className='text-sm text-gray-600'>Works on all devices</p>
            </div>
            <div className='bg-white rounded-xl p-6 text-center'>
              <div className='text-4xl mb-4'>💾</div>
              <h3 className='font-bold text-gray-900 mb-2'>Auto-Save</h3>
              <p className='text-sm text-gray-600'>Never lose your work</p>
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className='mb-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white'>
          <div className='max-w-3xl mx-auto text-center'>
            <LuCrown className='text-5xl mx-auto mb-6' />
            <h2 className='text-4xl font-bold mb-4'>
              Unlock Premium Templates
            </h2>
            <p className='text-xl mb-8 text-purple-100'>
              Get access to 7+ exclusive premium templates designed for maximum impact
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                to='/pricing'
                className='bg-white text-purple-600 text-sm font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2'
              >
                View Pricing
                <LuArrowRight />
              </Link>
              <button
                onClick={() => handleUseTemplate('free')}
                className='bg-transparent border-2 border-white text-white text-sm font-bold px-10 py-4 rounded-lg hover:bg-white/10 transition-all inline-flex items-center gap-2'
              >
                Start with Free
                <LuArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Choose a template and create your professional resume in minutes
          </p>
          <button
            onClick={() => handleUseTemplate('start')}
            className='bg-purple-600 text-white text-sm font-bold px-10 py-4 rounded-lg hover:bg-purple-700 transition-all inline-flex items-center gap-2 cursor-pointer'
          >
            {user ? 'Go to Dashboard' : 'Get Started Free'}
            <LuArrowRight />
          </button>
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

export default Templates;
