const fs = require("node:fs");
const path = require("node:path");
const Resume = require("../models/Resume");

const createResume = async (req, res) => {
    try {
        const { title } = req.body;

        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: "",
                fullName: "",
                designation: "",
                summary: "",
            },
            contactInfo: {
                email: "",
                phone: "",
                location: "",
                linkedin: "",
                github: "",
                website: "",
            },
            workExperience: [
                {
                    company: "",
                    role: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                },
            ],
            education: [
                {
                    degree: "",
                    institution: "",
                    startDate: "",
                    endDate: "",
                },
            ],
            skills: [
                {
                    name: "",
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: "",
                    description: "",
                    github: "",
                    liveDemo: "",
                },
            ],
            certifications: [
                {
                    title: "",
                    issue: "",
                    year: "",
                },
            ],
            languages: [
                {
                    name: "",
                    progress: 0,
                },
            ],
            interests: [""],
        };

        const newResume = await Resume.create({
            userId: req.user.id,
            title,
            ...defaultResumeData,
        });

        res.status(201).json(newResume);

    } catch (error) {
        res.status(500).json({ error: "Failed to create resume" });
    }
};

const getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.user.id }).sort({ updatedAt: -1 });
        res.status(200).json(resumes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch resumes" });
    }
};

const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.user.id });
        if (!resume) {
            return res.status(404).json({ error: "Resume not found" });
        }
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch resumes" });
    }
};

const updateResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.user.id });

        if (!resume) {
            return res.status(404).json({ error: "Resume not found" });
        }
        Object.assign(resume, req.body);

        const savedResume = await resume.save();
        res.status(200).json(savedResume);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch resumes" });
    }
};

const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.user.id });

        if (!resume) {
            return res.status(404).json({ error: "Resume not found" });
        }
        const uploadsFolder = path.join(__dirname, "..", "uploads");
        const baseUrl = `${req.protocol}://${req.get("host")}`;

        if (resume.thumbnailLink) {
            const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
            if (fs.existsSync(oldThumbnail)) {
                fs.unlinkSync(oldThumbnail);
            }

        }
        if (resume.profileInfo?.profilePreviewUrl) {
            const oldProfile = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
            if (fs.existsSync(oldProfile)) {
                fs.unlinkSync(oldProfile);
            }

        }
        const deleted = await Resume.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id,
        });
        if (!deleted) {
            return res.status(404).json({ error: "Resume not found" });
        }
        res.status(200).json({ message: "Resume deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch resumes" });
    }
};

module.exports = {
    createResume,
    getUserResumes,
    getResumeById,
    updateResume,
    deleteResume
};