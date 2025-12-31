import React, { useState } from 'react';
import Input from '../Inputs/Input';
import { LuPlus, LuTrash2, LuX } from 'react-icons/lu';
import { sectionTips, projectTemplate } from '../../utils/data';
import { formatDate } from '../../utils/helper';

const ProjectsForm = ({ data = [], onChange }) => {
  const [expandedId, setExpandedId] = useState(null);

  const addProject = () => {
    const newProject = { ...projectTemplate, id: Date.now() };
    onChange([...data, newProject]);
    setExpandedId(newProject.id);
  };

  const updateProject = (id, field, value) => {
    const updated = data.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    );
    onChange(updated);
  };

  const removeProject = (id) => {
    onChange(data.filter(project => project.id !== id));
  };

  const addTechnology = (id, tech) => {
    const updated = data.map(project => {
      if (project.id === id) {
        const technologies = project.technologies || [];
        if (tech.trim() && !technologies.includes(tech.trim())) {
          return { ...project, technologies: [...technologies, tech.trim()] };
        }
      }
      return project;
    });
    onChange(updated);
  };

  const removeTechnology = (id, techToRemove) => {
    const updated = data.map(project => {
      if (project.id === id) {
        return {
          ...project,
          technologies: (project.technologies || []).filter(tech => tech !== techToRemove)
        };
      }
      return project;
    });
    onChange(updated);
  };

  return (
    <div className='space-y-4'>
      {/* Tips Section */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
        <h4 className='text-sm font-semibold text-blue-900 mb-2'>💡 Pro Tips</h4>
        <ul className='text-xs text-blue-800 space-y-1'>
          {sectionTips.projects.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Project Items */}
      {data.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          isExpanded={expandedId === project.id}
          onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
          onUpdate={updateProject}
          onRemove={removeProject}
          onAddTechnology={addTechnology}
          onRemoveTechnology={removeTechnology}
        />
      ))}

      {/* Add Button */}
      <button
        type='button'
        className='w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-purple-400 hover:text-purple-600 transition'
        onClick={addProject}
      >
        <LuPlus className='text-lg' />
        Add Project
      </button>
    </div>
  );
};

const ProjectItem = ({
  project,
  isExpanded,
  onToggle,
  onUpdate,
  onRemove,
  onAddTechnology,
  onRemoveTechnology
}) => {
  const [techInput, setTechInput] = useState('');

  const handleAddTech = () => {
    if (techInput.trim()) {
      onAddTechnology(project.id, techInput);
      setTechInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTech();
    }
  };

  return (
    <div className='border border-gray-200 rounded-lg p-4 bg-white hover:border-purple-300 transition'>
      {/* Header */}
      <div className='flex justify-between items-start mb-3'>
        <button
          type='button'
          className='flex-1 text-left'
          onClick={onToggle}
        >
          <h4 className='text-sm font-semibold text-gray-900'>
            {project.title || 'Project Title'}
          </h4>
          {project.startDate && (
            <p className='text-xs text-gray-600 mt-1'>
              {formatDate(project.startDate)} - {formatDate(project.endDate) || 'Present'}
            </p>
          )}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-1 mt-2'>
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className='text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded'
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className='text-xs text-gray-500'>
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          )}
        </button>
        <button
          type='button'
          className='text-red-500 hover:text-red-700 p-1'
          onClick={() => onRemove(project.id)}
        >
          <LuTrash2 className='text-base' />
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className='space-y-4 mt-4'>
          <Input
            label='Project Title'
            type='text'
            placeholder='E-Commerce Platform'
            value={project.title || ''}
            onChange={(e) => onUpdate(project.id, 'title', e.target.value)}
            required
          />

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Project Description
            </label>
            <textarea
              className='w-full text-sm text-black outline-none bg-white border border-slate-100 px-3 py-3 rounded-md placeholder:text-gray-500 focus-within:border-purple-300 min-h-[100px] resize-y'
              placeholder='Describe what the project does, problems it solves, and your role in it...'
              value={project.description || ''}
              onChange={(e) => onUpdate(project.id, 'description', e.target.value)}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              label='Start Date'
              type='month'
              value={project.startDate || ''}
              onChange={(e) => onUpdate(project.id, 'startDate', e.target.value)}
            />
            <Input
              label='End Date'
              type='month'
              value={project.endDate || ''}
              onChange={(e) => onUpdate(project.id, 'endDate', e.target.value)}
            />
          </div>

          <Input
            label='Project Link (GitHub, Demo, etc.)'
            type='text'
            placeholder='https://github.com/username/project'
            value={project.link || ''}
            onChange={(e) => onUpdate(project.id, 'link', e.target.value)}
          />

          {/* Technologies */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Technologies Used
            </label>
            <div className='flex gap-2 mb-3'>
              <input
                type='text'
                className='flex-1 text-sm text-black outline-none bg-white border border-slate-100 px-3 py-2 rounded-md placeholder:text-gray-500 focus-within:border-purple-300'
                placeholder='React, Node.js, MongoDB...'
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                type='button'
                className='flex items-center gap-1 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition'
                onClick={handleAddTech}
              >
                <LuPlus className='text-base' />
                Add
              </button>
            </div>
            {project.technologies && project.technologies.length > 0 && (
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 px-3 py-1.5 rounded-full text-sm'
                  >
                    <span>{tech}</span>
                    <button
                      type='button'
                      className='hover:text-red-600 transition'
                      onClick={() => onRemoveTechnology(project.id, tech)}
                    >
                      <LuX className='text-sm' />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;
