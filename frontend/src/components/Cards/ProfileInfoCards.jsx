import React, { useContext, useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import { LuUser, LuLogOut, LuSettings, LuChevronDown } from 'react-icons/lu'

const ProfileInfoCards = () => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate('/');
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        user && (
            <div className='relative' ref={dropdownRef}>
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className='flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition'
                >
                    {user.profileImageUrl ? (
                        <img
                            src={user.profileImageUrl}
                            alt={user.name}
                            className='w-10 h-10 bg-gray-300 rounded-full object-cover'
                        />
                    ) : (
                        <div className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center'>
                            <LuUser className='text-purple-600 text-xl' />
                        </div>
                    )}
                    <div className='hidden md:block text-left'>
                        <div className='text-sm font-semibold text-gray-900'>{user.name || ""}</div>
                        <div className='text-xs text-gray-500'>{user.email || ""}</div>
                    </div>
                    <LuChevronDown className={`text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                    <div className='absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50'>
                        <div className='px-4 py-3 border-b border-gray-100'>
                            <p className='text-sm font-semibold text-gray-900'>{user.name}</p>
                            <p className='text-xs text-gray-500 truncate'>{user.email}</p>
                        </div>
                        
                        <Link
                            to='/profile'
                            onClick={() => setShowDropdown(false)}
                            className='flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition'
                        >
                            <LuSettings className='text-lg' />
                            Profile Settings
                        </Link>
                        
                        <Link
                            to='/help'
                            onClick={() => setShowDropdown(false)}
                            className='flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition'
                        >
                            <LuUser className='text-lg' />
                            Help & Support
                        </Link>

                        <div className='border-t border-gray-100 my-1'></div>
                        
                        <button
                            onClick={handleLogout}
                            className='w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition'
                        >
                            <LuLogOut className='text-lg' />
                            Logout
                        </button>
                    </div>
                )}
            </div>
        )
    );
};


export default ProfileInfoCards