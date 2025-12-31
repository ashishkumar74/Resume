import React, { useContext, useState } from 'react'
import HERO_IMG from '../assets/HERO-IMG.png'
import { useNavigate, Link } from 'react-router-dom'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import { UserContext } from '../context/userContext'
import ProfileInfoCards from '../components/Cards/ProfileInfoCards'
import { LuFileText, LuDownload, LuPalette, LuSave, LuZap, LuShield, LuClock, LuStar, LuCheck, LuArrowRight, LuMail } from 'react-icons/lu';

const LandingPage = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("login");

    const handleCTA = () => {
        if (!user){
            setOpenAuthModal(true);
        }else {
            navigate('/dashboard');
        }
    };
    return (
        <div className='w-full min-h-full bg-white'>
            <div className='container mx-auto px-4 py-6'>
                {/* Header/Navigation */}
                <header className='flex justify-between items-center mb-16'>
                    <div className='text-2xl font-bold text-gray-900'>RESUME BUILDER</div>
                    <nav className='hidden md:flex items-center gap-8'>
                        <Link to='/' className='text-gray-600 hover:text-purple-600 transition'>Home</Link>
                        <Link to='/features' className='text-gray-600 hover:text-purple-600 transition'>Features</Link>
                        <Link to='/templates' className='text-gray-600 hover:text-purple-600 transition'>Templates</Link>
                        <Link to='/pricing' className='text-gray-600 hover:text-purple-600 transition'>Pricing</Link>
                        <Link to='/faq' className='text-gray-600 hover:text-purple-600 transition'>FAQ</Link>
                        <Link to='/contact' className='text-gray-600 hover:text-purple-600 transition'>Contact</Link>
                    </nav>
                    {user ? (
                        <ProfileInfoCards />
                    ) : (
                        <button 
                            className='bg-purple-600 text-sm font-semibold text-white px-7 py-2.5 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer shadow-lg shadow-purple-600/20'
                            onClick={() => setOpenAuthModal(true)}
                        >
                            Login/Signup
                        </button>
                    )}
                </header>

                {/* Hero Section */}
                <div className='flex flex-col md:flex-row items-center mb-24'>
                    <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
                        <div className='inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-6'>
                            ⚡ Build Your Resume in Minutes
                        </div>
                        <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                            Build Your{" "}
                            <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animation-text-shine'>
                                Dream Resume
                            </span>
                            {" "}Effortlessly
                        </h1>
                        <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                            Create professional, ATS-friendly resumes in minutes. Choose from beautiful templates, 
                            customize with ease, and land your dream job faster.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <button
                                className='bg-purple-600 text-sm font-semibold text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all hover:shadow-xl hover:shadow-purple-600/30 cursor-pointer flex items-center justify-center gap-2'
                                onClick={handleCTA}
                            >
                                Get Started for Free
                                <LuArrowRight className='text-lg' />
                            </button>
                            <button
                                className='bg-white border-2 border-gray-200 text-sm font-semibold text-gray-800 px-8 py-4 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all cursor-pointer'
                                onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Templates
                            </button>
                        </div>
                        <div className='flex items-center gap-6 mt-8'>
                            <div className='flex items-center gap-2'>
                                <div className='flex -space-x-2'>
                                    <div className='w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white'></div>
                                    <div className='w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white'></div>
                                    <div className='w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white'></div>
                                </div>
                                <p className='text-sm text-gray-600'>
                                    <span className='font-bold text-gray-900'>10,000+</span> resumes created
                                </p>
                            </div>
                            <div className='flex items-center gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <LuStar key={i} className='text-yellow-400 fill-yellow-400 text-sm' />
                                ))}
                                <span className='text-sm text-gray-600 ml-1'>4.9/5 rating</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src={HERO_IMG} alt="Resume Builder Hero" className='w-full rounded-2xl shadow-2xl' />
                    </div>
                </div>

                {/* Features Section */}
                <section id='features' className='mb-24 relative overflow-hidden'>
                    {/* Background Decoration */}
                    <div className='absolute inset-0 -z-10'>
                        <div className='absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
                        <div className='absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
                        <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
                    </div>

                    <div className='text-center mb-20'>
                        <div className='inline-block mb-4'>
                            <span className='bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full'>
                                ✨ POWERFUL FEATURES
                            </span>
                        </div>
                        <h2 className='text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight'>
                            Everything You Need to{' '}
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>
                                Succeed
                            </span>
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                            Powerful features designed to help you create the perfect resume and land your dream job
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                        {/* Feature Card 1 */}
                        <div className='group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden cursor-pointer'>
                            <div className='absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            <div className='relative z-10'>
                                <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                                    <LuFileText className='text-3xl text-white' />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors'>
                                    Multiple Templates
                                </h3>
                                <p className='text-gray-600 leading-relaxed text-base'>
                                    Choose from professionally designed templates tailored for different industries and career levels. Stand out with style.
                                </p>
                                <div className='mt-6 flex items-center gap-2 text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                    <span>Explore Templates</span>
                                    <LuArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className='group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden cursor-pointer'>
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            <div className='relative z-10'>
                                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                                    <LuPalette className='text-3xl text-white' />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors'>
                                    Customizable Design
                                </h3>
                                <p className='text-gray-600 leading-relaxed text-base'>
                                    Personalize your resume with color themes, fonts, and layouts that match your unique style and personality.
                                </p>
                                <div className='mt-6 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                    <span>Customize Now</span>
                                    <LuArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className='group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 overflow-hidden cursor-pointer'>
                            <div className='absolute inset-0 bg-gradient-to-br from-green-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            <div className='relative z-10'>
                                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                                    <LuSave className='text-3xl text-white' />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors'>
                                    Auto-Save Feature
                                </h3>
                                <p className='text-gray-600 leading-relaxed text-base'>
                                    Never lose your work with automatic saving. Your progress is saved in real-time as you work on your resume.
                                </p>
                                <div className='mt-6 flex items-center gap-2 text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                    <span>Learn More</span>
                                    <LuArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 4 */}
                        <div className='group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden cursor-pointer'>
                            <div className='absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            <div className='relative z-10'>
                                <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                                    <LuDownload className='text-3xl text-white' />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors'>
                                    PDF Export
                                </h3>
                                <p className='text-gray-600 leading-relaxed text-base'>
                                    Download your resume as a high-quality PDF ready to send to employers. Perfect formatting guaranteed.
                                </p>
                                <div className='mt-6 flex items-center gap-2 text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                    <span>Download Now</span>
                                    <LuArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 5 */}
                        <div className='group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 overflow-hidden cursor-pointer'>
                            <div className='absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            <div className='relative z-10'>
                                <div className='w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                                    <LuZap className='text-3xl text-white' />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-pink-600 transition-colors'>
                                    ATS-Optimized
                                </h3>
                                <p className='text-gray-600 leading-relaxed text-base'>
                                    Templates optimized for Applicant Tracking Systems to ensure your resume gets noticed by recruiters.
                                </p>
                                <div className='mt-6 flex items-center gap-2 text-pink-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                    <span>See How</span>
                                    <LuArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 6 */}
                        <div className='group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden cursor-pointer'>
                            <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            <div className='relative z-10'>
                                <div className='w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                                    <LuShield className='text-3xl text-white' />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors'>
                                    Secure & Private
                                </h3>
                                <p className='text-gray-600 leading-relaxed text-base'>
                                    Your data is encrypted and secure. We never share your information with third parties. Privacy guaranteed.
                                </p>
                                <div className='mt-6 flex items-center gap-2 text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                    <span>Read More</span>
                                    <LuArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className='text-center mt-16 '>
                        <p className='text-gray-600 mb-6 text-lg'>
                            Ready to experience these powerful features?
                        </p>
                        <button
                            onClick={handleCTA}
                            className='bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all hover:shadow-xl hover:shadow-purple-500/30 cursor-pointer inline-flex items-center gap-2 group'
                        >
                            Start Building Now
                            <LuArrowRight className='group-hover:translate-x-1 transition-transform' />
                        </button>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id='how-it-works' className='mb-24 bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-12'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold mb-4 text-gray-900'>
                            Create Your Resume in 3 Simple Steps
                        </h2>
                        <p className='text-xl text-gray-600'>
                            Get started in minutes with our intuitive process
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='text-center'>
                            <div className='w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg shadow-purple-600/30'>
                                1
                            </div>
                            <h3 className='text-2xl font-bold mb-4 text-gray-900'>Choose Template</h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Select from our collection of professional templates designed for various industries
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg shadow-purple-600/30'>
                                2
                            </div>
                            <h3 className='text-2xl font-bold mb-4 text-gray-900'>Fill Information</h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Add your personal details, experience, education, and skills with our easy-to-use forms
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg shadow-purple-600/30'>
                                3
                            </div>
                            <h3 className='text-2xl font-bold mb-4 text-gray-900'>Download & Apply</h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Export your resume as PDF and start applying to your dream jobs immediately
                            </p>
                        </div>
                    </div>
                </section>

                {/* Templates Showcase Section */}
                <section id='templates' className='mb-24'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold mb-4 text-gray-900'>
                            Professional Templates
                        </h2>
                        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                            Choose from our carefully crafted templates designed by professionals
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-purple-400 hover:shadow-xl transition-all group'>
                            <div className='h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center'>
                                <LuFileText className='text-6xl text-blue-600' />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-bold mb-2 text-gray-900'>Modern Professional</h3>
                                <p className='text-gray-600 mb-4'>Clean and ATS-friendly design perfect for corporate jobs</p>
                                <button 
                                    className='text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2'
                                    onClick={handleCTA}
                                >
                                    Use Template <LuArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-purple-400 hover:shadow-xl transition-all group'>
                            <div className='h-64 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center'>
                                <LuFileText className='text-6xl text-purple-600' />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-bold mb-2 text-gray-900'>Creative Designer</h3>
                                <p className='text-gray-600 mb-4'>Eye-catching layout ideal for creative professionals</p>
                                <button 
                                    className='text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2'
                                    onClick={handleCTA}
                                >
                                    Use Template <LuArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-purple-400 hover:shadow-xl transition-all group'>
                            <div className='h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center'>
                                <LuFileText className='text-6xl text-green-600' />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-bold mb-2 text-gray-900'>Executive Classic</h3>
                                <p className='text-gray-600 mb-4'>Traditional format for senior-level positions</p>
                                <button 
                                    className='text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2'
                                    onClick={handleCTA}
                                >
                                    Use Template <LuArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className='mb-24 bg-purple-600 rounded-3xl p-12 text-white'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
                        <div>
                            <div className='text-5xl font-bold mb-2'>10K+</div>
                            <div className='text-purple-200'>Resumes Created</div>
                        </div>
                        <div>
                            <div className='text-5xl font-bold mb-2'>95%</div>
                            <div className='text-purple-200'>Success Rate</div>
                        </div>
                        <div>
                            <div className='text-5xl font-bold mb-2'>3</div>
                            <div className='text-purple-200'>Professional Templates</div>
                        </div>
                        <div>
                            <div className='text-5xl font-bold mb-2'>24/7</div>
                            <div className='text-purple-200'>Support Available</div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className='mb-24'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold mb-4 text-gray-900'>
                            What Our Users Say
                        </h2>
                        <p className='text-xl text-gray-600'>
                            Join thousands of satisfied job seekers
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
                            <div className='flex items-center gap-1 mb-4'>
                                {[...Array(5)].map((_, i) => (
                                    <LuStar key={i} className='text-yellow-400 fill-yellow-400' />
                                ))}
                            </div>
                            <p className='text-gray-700 mb-6 leading-relaxed'>
                                "This resume builder saved me hours! The templates are professional and the interface is so easy to use. I got interview calls within a week!"
                            </p>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400'></div>
                                <div>
                                    <div className='font-bold text-gray-900'>Sarah Johnson</div>
                                    <div className='text-sm text-gray-600'>Software Engineer</div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
                            <div className='flex items-center gap-1 mb-4'>
                                {[...Array(5)].map((_, i) => (
                                    <LuStar key={i} className='text-yellow-400 fill-yellow-400' />
                                ))}
                            </div>
                            <p className='text-gray-700 mb-6 leading-relaxed'>
                                "The best resume builder I've used! The auto-save feature is a lifesaver, and the PDF export quality is excellent. Highly recommended!"
                            </p>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400'></div>
                                <div>
                                    <div className='font-bold text-gray-900'>Michael Chen</div>
                                    <div className='text-sm text-gray-600'>Marketing Manager</div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer'>
                            <div className='flex items-center gap-1 mb-4'>
                                {[...Array(5)].map((_, i) => (
                                    <LuStar key={i} className='text-yellow-400 fill-yellow-400' />
                                ))}
                            </div>
                            <p className='text-gray-700 mb-6 leading-relaxed'>
                                "Simple, elegant, and effective. Created my resume in under 20 minutes and landed my dream job. Thank you!"
                            </p>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400'></div>
                                <div>
                                    <div className='font-bold text-gray-900'>Emily Davis</div>
                                    <div className='text-sm text-gray-600'>UX Designer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className='mb-24'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold mb-4 text-gray-900'>
                            Frequently Asked Questions
                        </h2>
                        <p className='text-xl text-gray-600'>
                            Got questions? We've got answers
                        </p>
                    </div>
                    <div className='max-w-3xl mx-auto space-y-4'>
                        <details className='bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition'>
                            <summary className='font-bold text-lg text-gray-900 cursor-pointer'>
                                Is Resume Builder really free?
                            </summary>
                            <p className='mt-4 text-gray-600 leading-relaxed'>
                                Yes! You can create unlimited resumes and download them as PDF completely free. No hidden charges or premium tiers.
                            </p>
                        </details>
                        <details className='bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition'>
                            <summary className='font-bold text-lg text-gray-900 cursor-pointer'>
                                Can I edit my resume after downloading?
                            </summary>
                            <p className='mt-4 text-gray-600 leading-relaxed'>
                                Absolutely! Your resumes are saved in your account, so you can come back anytime to edit and download updated versions.
                            </p>
                        </details>
                        <details className='bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition'>
                            <summary className='font-bold text-lg text-gray-900 cursor-pointer'>
                                Are the templates ATS-friendly?
                            </summary>
                            <p className='mt-4 text-gray-600 leading-relaxed'>
                                Yes, all our templates are designed to be compatible with Applicant Tracking Systems (ATS) to ensure your resume gets past automated screening.
                            </p>
                        </details>
                        <details className='bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition'>
                            <summary className='font-bold text-lg text-gray-900 cursor-pointer'>
                                How long does it take to create a resume?
                            </summary>
                            <p className='mt-4 text-gray-600 leading-relaxed'>
                                Most users create a complete, professional resume in 15-20 minutes. Our intuitive interface makes the process quick and easy.
                            </p>
                        </details>
                    </div>
                </section>

                {/* CTA Section */}
                <section className='mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white'>
                    <h2 className='text-4xl font-bold mb-4'>
                        Ready to Land Your Dream Job?
                    </h2>
                    <p className='text-xl mb-8 text-purple-100'>
                        Join thousands of professionals who created their perfect resume with us
                    </p>
                    <button
                        className='bg-white text-purple-600 text-sm font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl cursor-pointer inline-flex items-center gap-2'
                        onClick={handleCTA}
                    >
                        Create Your Resume Now
                        <LuArrowRight className='text-lg' />
                    </button>
                </section>

            </div>

            {/* Footer */}
            <Footer />

            <Modal
                isOpen={openAuthModal}
                onClose={() => {
                    setOpenAuthModal(false);
                    setCurrentPage("login");
                }}
                hideHeader
            >
                <div>
                    {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
                    {currentPage === "signup" && (<SignUp setCurrentPage={setCurrentPage} />)}
                </div>
            </Modal>
        </div>
    )
}

export default LandingPage;