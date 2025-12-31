import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LuFileText, LuArrowRight } from 'react-icons/lu';

const Terms = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navbar />

      <div className='container mx-auto px-4 py-16 max-w-4xl'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
            <LuFileText className='text-4xl text-white' />
          </div>
          <h1 className='text-5xl font-bold text-gray-900 mb-4'>Terms of Service</h1>
          <p className='text-gray-600'>Last updated: December 28, 2025</p>
        </div>

        {/* Content */}
        <div className='prose prose-lg max-w-none'>
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Agreement to Terms</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Welcome to Resume Builder. By accessing or using our service, you agree to be bound by these Terms of 
              Service ("Terms"). If you disagree with any part of these terms, you may not access the service.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              These Terms apply to all visitors, users, and others who access or use the service. Please read these 
              Terms carefully before using Resume Builder.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Use of Service</h2>
            
            <h3 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Account Creation</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              To use certain features of Resume Builder, you must create an account. When you create an account, you agree to:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mb-6'>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept all responsibility for activity that occurs under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Acceptable Use</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You agree not to:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li>Use the service for any illegal purpose or in violation of any laws</li>
              <li>Violate or infringe the rights of others</li>
              <li>Transmit any viruses, malware, or other malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access the service without permission</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Create multiple accounts or share accounts with others</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Intellectual Property Rights</h2>
            
            <h3 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Our Content</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              The service and its original content (excluding content provided by users), features, and functionality 
              are and will remain the exclusive property of Resume Builder and its licensors. The service is protected 
              by copyright, trademark, and other laws.
            </p>

            <h3 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Your Content</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You retain all rights to the content you create using our service, including your resume data. By using 
              our service, you grant us a license to:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li>Store and display your content as necessary to provide the service</li>
              <li>Make backup copies for service reliability</li>
              <li>Use aggregated, anonymized data for analytics and service improvement</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mt-4'>
              This license ends when you delete your content or account, except for backup copies retained for legal or security purposes.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Service Availability</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We strive to provide continuous service, but we do not guarantee that the service will be:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li>Always available or uninterrupted</li>
              <li>Free from errors, bugs, or security vulnerabilities</li>
              <li>Compatible with all devices or browsers</li>
              <li>Available in all geographic locations</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mt-4'>
              We reserve the right to modify, suspend, or discontinue the service at any time without notice.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Limitation of Liability</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              To the maximum extent permitted by law, Resume Builder shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li>Loss of profits, data, use, or other intangible losses</li>
              <li>Unauthorized access to or alteration of your content</li>
              <li>Statements or conduct of any third party</li>
              <li>Any other matter relating to the service</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mt-4'>
              You use the service at your own risk. The service is provided "as is" and "as available" without warranties 
              of any kind.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Disclaimer of Warranties</h2>
            <p className='text-gray-700 leading-relaxed'>
              Resume Builder makes no warranties or representations about the accuracy or completeness of the service's 
              content or the content of any sites linked to the service. We assume no liability or responsibility for:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mt-4'>
              <li>Errors or omissions in content</li>
              <li>Personal injury or property damage resulting from service access or use</li>
              <li>Unauthorized access to our servers or personal information</li>
              <li>Interruption or cessation of transmission to or from the service</li>
              <li>Bugs, viruses, or other harmful code</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Indemnification</h2>
            <p className='text-gray-700 leading-relaxed'>
              You agree to defend, indemnify, and hold harmless Resume Builder and its officers, directors, employees, 
              and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in 
              any way connected with:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700 mt-4'>
              <li>Your access to or use of the service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right</li>
              <li>Content you submit or transmit through the service</li>
            </ul>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Termination</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We may terminate or suspend your account and access to the service immediately, without prior notice or 
              liability, for any reason, including:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-700'>
              <li>Breach of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Extended inactivity</li>
              <li>Request by law enforcement or government agencies</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mt-4'>
              You may terminate your account at any time by contacting us or using the account deletion feature. 
              Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Governing Law</h2>
            <p className='text-gray-700 leading-relaxed'>
              These Terms shall be governed by and construed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions. Any disputes arising from these Terms or the service 
              shall be resolved in the courts located in San Francisco, California.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Changes to Terms</h2>
            <p className='text-gray-700 leading-relaxed'>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
              provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change 
              will be determined at our sole discretion. By continuing to access or use our service after revisions 
              become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Contact Us</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className='bg-gray-50 rounded-xl p-6'>
              <p className='text-gray-700 mb-2'>
                <strong>Email:</strong> legal@resumebuilder.com
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
        <div className='mt-16 bg-indigo-50 rounded-2xl p-8 text-center border border-indigo-200'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>Start Building Your Resume</h3>
          <p className='text-gray-600 mb-6'>Create professional resumes in minutes</p>
          <Link
            to={user ? '/dashboard' : '/'}
            className='inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all'
          >
            {user ? 'Go to Dashboard' : 'Get Started'}
            <LuArrowRight />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Terms;
