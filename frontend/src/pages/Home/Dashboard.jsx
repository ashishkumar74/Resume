import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { LuCirclePlus } from 'react-icons/lu';
import moment from 'moment';
import ResumeSummaryCard from '../../components/Cards/ResumeSummaryCard';
import Modal from '../../components/Modal';
import CreateResumeForm from './CreateResumeForm';

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [allResumes, setAllResumes] = useState(null);

  const fetchAllResume = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
      setAllResumes(response.data);

    } catch (error) {
      console.error("Error fetching resumes:", error);
    }
  };

  useEffect(() => {
    fetchAllResume();
  }, []);

  return (
    <DashboardLayout>
      {/* Welcome Header */}
      <div className='mb-8 px-4 md:px-0'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>My Resumes</h1>
        <p className='text-gray-600'>Create, edit, and manage your professional resumes</p>
      </div>

      {/* Resume Grid */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0'>
        <div className="h-[300px] flex flex-col gap-5 items-center justify-center bg-gradient-to-br from-purple-50 to-white rounded-lg border-2 border-dashed border-purple-300 hover:border-purple-400 hover:from-purple-100 hover:to-white cursor-pointer transition-all group"
          onClick={() => setOpenCreateModal(true)}
        >
          <div className='w-16 h-16 flex items-center justify-center bg-purple-600 group-hover:bg-purple-700 rounded-2xl transition-colors shadow-md'>
            <LuCirclePlus className='text-3xl text-white' />
          </div>
          <h3 className='text-lg font-semibold text-gray-900'>Create New Resume</h3>
          <p className='text-sm text-gray-600 px-4 text-center'>Start building your professional resume</p>
        </div>
        {allResumes?.map((resume) => (
          <ResumeSummaryCard
            key={resume?._id}
            imgUrl={resume?.thumbnailLink || null}
            title={resume.title}
            lastUpdated={resume?.updatedAt
              ? moment(resume.updatedAt).format('DD MMM, YYYY') : ""
            }
            onSelect={() => navigate(`/resume/${resume?._id}`)}
          />
        ))}
      </div>

      {/* Empty State */}
      {allResumes && allResumes.length === 0 && (
        <div className='text-center py-16 px-4'>
          <div className='w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <LuCirclePlus className='text-4xl text-purple-600' />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>No resumes yet</h3>
          <p className='text-gray-600 mb-6'>Get started by creating your first professional resume</p>
          <button
            onClick={() => setOpenCreateModal(true)}
            className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium'
          >
            Create Your First Resume
          </button>
        </div>
      )}

      {/* Create Resume Modal */}
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
      >
        <CreateResumeForm
          onClose={() => setOpenCreateModal(false)}
          onSuccess={fetchAllResume}
        />
      </Modal>
    </DashboardLayout>
  )
}

export default Dashboard