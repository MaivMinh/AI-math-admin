import { https } from "./config";

const chapterService = {
  // Get all chapters
  getAllChapters: () => {
    return https.get("/chapters");
  },

  // Get chapter details
  getChapterDetails: () => {
    return https.get("/chapters/details");
  },

  // Get chapter details by grade
  getChapterDetailsByGrade: (gradeId) => {
    return https.get(`/chapters/grade/${gradeId}/details`);
  },

  // Add more chapter-related API calls here as needed
};

export default chapterService;