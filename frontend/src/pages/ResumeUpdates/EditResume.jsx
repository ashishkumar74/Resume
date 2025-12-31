import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useReactToPrint } from 'react-to-print';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { initialResumeData, resumeSections, colorThemes } from '../../utils/data';
import { calculateResumeCompleteness, debounce } from '../../utils/helper';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { LuSave, LuDownload, LuEye, LuEyeOff, LuArrowLeft, LuPalette } from 'react-icons/lu';

// Import Form Components
import PersonalInfoForm from '../../components/ResumeSections/PersonalInfoForm';
import SummaryForm from '../../components/ResumeSections/SummaryForm';
import ExperienceForm from '../../components/ResumeSections/ExperienceForm';
import EducationForm from '../../components/ResumeSections/EducationForm';
import SkillsForm from '../../components/ResumeSections/SkillsForm';
import ProjectsForm from '../../components/ResumeSections/ProjectsForm';
import CertificationsForm from '../../components/ResumeSections/CertificationsForm';
import LanguagesForm from '../../components/ResumeSections/LanguagesForm';

// Import Templates
import ModernProfessionalTemplate from '../../components/ResumeTemplates/ModernProfessionalTemplate';
import CreativeDesignerTemplate from '../../components/ResumeTemplates/CreativeDesignerTemplate';
import ExecutiveClassicTemplate from '../../components/ResumeTemplates/ExecutiveClassicTemplate';

