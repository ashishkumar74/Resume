import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Home/Dashboard'
import EditResume from './pages/ResumeUpdates/EditResume'
import Profile from './pages/Profile'
import Help from './pages/Help'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import Templates from './pages/Templates'
import ProtectedRoute from './components/ProtectedRoute'
import CookieConsent from './components/CookieConsent'
import UserProvider from './context/userContext';

const App = () => {
  return (
    <>
      <UserProvider>
        <div>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path='/' element={<LandingPage />} />
              
              {/* Protected Routes */}
              <Route 
                path='/dashboard' 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path='/resume/:resumeId' 
                element={
                  <ProtectedRoute>
                    <EditResume />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path='/profile' 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path='/help' 
                element={
                  <ProtectedRoute>
                    <Help />
                  </ProtectedRoute>
                } 
              />

              {/* Public Information Pages */}
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/features' element={<Features />} />
              <Route path='/pricing' element={<Pricing />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/templates' element={<Templates />} />

              {/* Redirects */}
              <Route path='/home' element={<Navigate to='/dashboard' replace />} />
              <Route path='/resumes' element={<Navigate to='/dashboard' replace />} />

              {/* 404 Not Found - Must be last */}
              <Route path='*' element={<NotFound />} />
            </Routes>
      {/* Cookie Consent Banner */}
      <CookieConsent />

          </BrowserRouter>
        </div>
      </UserProvider>

      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            fontSize: '13px',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}

export default App