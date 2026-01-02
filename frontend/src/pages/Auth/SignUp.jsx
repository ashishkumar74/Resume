import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, validateFullName } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import uploadImage from '../../utils/uploadImage';
import { UserContext } from '../../context/userContext';
import { SmokeyBackground } from '../../components/ui/login-form';
import { SignUpForm } from '../../components/ui/signup-form';

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
    <div className="relative w-[90vw] md:w-[650px] h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20">
      {/* <SmokeyBackground className="absolute inset-0" color="#ffffff" /> */}
      <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
        <SignUpForm 
          onSubmit={handleSignUp}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          isLoading={isLoading}
          onLoginClick={() => setCurrentPage("login")}
        />
      </div>
    </div>
  )
}

export default SignUp