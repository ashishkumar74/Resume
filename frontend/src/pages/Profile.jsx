import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import DashboardLayout from '../components/layouts/DashboardLayout';
import { LuUser, LuMail, LuCamera, LuSave } from 'react-icons/lu';
import Input from '../components/Inputs/Input';
import ProfilePhotoSelector from '../components/Inputs/ProfilePhotoSelector';
import toast from 'react-hot-toast';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [profilePhoto, setProfilePhoto] = useState(user?.profileImageUrl || '');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      const response = await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE, {
        name,
        email,
        profileImageUrl: profilePhoto,
      });

      if (response.data) {
        updateUser(response.data);
        toast.success('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.response?.data?.message || 'Failed to update profile');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <DashboardLayout>
      <div className='max-w-2xl mx-auto py-8 px-4'>
        <div className='bg-white rounded-lg shadow-sm p-8'>
          <h1 className='text-2xl font-bold text-gray-900 mb-6'>Profile Settings</h1>

          <form onSubmit={handleUpdateProfile} className='space-y-6'>
            {/* Profile Photo */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-4'>
                Profile Photo
              </label>
              <ProfilePhotoSelector
                photo={profilePhoto}
                onChange={setProfilePhoto}
              />
            </div>

            {/* Name */}
            <Input
              label='Full Name'
              type='text'
              placeholder='John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={<LuUser />}
              required
            />

            {/* Email */}
            <Input
              label='Email Address'
              type='email'
              placeholder='john@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<LuMail />}
              required
            />

            {/* Account Info */}
            <div className='bg-gray-50 rounded-lg p-4 mt-6'>
              <h3 className='text-sm font-semibold text-gray-700 mb-2'>Account Information</h3>
              <div className='space-y-2 text-sm text-gray-600'>
                <p>Member since: {new Date(user?.createdAt || Date.now()).toLocaleDateString()}</p>
                <p>Total Resumes: {user?.resumeCount || 0}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3 pt-4'>
              <button
                type='button'
                onClick={() => navigate('/dashboard')}
                className='flex-1 px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition'
              >
                Cancel
              </button>
              <button
                type='submit'
                disabled={isUpdating}
                className='flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <LuSave className='text-lg' />
                {isUpdating ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>

          {/* Additional Sections */}
          <div className='mt-8 space-y-6'>
            {/* Password Section */}
            <div className='border-t pt-6'>
              <h2 className='text-xl font-bold text-gray-900 mb-4'>Security</h2>
              <div className='bg-gray-50 rounded-lg p-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Password</h3>
                    <p className='text-sm text-gray-600'>Last changed 30 days ago</p>
                  </div>
                  <button
                    type='button'
                    className='px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition'
                    onClick={() => toast.info('Password change feature coming soon!')}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div className='border-t pt-6'>
              <h2 className='text-xl font-bold text-gray-900 mb-4'>Preferences</h2>
              <div className='space-y-4'>
                <div className='flex items-center justify-between bg-gray-50 rounded-lg p-4'>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Email Notifications</h3>
                    <p className='text-sm text-gray-600'>Receive updates about your resumes</p>
                  </div>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input type='checkbox' className='sr-only peer' defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
                <div className='flex items-center justify-between bg-gray-50 rounded-lg p-4'>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Auto-Save</h3>
                    <p className='text-sm text-gray-600'>Automatically save your work</p>
                  </div>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input type='checkbox' className='sr-only peer' defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className='border-t border-red-200 pt-6'>
              <h2 className='text-xl font-bold text-red-600 mb-4'>Danger Zone</h2>
              <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                <h3 className='font-semibold text-gray-900 mb-2'>Delete Account</h3>
                <p className='text-sm text-gray-600 mb-4'>
                  Once you delete your account, there is no going back. All your resumes and data will be permanently deleted.
                </p>
                <button
                  type='button'
                  className='px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition'
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                      toast.error('Account deletion is currently disabled. Contact support for assistance.');
                    }
                  }}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
