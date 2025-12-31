import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Input from '../../components/Inputs/Input';
import { validateEmail, validatePassword, validateFullName } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import uploadImage from '../../utils/uploadImage';
import { UserContext } from '../../context/userContext';

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = '';

    if (!validateFullName(fullName)) {
      setError("Full name must be at least 4 characters long.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setError("Please enter the password");
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      // If profile pic is a base64 string, convert and upload
      if (profilePic && profilePic.startsWith('data:')) {
        const blob = await fetch(profilePic).then(r => r.blob());
        const file = new File([blob], 'profile.jpg', { type: 'image/jpeg' });
        const imgUploadRes = await uploadImage(file);
        profileImageUrl = imgUploadRes.imageUrl || '';
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageUrl,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-[90vw] max-h-[96vh] md:w-[450px] p-8 flex flex-col justify-center bg-white rounded-xl shadow-lg overflow-y-auto custom-scrollbar'>
      <div className='mb-6'>
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>Create Account</h3>
        <p className='text-sm text-gray-600'>Join us and start building professional resumes</p>
      </div>

      <form onSubmit={handleSignUp} className='space-y-4'>

        <ProfilePhotoSelector photo={profilePic} onChange={setProfilePic} />

        <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label='Full Name'
            type='text'
            placeholder='Full Name'
            required
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label='Email Address'
            type='email'
            placeholder='Email'
            required
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label='Password'
            type='password'
            placeholder='Min 8 characters'
            required
          />
        </div>
        {error && (
          <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm'>
            {error}
          </div>
        )}

        <button 
          type='submit' 
          className='btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed' 
          disabled={isLoading}
        >
          {isLoading ? (
            <span className='flex items-center justify-center gap-2'>
              <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
              </svg>
              Creating Account...
            </span>
          ) : 'Sign Up'}
        </button>
        <p className='text-sm text-gray-600 text-center mt-6'>
          Already have an account?{' '}
          <button
            type='button'
            className='font-semibold text-purple-600 hover:text-purple-700 cursor-pointer no-underline transition'
            onClick={() => {
              setCurrentPage("login");
            }}
          >
            Login
          </button>
        </p>
      </form>
    </div >
  )
}

export default SignUp