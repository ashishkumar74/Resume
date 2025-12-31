import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Input from '../../components/Inputs/Input';
import { validateEmail, validatePassword } from '../../utils/helper';
import { UserContext } from '../../context/userContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const Login = ({ setCurrentPage }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if(!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    setError(null);

    try{
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }else{
        setError("An error occurred. Please try again later.");
      }
    }


  };
  return (
    <div className='w-[90vw] md:w-[450px] p-8 flex flex-col justify-center bg-white rounded-xl shadow-lg'>
      <div className='mb-8'>
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>Welcome Back!</h3>
        <p className='text-sm text-gray-600'>Login to continue building amazing resumes</p>
      </div>

      <form onSubmit={handleLogin} className='space-y-4'>

        <Input
          value={email}
          onChange={({target}) => setEmail(target.value)}
          label='Email Address'
          type='email'
          placeholder='Email'
          required
        />
        <Input
          value={password}
          onChange={({target}) => setPassword(target.value)}
          label='Password'
          type='password'
          placeholder='Min 8 characters'
          required
        />

        {error && (
          <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm'>
            {error}
          </div>
        )}

        <button type='submit' className='btn-primary w-full'>Login</button>
        <p className='text-sm text-gray-600 text-center mt-6'>
          Don't have an account?{' '}
          <button
            className='font-semibold text-purple-600 hover:text-purple-700 cursor-pointer no-underline transition'
            onClick={() => {
              setCurrentPage("signup");
            }}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login