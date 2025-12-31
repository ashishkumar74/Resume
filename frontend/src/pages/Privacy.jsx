import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LuShield, LuArrowRight } from 'react-icons/lu';

const Privacy = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navbar />

      <div className='container mx-auto px-4 py-16 max-w-4xl'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
            <LuShield className='text-4xl text-white' />
          </div>
          <h1 className='text-5xl font-bold text-gray-900 mb-4'>Privacy Policy</h1>
          <p className='text-gray-600'>Last updated: December 28, 2025</p>
        </div>

        {/* Content */}
        <div className='prose prose-lg max-w-none'>
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Introduction</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              At Resume Builder, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our resume building service.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
              policy, please do not access the site or use our services.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Information We Collect</h2>
            
            <h3 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Personal Information</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We collect information that you provide directly to us, including:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
              <li>Name and email address when you create an account</li>
              <li>Profile information including profile photo</li>
              <li>Resume content including work experience, education, skills, and other information you choose to include</li>
              <li>Communications with us, such as support inquiries</li>
            </ul>

            <h3 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Automatically Collected Information</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              When you access our service, we may automatically collect:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li>Device information (browser type, operating system)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>IP address and location data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>How We Use Your Information</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We use the information we collect to:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account</li>
              <li>Process your resume creation and editing requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Information Sharing and Disclosure</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li><strong>With your consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service providers:</strong> With trusted third-party service providers who assist in operating our service</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Data Security</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We implement appropriate technical and organizational security measures to protect your personal 
              information, including:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure backup and disaster recovery procedures</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mt-4'>
              However, no method of transmission over the Internet or electronic storage is 100% secure. 
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Your Rights and Choices</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You have the following rights regarding your personal information:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
              <li><strong>Export:</strong> Download your resume data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mt-4'>
              To exercise these rights, please contact us at support@resumebuilder.com.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Cookies and Tracking Technologies</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We use cookies and similar tracking technologies to track activity on our service and hold certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
              being sent. However, if you do not accept cookies, you may not be able to use some features of our service.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Children's Privacy</h2>
            <p className='text-gray-700 leading-relaxed'>
              Our service is not intended for children under the age of 13. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has 
              provided us with personal information, please contact us so we can delete it.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>International Data Transfers</h2>
            <p className='text-gray-700 leading-relaxed'>
              Your information may be transferred to and maintained on computers located outside of your state, 
              province, country, or other governmental jurisdiction where data protection laws may differ. We 
              ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Changes to This Privacy Policy</h2>
            <p className='text-gray-700 leading-relaxed'>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Contact Us</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className='bg-gray-50 rounded-xl p-6'>
              <p className='text-gray-700 mb-2'>
                <strong>Email:</strong> support@resumebuilder.com
              </p>
              <p className='text-gray-700 mb-2'>
                <strong>Address:</strong> 123 Resume Street, San Francisco, CA 94102
              </p>
              <p className='text-gray-700'>
                <strong>Phone:</strong> +1 (234) 567-890
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className='mt-16 bg-purple-50 rounded-2xl p-8 text-center border border-purple-200'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready to Get Started?</h3>
          <p className='text-gray-600 mb-6'>Create your professional resume with confidence</p>
          <Link
            to={user ? '/dashboard' : '/'}
            className='inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-all'
          >
            {user ? 'Go to Dashboard' : 'Start Building'}
            <LuArrowRight />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Privacy;
