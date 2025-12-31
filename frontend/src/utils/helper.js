// Validation Functions
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 8;
}

export const validateFullName = (fullName) => {
    return fullName.trim().length > 3;
}

export const validatePhone = (phone) => {
  const phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phonePattern.test(phone);
};

export const validateURL = (url) => {
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return urlPattern.test(url);
};

// Date Formatting
export const formatDate = (dateString, format = 'MMM YYYY') => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const month = date.getMonth();
  const year = date.getFullYear();
  
  if (format === 'MMM YYYY') {
    return `${months[month]} ${year}`;
  } else if (format === 'MMMM YYYY') {
    return `${monthsFull[month]} ${year}`;
  } else if (format === 'YYYY-MM') {
    return dateString.substring(0, 7);
  }
  
  return dateString;
};

export const calculateDuration = (startDate, endDate) => {
  if (!startDate) return '';
  
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  
  return parts.length > 0 ? parts.join(', ') : 'Less than a month';
};

// String Utilities
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

// Array Utilities
export const removeItemById = (array, id) => {
  return array.filter(item => item.id !== id);
};

export const updateItemById = (array, id, updates) => {
  return array.map(item => 
    item.id === id ? { ...item, ...updates } : item
  );
};

export const reorderArray = (array, startIndex, endIndex) => {
  const result = Array.from(array);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Local Storage Utilities
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

// Resume Data Utilities
export const calculateResumeCompleteness = (resumeData) => {
  let totalFields = 0;
  let completedFields = 0;
  
  // Personal Info
  const personalInfoFields = ['firstName', 'lastName', 'email', 'phone'];
  personalInfoFields.forEach(field => {
    totalFields++;
    if (resumeData.personalInfo?.[field]) completedFields++;
  });
  
  // Summary
  totalFields++;
  if (resumeData.summary) completedFields++;
  
  // Experience
  totalFields++;
  if (resumeData.experience?.length > 0) completedFields++;
  
  // Education
  totalFields++;
  if (resumeData.education?.length > 0) completedFields++;
  
  // Skills
  totalFields++;
  if (resumeData.skills?.length > 0) completedFields++;
  
  return Math.round((completedFields / totalFields) * 100);
};

export const validateResumeSection = (section, data) => {
  const errors = {};
  
  switch (section) {
    case 'personalInfo':
      if (!data.firstName) errors.firstName = 'First name is required';
      if (!data.lastName) errors.lastName = 'Last name is required';
      if (!data.email) {
        errors.email = 'Email is required';
      } else if (!validateEmail(data.email)) {
        errors.email = 'Invalid email format';
      }
      if (data.phone && !validatePhone(data.phone)) {
        errors.phone = 'Invalid phone number';
      }
      if (data.linkedin && !validateURL(data.linkedin)) {
        errors.linkedin = 'Invalid URL';
      }
      if (data.portfolio && !validateURL(data.portfolio)) {
        errors.portfolio = 'Invalid URL';
      }
      break;
      
    case 'experience':
      if (!data.jobTitle) errors.jobTitle = 'Job title is required';
      if (!data.company) errors.company = 'Company is required';
      if (!data.startDate) errors.startDate = 'Start date is required';
      if (!data.isCurrentlyWorking && !data.endDate) {
        errors.endDate = 'End date is required';
      }
      break;
      
    case 'education':
      if (!data.degree) errors.degree = 'Degree is required';
      if (!data.institution) errors.institution = 'Institution is required';
      if (!data.startDate) errors.startDate = 'Start date is required';
      break;
      
    case 'project':
      if (!data.title) errors.title = 'Project title is required';
      if (!data.description) errors.description = 'Description is required';
      break;
      
    case 'certification':
      if (!data.name) errors.name = 'Certification name is required';
      if (!data.issuer) errors.issuer = 'Issuer is required';
      break;
      
    default:
      break;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Export/Download Utilities
export const generateResumeFileName = (firstName, lastName) => {
  const name = `${firstName}_${lastName}`.replace(/\s+/g, '_');
  const date = new Date().toISOString().split('T')[0];
  return `${name}_Resume_${date}`;
};

export const downloadAsJSON = (data, fileName) => {
  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Generate Unique ID
export const generateId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9);
};

// Deep Clone Object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Get Initials from Name
export const getInitials = (firstName, lastName) => {
  const first = firstName?.charAt(0).toUpperCase() || '';
  const last = lastName?.charAt(0).toUpperCase() || '';
  return `${first}${last}`;
};

// Debounce Function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};