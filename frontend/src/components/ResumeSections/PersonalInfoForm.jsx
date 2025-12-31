import React from 'react';
import Input from '../Inputs/Input';
import ProfilePhotoSelector from '../Inputs/ProfilePhotoSelector';
import { sectionTips } from '../../utils/data';

const PersonalInfoForm = ({ data, onChange, errors = {} }) => {
  const handleInputChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className='space-y-4'>
      {/* Tips Section */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
        <h4 className='text-sm font-semibold text-blue-900 mb-2'>💡 Pro Tips</h4>
        <ul className='text-xs text-blue-800 space-y-1'>
          {sectionTips.personalInfo.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Profile Photo */}
      <div className='mb-6'>
        <ProfilePhotoSelector
          photo={data.profilePhoto}
          onChange={(photo) => handleInputChange('profilePhoto', photo)}
        />
      </div>

      {/* Name Fields */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Input
          label='First Name'
          type='text'
          placeholder='John'
          value={data.firstName || ''}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          required
          error={errors.firstName}
        />
        <Input
          label='Last Name'
          type='text'
          placeholder='Doe'
          value={data.lastName || ''}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          required
          error={errors.lastName}
        />
      </div>

      {/* Contact Fields */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Input
          label='Email Address'
          type='email'
          placeholder='john.doe@example.com'
          value={data.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          error={errors.email}
        />
        <Input
          label='Phone Number'
          type='tel'
          placeholder='+1 (555) 123-4567'
          value={data.phone || ''}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          error={errors.phone}
        />
      </div>

      {/* Location */}
      <Input
        label='Location'
        type='text'
        placeholder='San Francisco, CA'
        value={data.location || ''}
        onChange={(e) => handleInputChange('location', e.target.value)}
      />

      {/* Social Links */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Input
          label='LinkedIn Profile'
          type='text'
          placeholder='linkedin.com/in/johndoe'
          value={data.linkedin || ''}
          onChange={(e) => handleInputChange('linkedin', e.target.value)}
          error={errors.linkedin}
        />
        <Input
          label='Portfolio/Website'
          type='text'
          placeholder='johndoe.com'
          value={data.portfolio || ''}
          onChange={(e) => handleInputChange('portfolio', e.target.value)}
          error={errors.portfolio}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
