// Resume Template Data Structure
export const resumeTemplates = [
  {
    id: 'modern-professional',
    name: 'Modern Professional',
    description: 'Clean and modern design perfect for tech and corporate roles',
    thumbnail: '/templates/modern-professional.png',
    isPremium: false,
  },
  {
    id: 'creative-designer',
    name: 'Creative Designer',
    description: 'Bold and creative layout for designers and artists',
    thumbnail: '/templates/creative-designer.png',
    isPremium: false,
  },
  {
    id: 'executive-classic',
    name: 'Executive Classic',
    description: 'Traditional and elegant format for senior positions',
    thumbnail: '/templates/executive-classic.png',
    isPremium: true,
  },
];

// Initial Resume Data Structure
export const initialResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    profilePhoto: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  certifications: [],
  projects: [],
  languages: [],
};

// Experience Item Template
export const experienceTemplate = {
  id: Date.now(),
  jobTitle: '',
  company: '',
  location: '',
  startDate: '',
  endDate: '',
  isCurrentlyWorking: false,
  description: '',
  achievements: [''],
};

// Education Item Template
export const educationTemplate = {
  id: Date.now(),
  degree: '',
  institution: '',
  location: '',
  startDate: '',
  endDate: '',
  gpa: '',
  achievements: [''],
};

// Project Item Template
export const projectTemplate = {
  id: Date.now(),
  title: '',
  description: '',
  technologies: [],
  link: '',
  startDate: '',
  endDate: '',
};

// Certification Item Template
export const certificationTemplate = {
  id: Date.now(),
  name: '',
  issuer: '',
  issueDate: '',
  expiryDate: '',
  credentialId: '',
  credentialUrl: '',
};

// Language Item Template
export const languageTemplate = {
  id: Date.now(),
  language: '',
  proficiency: 'intermediate', // beginner, intermediate, advanced, native
};

// Skill Categories
export const skillCategories = [
  'Programming Languages',
  'Frameworks & Libraries',
  'Tools & Technologies',
  'Databases',
  'Soft Skills',
  'Other',
];

// Language Proficiency Levels
export const proficiencyLevels = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'native', label: 'Native/Fluent' },
];

// Resume Sections Configuration
export const resumeSections = [
  { id: 'personalInfo', label: 'Personal Information', icon: 'user', required: true },
  { id: 'summary', label: 'Professional Summary', icon: 'file-text', required: false },
  { id: 'experience', label: 'Work Experience', icon: 'briefcase', required: false },
  { id: 'education', label: 'Education', icon: 'graduation-cap', required: false },
  { id: 'skills', label: 'Skills', icon: 'tool', required: false },
  { id: 'projects', label: 'Projects', icon: 'code', required: false },
  { id: 'certifications', label: 'Certifications', icon: 'award', required: false },
  { id: 'languages', label: 'Languages', icon: 'globe', required: false },
];

// Color Themes for Resume Templates
export const colorThemes = [
  { name: 'Classic Blue', primary: '#2563EB', secondary: '#1E40AF', text: '#1F2937' },
  { name: 'Professional Purple', primary: '#7C3AED', secondary: '#5B21B6', text: '#1F2937' },
  { name: 'Modern Green', primary: '#059669', secondary: '#047857', text: '#1F2937' },
  { name: 'Corporate Gray', primary: '#4B5563', secondary: '#374151', text: '#1F2937' },
  { name: 'Creative Orange', primary: '#EA580C', secondary: '#C2410C', text: '#1F2937' },
];

// Font Options
export const fontOptions = [
  { name: 'Urbanist', value: 'Urbanist, sans-serif' },
  { name: 'Inter', value: 'Inter, sans-serif' },
  { name: 'Roboto', value: 'Roboto, sans-serif' },
  { name: 'Open Sans', value: 'Open Sans, sans-serif' },
  { name: 'Lato', value: 'Lato, sans-serif' },
  { name: 'Playfair Display', value: 'Playfair Display, serif' },
];

// Sample Resume Data for Preview
export const sampleResumeData = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    portfolio: 'johndoe.com',
    profilePhoto: '',
  },
  summary: 'Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about creating scalable applications and leading development teams to deliver high-quality products.',
  experience: [
    {
      id: 1,
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      startDate: '2021-06',
      endDate: '',
      isCurrentlyWorking: true,
      description: 'Leading development of cloud-based applications',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California',
      location: 'Berkeley, CA',
      startDate: '2015-09',
      endDate: '2019-05',
      gpa: '3.8',
      achievements: ['Dean\'s List', 'Computer Science Excellence Award'],
    },
  ],
  skills: [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'MongoDB',
    'PostgreSQL',
  ],
  certifications: [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2022-08',
      expiryDate: '2025-08',
      credentialId: 'AWS-12345',
      credentialUrl: '',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform serving 10,000+ users',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'github.com/johndoe/ecommerce',
      startDate: '2022-01',
      endDate: '2022-06',
    },
  ],
  languages: [
    { id: 1, language: 'English', proficiency: 'native' },
    { id: 2, language: 'Spanish', proficiency: 'intermediate' },
  ],
};

// Form Validation Rules
export const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  phone: {
    pattern: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
    message: 'Please enter a valid phone number',
  },
  url: {
    pattern: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    message: 'Please enter a valid URL',
  },
  required: {
    message: 'This field is required',
  },
};

// Tips for each resume section
export const sectionTips = {
  personalInfo: [
    'Use a professional email address',
    'Include your location (city, state) for local opportunities',
    'Add links to your LinkedIn and portfolio if available',
  ],
  summary: [
    'Keep it concise (2-4 sentences)',
    'Highlight your key strengths and career goals',
    'Tailor it to the job you\'re applying for',
  ],
  experience: [
    'Use action verbs to start each bullet point',
    'Quantify achievements with numbers and metrics',
    'Focus on results and impact, not just responsibilities',
  ],
  education: [
    'List most recent education first',
    'Include relevant coursework for entry-level positions',
    'Add GPA if it\'s 3.5 or higher',
  ],
  skills: [
    'Organize skills by category (e.g., Languages, Frameworks)',
    'List skills most relevant to the job first',
    'Be honest about your proficiency level',
  ],
  projects: [
    'Describe the problem you solved',
    'Highlight technologies and tools used',
    'Include links to live demos or GitHub repositories',
  ],
  certifications: [
    'List certifications relevant to your target role',
    'Include issue and expiry dates',
    'Add credential IDs and verification links when available',
  ],
  languages: [
    'Be honest about your proficiency level',
    'Include languages relevant to the job',
    'Consider adding language certifications (e.g., TOEFL, IELTS)',
  ],
};