const EditResume = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const resumeRef = useRef();

  const [resumeData, setResumeData] = useState(initialResumeData);
  const [resumeTitle, setResumeTitle] = useState('');
  const [template, setTemplate] = useState('modern-professional');
  const [selectedTheme, setSelectedTheme] = useState(colorThemes[0]);
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch resume data
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axiosInstance.get(`${API_PATHS.RESUME.GET}/${resumeId}`);
        if (response.data) {
          setResumeData(response.data.data || initialResumeData);
          setResumeTitle(response.data.title || '');
          setTemplate(response.data.template || 'modern-professional');
        }
      } catch (error) {
        console.error('Error fetching resume:', error);
        toast.error('Failed to load resume');
      } finally {
        setIsLoading(false);
      }
    };

    if (resumeId) {
      fetchResume();
    }
  }, [resumeId]);

  // Auto-save functionality
  const saveResume = async (data) => {
    setIsSaving(true);
    try {
      await axiosInstance.put(`${API_PATHS.RESUME.UPDATE}/${resumeId}`, {
        data: data || resumeData,
        title: resumeTitle,
        template,
      });
      toast.success('Resume saved successfully!');
    } catch (error) {
      console.error('Error saving resume:', error);
      toast.error('Failed to save resume');
    } finally {
      setIsSaving(false);
    }
  };

  // Debounced auto-save
  const debouncedSave = useRef(
    debounce((data) => saveResume(data), 2000)
  ).current;

  // Update section data
  const updateSection = (section, data) => {
    const updated = { ...resumeData, [section]: data };
    setResumeData(updated);
    debouncedSave(updated);
  };

  // Print/Download functionality
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: resumeTitle || 'Resume',
  });

  // Render template based on selection
  const renderTemplate = () => {
    const templateProps = { data: resumeData, theme: selectedTheme };
    
    switch (template) {
      case 'creative-designer':
        return <CreativeDesignerTemplate {...templateProps} />;
      case 'executive-classic':
        return <ExecutiveClassicTemplate {...templateProps} />;
      default:
        return <ModernProfessionalTemplate {...templateProps} />;
    }
  };

  // Render form based on active section
  const renderSectionForm = () => {
    switch (activeSection) {
      case 'personalInfo':
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            onChange={(data) => updateSection('personalInfo', data)}
          />
        );
      case 'summary':
        return (
          <SummaryForm
            data={resumeData.summary}
            onChange={(data) => updateSection('summary', data)}
          />
        );
      case 'experience':
        return (
          <ExperienceForm
            data={resumeData.experience}
            onChange={(data) => updateSection('experience', data)}
          />
        );
      case 'education':
        return (
          <EducationForm
            data={resumeData.education}
            onChange={(data) => updateSection('education', data)}
          />
        );
      case 'skills':
        return (
          <SkillsForm
            data={resumeData.skills}
            onChange={(data) => updateSection('skills', data)}
          />
        );
      case 'projects':
        return (
          <ProjectsForm
            data={resumeData.projects}
            onChange={(data) => updateSection('projects', data)}
          />
        );
      case 'certifications':
        return (
          <CertificationsForm
            data={resumeData.certifications}
            onChange={(data) => updateSection('certifications', data)}
          />
        );
      case 'languages':
        return (
          <LanguagesForm
            data={resumeData.languages}
            onChange={(data) => updateSection('languages', data)}
          />
        );
      default:
        return null;
    }
  };

  const completeness = calculateResumeCompleteness(resumeData);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className='flex items-center justify-center min-h-[60vh]'>
          <div className='text-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4'></div>
            <p className='text-gray-600'>Loading resume...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className='min-h-screen bg-gray-50'>
        {/* Top Bar */}
        <div className='bg-white border-b sticky top-0 z-10'>
          <div className='max-w-screen-2xl mx-auto px-4 py-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <button
                  onClick={() => navigate('/dashboard')}
                  className='text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100'
                >
                  <LuArrowLeft className='text-xl' />
                </button>
                <div>
                  <input
                    type='text'
                    className='text-lg font-semibold outline-none border-b-2 border-transparent hover:border-purple-300 focus:border-purple-500 px-2 py-1'
                    value={resumeTitle}
                    onChange={(e) => setResumeTitle(e.target.value)}
                    placeholder='Untitled Resume'
                  />
                  <div className='flex items-center gap-2 mt-1 px-2'>
                    <div className='w-32 bg-gray-200 rounded-full h-1.5'>
                      <div
                        className='bg-purple-600 h-1.5 rounded-full transition-all'
                        style={{ width: `${completeness}%` }}
                      ></div>
                    </div>
                    <span className='text-xs text-gray-600'>{completeness}% Complete</span>
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                {isSaving && (
                  <span className='text-sm text-gray-600 mr-2'>Saving...</span>
                )}
                <button
                  onClick={() => setShowThemePicker(!showThemePicker)}
                  className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50'
                  title='Change theme'
                >
                  <LuPalette />
                  Theme
                </button>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50'
                >
                  {showPreview ? <LuEyeOff /> : <LuEye />}
                  {showPreview ? 'Hide' : 'Show'} Preview
                </button>
                <button
                  onClick={handlePrint}
                  className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700'
                >
                  <LuDownload />
                  Download PDF
                </button>
              </div>
            </div>

            {/* Theme Picker */}
            {showThemePicker && (
              <div className='mt-3 p-4 bg-gray-50 rounded-lg'>
                <h4 className='text-sm font-semibold text-gray-700 mb-3'>Choose Color Theme</h4>
                <div className='flex flex-wrap gap-3'>
                  {colorThemes.map((theme, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTheme(theme)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition ${
                        selectedTheme.name === theme.name
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div
                        className='w-6 h-6 rounded-full'
                        style={{ backgroundColor: theme.primary }}
                      ></div>
                      <span className='text-sm font-medium'>{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className='max-w-screen-2xl mx-auto p-4'>
          <div className='flex gap-4'>
            {/* Editor Sidebar */}
            <div className={`${showPreview ? 'w-1/2' : 'w-full'} transition-all`}>
              <div className='bg-white rounded-lg shadow-sm'>
                {/* Section Tabs */}
                <div className='border-b overflow-x-auto'>
                  <div className='flex p-2 gap-1'>
                    {resumeSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition ${
                          activeSection === section.id
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {section.label}
                        {section.required && <span className='text-red-500 ml-1'>*</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section Content */}
                <div className='p-6 max-h-[calc(100vh-220px)] overflow-y-auto custom-scrollbar'>
                  {renderSectionForm()}
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            {showPreview && (
              <div className='w-1/2'>
                <div className='sticky top-20'>
                  <div className='bg-white rounded-lg shadow-sm p-4'>
                    <h3 className='text-sm font-semibold text-gray-700 mb-3'>Live Preview</h3>
                    <div className='bg-gray-100 rounded-lg p-4 max-h-[calc(100vh-220px)] overflow-y-auto custom-scrollbar'>
                      <div className='transform scale-50 origin-top-left' style={{ width: '200%', height: '200%' }}>
                        <div ref={resumeRef}>
                          {renderTemplate()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditResume;