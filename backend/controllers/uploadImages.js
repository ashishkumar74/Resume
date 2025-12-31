const fs = require("fs");
const path = require("path");
const Resume = require("../models/Resume");
const upload = require("../middlewares/uploadMiddleware");

const uploadResumeImages = async (req, res) => {
    try {
        upload.fields([{ name: 'thumbnail' }, { name: 'profileImage' }])(req, res, async (error) => {
            if (error) {
                return res.status(400).json({ message: 'Error uploading files', error: error.message });
            }
            const resumeId = req.params.id;
            const resume = await Resume.findOne({ _id: resumeId, userId: req.user.id });

            if (!resume) {
                return res.status(404).json({ error: "Resume not found or unauthorized" });
            }

            const uploadsFolder = path.join(__dirname, "..", "uploads");
            const baseUrl = `${req.protocol}://${req.get("host")}`;

            const newThumbnail = req.files.thumbnail?.[0];
            const newProfileImage = req.files.profileImage?.[0];

            if (newThumbnail) {
                if (resume.thumbnailLink) {
                    const oldThumbnail = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
                    if (fs.existsSync(oldProfile)) {
                        fs.unlinkSync(oldProfile);
                    }
                }
                resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
            }
            await resume.save();

            res.status(200).json({
                message: "Images uploaded successfully",
                thumbnailLink: resume.thumbnailLink,
                profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
            });
        });
    } catch (error) {
        console.error("Error uploading images:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports = { uploadResumeImages };