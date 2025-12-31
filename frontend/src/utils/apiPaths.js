export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
    AUTH : {
        REGISTER : '/api/auth/register',
        LOGIN: '/api/auth/login',
        GET_PROFILE: '/api/auth/profile',
    },

    RESUME: {
        CREATE: '/api/resume',
        GET_ALL: '/api/resume',
        GET_BY_ID: (id) => `/api/resume/${id}`,
        UPDATE: (id) => `/api/resume/${id}`,
        DELETE: (id) => `/api/resume/${id}`,
        UPLOAD_IMAGES: (id) => `/api/resume/${id}/uploads-images`,
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image"

        // yaha pe route me images se image kiye hain kyuki ek baar me ek hi image upload hogi
    },
};