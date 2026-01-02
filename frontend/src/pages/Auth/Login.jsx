import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from '../../utils/helper';
import { UserContext } from '../../context/userContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { SmokeyBackground, LoginForm } from '../../components/ui/login-form';

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
    <div className="relative w-[90vw] md:w-[650px] h-[600px] rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-lg border border-white/20">
      {/* <SmokeyBackground className="absolute inset-0" color="white" /> */}
      <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
        <LoginForm 
          onSubmit={handleLogin}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          onSignUpClick={() => setCurrentPage("signup")}
        />
      </div>
    </div>
  )
}

export default Login