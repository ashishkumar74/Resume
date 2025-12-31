import React, { useState } from 'react';
import Input from '../Inputs/Input';
import { LuPlus, LuTrash2 } from 'react-icons/lu';
import { sectionTips, certificationTemplate } from '../../utils/data';
import { formatDate } from '../../utils/helper';

const CertificationsForm = ({ data = [], onChange }) => {
  const [expandedId, setExpandedId] = useState(null);

  const addCertification = () => {
    const newCert = { ...certificationTemplate, id: Date.now() };
    onChange([...data, newCert]);
    setExpandedId(newCert.id);
  };

  const updateCertification = (id, field, value) => {
    const updated = data.map(cert =>
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    onChange(updated);
  };

  const removeCertification = (id) => {
    onChange(data.filter(cert => cert.id !== id));
  };

  return (
    <div className='space-y-4'>
      {/* Tips Section */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
        <h4 className='text-sm font-semibold text-blue-900 mb-2'>💡 Pro Tips</h4>
        <ul className='text-xs text-blue-800 space-y-1'>
          {sectionTips.certifications.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certification Items */}
      {data.map((cert) => (
        <div
          key={cert.id}
          className='border border-gray-200 rounded-lg p-4 bg-white hover:border-purple-300 transition'
        >
          {/* Header */}
          <div className='flex justify-between items-start mb-3'>
            <button
              type='button'
              className='flex-1 text-left'
              onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
            >
              <h4 className='text-sm font-semibold text-gray-900'>
                {cert.name || 'Certification Name'}
              </h4>
              {cert.issuer && (
                <p className='text-xs text-gray-600 mt-1'>
                  {cert.issuer}
                  {cert.issueDate && ` • Issued ${formatDate(cert.issueDate, 'MMMM YYYY')}`}
                </p>
              )}
            </button>
            <button
              type='button'
              className='text-red-500 hover:text-red-700 p-1'
              onClick={() => removeCertification(cert.id)}
            >
              <LuTrash2 className='text-base' />
            </button>
          </div>

          {/* Expanded Content */}
          {expandedId === cert.id && (
            <div className='space-y-4 mt-4'>
              <Input
                label='Certification Name'
                type='text'
                placeholder='AWS Certified Solutions Architect'
                value={cert.name || ''}
                onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                required
              />

              <Input
                label='Issuing Organization'
                type='text'
                placeholder='Amazon Web Services'
                value={cert.issuer || ''}
                onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                required
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input
                  label='Issue Date'
                  type='month'
                  value={cert.issueDate || ''}
                  onChange={(e) => updateCertification(cert.id, 'issueDate', e.target.value)}
                />
                <Input
                  label='Expiry Date (Optional)'
                  type='month'
                  value={cert.expiryDate || ''}
                  onChange={(e) => updateCertification(cert.id, 'expiryDate', e.target.value)}
                />
              </div>

              <Input
                label='Credential ID (Optional)'
                type='text'
                placeholder='AWS-12345-ABCDE'
                value={cert.credentialId || ''}
                onChange={(e) => updateCertification(cert.id, 'credentialId', e.target.value)}
              />

              <Input
                label='Credential URL (Optional)'
                type='text'
                placeholder='https://www.credly.com/badges/...'
                value={cert.credentialUrl || ''}
                onChange={(e) => updateCertification(cert.id, 'credentialUrl', e.target.value)}
              />
            </div>
          )}
        </div>
      ))}

      {/* Add Button */}
      <button
        type='button'
        className='w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-purple-400 hover:text-purple-600 transition'
        onClick={addCertification}
      >
        <LuPlus className='text-lg' />
        Add Certification
      </button>
    </div>
  );
};

export default CertificationsForm;
