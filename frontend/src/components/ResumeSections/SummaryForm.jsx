import React from 'react';
import { sectionTips } from '../../utils/data';

const SummaryForm = ({ data, onChange }) => {
  const maxLength = 500;
  const characterCount = data?.length || 0;

  return (
    <div className='space-y-4'>
      {/* Tips Section */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
        <h4 className='text-sm font-semibold text-blue-900 mb-2'>💡 Pro Tips</h4>
        <ul className='text-xs text-blue-800 space-y-1'>
          {sectionTips.summary.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary Textarea */}
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          Professional Summary
        </label>
        <textarea
          className='w-full text-sm text-black outline-none bg-white border border-slate-100 px-3 py-3 rounded-md placeholder:text-gray-500 focus-within:border-purple-300 min-h-[150px] resize-y'
          placeholder='Write a brief summary highlighting your key skills, experiences, and career objectives...'
          value={data || ''}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
        />
        <div className='flex justify-between items-center mt-1'>
          <span className='text-xs text-gray-500'>
            Keep it concise and impactful (2-4 sentences)
          </span>
          <span className={`text-xs ${characterCount > maxLength * 0.9 ? 'text-orange-600' : 'text-gray-500'}`}>
            {characterCount} / {maxLength}
          </span>
        </div>
      </div>

      {/* Quick Templates */}
      <div className='mt-6'>
        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Quick Start Templates</h4>
        <div className='space-y-2'>
          {summaryTemplates.map((template, index) => (
            <button
              key={index}
              type='button'
              className='w-full text-left text-xs bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300 rounded-lg p-3 transition'
              onClick={() => onChange(template.text)}
            >
              <div className='font-medium text-gray-900 mb-1'>{template.title}</div>
              <div className='text-gray-600'>{template.text}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const summaryTemplates = [
  {
    title: 'Software Engineer',
    text: 'Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about creating scalable applications and leading development teams to deliver high-quality products.',
  },
  {
    title: 'Marketing Professional',
    text: 'Results-driven marketing professional with 7+ years of experience in digital marketing and brand strategy. Proven track record of increasing brand awareness and driving revenue growth.',
  },
  {
    title: 'Project Manager',
    text: 'Certified project manager with 6+ years of experience leading cross-functional teams. Skilled in agile methodologies and delivering complex projects on time and within budget.',
  },
];

export default SummaryForm;
