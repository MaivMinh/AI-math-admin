import { useState, useEffect } from "react";
import SearchBar from "../Common/SearchBar";
import AddLessonButton from "./AddLessonButton";
import ClassSelectionButton from "./ClassSelectionButton";
import Lesson from "./Lesson";
import chapterService from "../../services/chapterService";

const LessonManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [chapters, setChapters] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(1);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await chapterService.getChapterDetails();
        setChapters(response.data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, []);

  // Filter chapters based on search term and organize by semester
  const filteredAndOrganizedChapters = chapters
    .filter(
      (chapter) =>
        chapter.grade === selectedGrade &&
        chapter.chapterName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reduce((acc, chapter) => {
      const semester = chapter.semester;
      if (!acc[semester]) {
        acc[semester] = [];
      }
      acc[semester].push(chapter);
      return acc;
    }, {});

  const onSearch = (value) => {
    setSearchTerm(value);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const classItems = [
    { label: "Lớp 1", key: "1" },
    { label: "Lớp 2", key: "2" },
    { label: "Lớp 3", key: "3" },
    { label: "Lớp 4", key: "4" },
    { label: "Lớp 5", key: "5" },
  ];

  const handleGradeSelect = (grade) => {
    console.log(grade);
    setSelectedGrade(parseInt(grade));
  };

  return (
    <div className="border border-[#B2D235] p-4 rounded-lg shadow-md">
      {/* Search & Filter */}
      <div className="w-full grid grid-cols-20 gap-x-3 mb-4">
        <div className="col-span-15">
          <SearchBar
            placeholder="Tìm kiếm theo tên chương, tên bài học..."
            onSearch={onSearch}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <ClassSelectionButton
            items={classItems}
            onSelect={handleGradeSelect}
          />
        </div>
        <div className="col-span-3">
          <AddLessonButton />
        </div>
      </div>

      {/* Display chapters organized by semester */}
      <div className="space-y-6">
        {Object.entries(filteredAndOrganizedChapters).map(
          ([semester, semesterChapters]) => (
            <div key={semester} className="space-y-4">
              <h2 className="text-lg font-semibold text-[#B2D235]">
                Học kì {semester}
              </h2>
              {semesterChapters.map((chapter) => (
                <div
                  key={`${chapter.grade}-${chapter.chapterOrder}`}
                  className="border w-full rounded-lg shadow-md"
                >
                  <Lesson
                    chapterTitle={`Chương ${chapter.chapterOrder}: ${chapter.chapterName}`}
                    lessons={(chapter.lessons || []).map((lesson) => ({
                      id: lesson.lessonOrder,
                      name: lesson.lessonName,
                      video: lesson.lessonContent,
                    }))}
                  />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LessonManagement;
