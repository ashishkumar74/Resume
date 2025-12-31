import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { resumeTemplates, initialResumeData } from '../../utils/data';
import ModernProfessionalTemplate from '../../components/ResumeTemplates/ModernProfessionalTemplate';
import CreativeDesignerTemplate from '../../components/ResumeTemplates/CreativeDesignerTemplate';
import ExecutiveClassicTemplate from '../../components/ResumeTemplates/ExecutiveClassicTemplate';

const CreateResumeForm = ({ onClose, onSuccess }) => {
  const navigate = useNavigate();
  const [resumeTitle, setResumeTitle] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('modern-professional');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateResume = async (e) => {
    e.preventDefault();

    if (!resumeTitle.trim()) {
      toast.error('Please enter a resume title');
      return;
    }

    setIsCreating(true);

    try {
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, {
        title: resumeTitle,
        template: selectedTemplate,
        data: initialResumeData,
      });

      if (response.data && response.data._id) {
        toast.success('Resume created successfully!');
        onSuccess?.();
        onClose();
        navigate(`/resume/${response.data._id}`);
      }
    } catch (error) {
      console.error('Error creating resume:', error);
      toast.error(error.response?.data?.message || 'Failed to create resume');
    } finally {
      setIsCreating(false);
    }
  };

  const getTemplatePreview = (templateId) => {
    const sampleData = {
      personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
      },
      summary: 'Experienced professional with expertise in delivering high-quality results.',
      experience: [
        {
          jobTitle: 'Senior Position',
          company: 'Tech Company',
          location: 'San Francisco, CA',
          startDate: '2020-01',
          endDate: '',
          isCurrentlyWorking: true,
          description: 'Leading key initiatives',
          achievements: ['Achievement 1', 'Achievement 2'],
        },
      ],
      education: [
        {
          degree: 'Bachelor of Science',
          institution: 'University Name',
          startDate: '2015-09',
          endDate: '2019-05',
        },
      ],
      skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
      projects: [],
      certifications: [],
      languages: [],
    };

    switch (templateId) {
      case 'creative-designer':
        return <CreativeDesignerTemplate data={sampleData} />;
      case 'executive-classic':
        return <ExecutiveClassicTemplate data={sampleData} />;
      default:
        return <ModernProfessionalTemplate data={sampleData} />;
    }
  };

  return (
    <div className='w-full max-w-4xl p-6'>
      <h2 className='text-2xl font-bold text-gray-900 mb-6'>Create New Resume</h2>

      <form onSubmit={handleCreateResume} className='space-y-6'>
        {/* Resume Title */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Resume Title <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            className='w-full text-sm text-black outline-none bg-white border border-slate-200 px-4 py-3 rounded-md placeholder:text-gray-500 focus-within:border-purple-400'
            placeholder='e.g., Software Engineer Resume, Marketing Manager CV'
            value={resumeTitle}
            onChange={(e) => setResumeTitle(e.target.value)}
            required
          />
          <p className='text-xs text-gray-500 mt-1'>
            This is for your reference only and won't appear on the resume
          </p>
        </div>

        {/* Template Selection */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-3'>
            Choose a Template <span className='text-red-500'>*</span>
          </label>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {resumeTemplates.map((template) => (
              <button
                key={template.id}
                type='button'
                className={`relative p-4 border-2 rounded-lg text-left transition hover:border-purple-400 ${
                  selectedTemplate === template.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white'
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                {/* Template Preview Thumbnail */}
                <div className='bg-gray-100 rounded mb-3 h-32 flex items-center justify-center overflow-hidden'>
                  <div className='transform scale-[0.15] origin-top-left'>
                    {getTemplatePreview(template.id)}
                  </div>
                </div>

                <h3 className='text-sm font-semibold text-gray-900 mb-1'>
                  {template.name}
                  {template.isPremium && (
                    <span className='ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded'>
                      Premium
                    </span>
                  )}
                </h3>
                <p className='text-xs text-gray-600'>{template.description}</p>

                {selectedTemplate === template.id && (
                  <div className='absolute top-2 right-2'>
                    <div className='bg-purple-600 text-white rounded-full p-1'>
                      <svg
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-3 justify-end pt-4'>
          <button
            type='button'
            className='px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition'
            onClick={onClose}
            disabled={isCreating}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='px-6 py-2.5 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={isCreating}
          >
            {isCreating ? 'Creating...' : 'Create Resume'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateResumeForm;
