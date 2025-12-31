import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LuTarget, LuHeart, LuUsers, LuAward, LuArrowRight } from 'react-icons/lu';

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navbar />

      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-20'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            About Resume Builder
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            We're on a mission to help job seekers create professional resumes that open doors 
            to their dream careers. Simple, powerful, and completely free.
          </p>
        </div>

        {/* Mission Section */}
        <section className='mb-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6'>
                <LuTarget className='text-3xl text-white' />
              </div>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Mission</h2>
              <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                We believe that everyone deserves access to professional resume building tools, 
                regardless of their budget or technical skills.
              </p>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Our platform empowers job seekers worldwide to create stunning, ATS-friendly resumes 
                that help them stand out in today's competitive job market.
              </p>
            </div>
            <div className='bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-12 text-center'>
              <div className='text-6xl font-bold text-purple-600 mb-4'>10,000+</div>
              <p className='text-xl text-gray-700 font-semibold'>Resumes Created</p>
              <p className='text-gray-600 mt-2'>Helping professionals worldwide</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='mb-20'>
          <h2 className='text-4xl font-bold text-gray-900 text-center mb-12'>Our Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all'>
              <div className='w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6'>
                <LuHeart className='text-2xl text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>User-First</h3>
              <p className='text-gray-600 leading-relaxed'>
                Every feature we build is designed with our users in mind. Your success is our success, 
                and we're committed to making resume building as simple as possible.
              </p>
            </div>
            <div className='bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all'>
              <div className='w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6'>
                <LuUsers className='text-2xl text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Accessibility</h3>
              <p className='text-gray-600 leading-relaxed'>
                We believe professional tools should be free and accessible to everyone. 
                No paywalls, no hidden fees – just great resumes for all.
              </p>
            </div>
            <div className='bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all'>
              <div className='w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6'>
                <LuAward className='text-2xl text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Quality</h3>
              <p className='text-gray-600 leading-relaxed'>
                We never compromise on quality. Our templates are professionally designed and 
                optimized to help you make the best first impression.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className='mb-20 bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-12'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6 text-center'>Our Story</h2>
            <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
              <p>
                Resume Builder was born from a simple frustration: creating a professional resume 
                shouldn't require expensive software or design skills.
              </p>
              <p>
                Our founder spent hours struggling with complicated tools and overpriced templates 
                while job hunting. That's when the idea struck – what if there was a completely free, 
                easy-to-use platform that anyone could use to create beautiful resumes?
              </p>
              <p>
                Today, we're proud to have helped over 10,000 job seekers create resumes that got 
                them noticed. From recent graduates to seasoned professionals, our platform serves 
                everyone with the same commitment to quality and simplicity.
              </p>
              <p className='font-semibold text-purple-600'>
                Join us in our mission to make professional resume building accessible to all!
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='mb-20'>
          <h2 className='text-4xl font-bold text-gray-900 text-center mb-12'>Built with Passion</h2>
          <div className='text-center max-w-2xl mx-auto'>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Our small but dedicated team works tirelessly to improve Resume Builder every day. 
              We're developers, designers, and career experts united by one goal: helping you succeed.
            </p>
            <div className='flex justify-center gap-4'>
              <div className='w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400'></div>
              <div className='w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400'></div>
              <div className='w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-400'></div>
              <div className='w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-400'></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white'>
          <h2 className='text-4xl font-bold mb-4'>Ready to Create Your Resume?</h2>
          <p className='text-xl mb-8 text-purple-100'>
            Join thousands of professionals who trust Resume Builder
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
      <Footer />
    </div>
  );
};

export default About;
