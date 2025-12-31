import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LuMail, LuMessageSquare, LuSend, LuArrowRight, LuMapPin, LuPhone } from 'react-icons/lu';
import toast from 'react-hot-toast';
import Input from '../components/Inputs/Input';

const Contact = () => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ ...formData, subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navbar />

      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Get in Touch
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto'>
          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>Send us a Message</h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Input
                    label='Your Name'
                    type='text'
                    name='name'
                    placeholder='John Doe'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label='Your Email'
                    type='email'
                    name='email'
                    placeholder='john@example.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Input
                  label='Subject'
                  type='text'
                  name='subject'
                  placeholder='How can we help you?'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    rows='6'
                    className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 transition'
                    placeholder='Tell us more about your inquiry...'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-purple-600 text-white font-semibold py-4 rounded-lg hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isSubmitting ? (
                    <>
                      <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <LuSend />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className='space-y-6'>
            <div className='bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-200 p-8'>
              <div className='w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4'>
                <LuMail className='text-2xl text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Email Us</h3>
              <p className='text-gray-600 mb-3'>Our team typically responds within 24 hours</p>
              <a href='mailto:support@resumebuilder.com' className='text-purple-600 hover:text-purple-700 font-semibold'>
                support@resumebuilder.com
              </a>
            </div>

            <div className='bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200 p-8'>
              <div className='w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4'>
                <LuMessageSquare className='text-2xl text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Live Chat</h3>
              <p className='text-gray-600 mb-3'>Chat with our support team in real-time</p>
              <button className='text-blue-600 hover:text-blue-700 font-semibold'>
                Start Chat →
              </button>
            </div>

            <div className='bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-200 p-8'>
              <div className='w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4'>
                <LuPhone className='text-2xl text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Phone Support</h3>
              <p className='text-gray-600 mb-3'>Available Monday to Friday, 9 AM - 6 PM EST</p>
              <a href='tel:+1234567890' className='text-green-600 hover:text-green-700 font-semibold'>
                +1 (234) 567-890
              </a>
            </div>

            <div className='bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-200 p-8'>
              <div className='w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4'>
                <LuMapPin className='text-2xl text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Visit Us</h3>
              <p className='text-gray-600'>
                123 Resume Street<br />
                San Francisco, CA 94102<br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Link Section */}
        <section className='mt-20 bg-gray-50 rounded-3xl p-12 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Need Quick Answers?</h2>
          <p className='text-lg text-gray-600 mb-8'>
            Check out our Help Center for instant answers to common questions
          </p>
          <Link
            to='/help'
            className='inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-all'
          >
            Visit Help Center
            <LuArrowRight />
          </Link>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
