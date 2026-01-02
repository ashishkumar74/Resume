import { User, Lock, ArrowRight, Mail, UserCircle } from 'lucide-react';

/**
 * A glassmorphism-style signup form component with animated labels and Google signup.
 */
export function SignUpForm({ 
  onSubmit, 
  fullName, 
  setFullName, 
  email, 
  setEmail, 
  password, 
  setPassword, 
  error, 
  onLoginClick,
  isLoading = false 
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <div className="w-full max-w-sm p-8 space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-y-auto custom-scrollbar">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-600">Create Account</h2>
        <h1 className="mt-2 text-sm text-black-300 font-bold">Join us and start building professional resumes</h1>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name Input with Animated Label */}
        <div className="relative z-0">
          <input
            type="text"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" " 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label
            htmlFor="floating_name"
            className="absolute text-sm text-yellow-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            <UserCircle className="inline-block mr-2 -mt-1" size={16} />
            Full Name
          </label>
        </div>

        {/* Email Input with Animated Label */}
        <div className="relative z-0">
          <input
            type="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" " 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-yellow-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            <Mail className="inline-block mr-2 -mt-1" size={16} />
            Email Address
          </label>
        </div>

        {/* Password Input with Animated Label */}
        <div className="relative z-0">
          <input
            type="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-yellow-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            <Lock className="inline-block mr-2 -mt-1" size={16} />
            Password (min 8 characters)
          </label>
        </div>

        {error && (
          <div className='bg-red-500/20 border border-red-400/50 text-red-100 px-4 py-3 rounded-lg text-sm backdrop-blur-sm'>
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="group w-full flex items-center justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300 cursor-pointer"
        >
          {isLoading ? (
            <>
              <svg className='animate-spin h-5 w-5 mr-2' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
              </svg>
              Creating Account...
            </>
          ) : (
            <>
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {/* Divider */}
        {/* <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-400/30"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs">OR CONTINUE WITH</span>
            <div className="flex-grow border-t border-gray-400/30"></div>
        </div> */}

        {/* Google Signup Button */}
        {/* <button
          type="button"
          className="w-full flex items-center justify-center py-2.5 px-4 bg-white/90 hover:bg-white rounded-lg text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 8.841C34.553 4.806 29.613 2.5 24 2.5C11.983 2.5 2.5 11.983 2.5 24s9.483 21.5 21.5 21.5S45.5 36.017 45.5 24c0-1.538-.135-3.022-.389-4.417z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12.5 24 12.5c3.059 0 5.842 1.154 7.961 3.039l5.839-5.841C34.553 4.806 29.613 2.5 24 2.5C16.318 2.5 9.642 6.723 6.306 14.691z"></path><path fill="#4CAF50" d="M24 45.5c5.613 0 10.553-2.306 14.802-6.341l-5.839-5.841C30.842 35.846 27.059 38 24 38c-5.039 0-9.345-2.608-11.124-6.481l-6.571 4.819C9.642 41.277 16.318 45.5 24 45.5z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l5.839 5.841C44.196 35.123 45.5 29.837 45.5 24c0-1.538-.135-3.022-.389-4.417z"></path>
          </svg>
          Sign up with Google
        </button> */}

      </form>
       <p className="text-center text-xs text-gray-400">
        Already have an account? <button onClick={onLoginClick} className="font-semibold text-blue-400 hover:text-blue-300 transition cursor-pointer">Login</button>
      </p>
    </div>
  );
}
