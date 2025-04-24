import { useState } from "react";
import { Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

const Lesson = ({ chapterTitle, lessons = [], onEdit, onDelete }) => {
  const [chapterExpanded, setChapterExpanded] = useState(false);
  const [expandedLessons, setExpandedLessons] = useState({});

  console.log("lessons: ", lessons);

  const toggleChapter = () => {
    setChapterExpanded(!chapterExpanded);
  };

  const toggleLesson = (lessonId) => (e) => {
    e.stopPropagation();
    setExpandedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Chapter header */}
      <div
        className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
        onClick={toggleChapter}
      >
        <Button
          icon={chapterExpanded ? <DownOutlined /> : <RightOutlined />}
          type="text"
          style={{ marginRight: "8px" }}
        />
        <div className="flex-1 font-bold">{chapterTitle}</div>

        <Button
          icon={<EditOutlined />}
          type="text"
          style={{ color: "#9C3D9A", marginRight: "8px" }}
          onClick={(e) => {
            e.stopPropagation();
            if (onEdit) onEdit();
          }}
        />
        <Button
          icon={<DeleteOutlined />}
          type="text"
          style={{ color: "#F56C6C" }}
          onClick={(e) => {
            e.stopPropagation();
            if (onDelete) onDelete();
          }}
        />
      </div>

      {/* Chapter content */}
      {chapterExpanded && (
        <div className="ml-8">
          {lessons && lessons.length > 0 ? (
            lessons.map((lesson, index) => (
              <div key={lesson.id || index}>
                {/* Lesson header */}
                <div
                  className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                  onClick={toggleLesson(lesson.id)}
                >
                  <Button
                    icon={
                      expandedLessons[lesson.id] ? (
                        <DownOutlined />
                      ) : (
                        <RightOutlined />
                      )
                    }
                    type="text"
                    style={{ marginRight: "8px" }}
                  />
                  <div className="font-bold">
                    Bài {index + 1}: {lesson.name}
                  </div>
                </div>

                {/* Lesson content */}
                {expandedLessons[lesson.id] && (
                  <div className="ml-12">
                    <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer">
                      {lesson.slide ? "Slide" : "Chưa có slide"}
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer">
                      {lesson.video ? (
                        <a
                          href={lesson.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Video bài giảng
                        </a>
                      ) : (
                        "Chưa có video"
                      )}
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer">
                      {lesson.exercises && lesson.exercises.length > 0
                        ? "Bài tập"
                        : "Chưa có bài tập"}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500 italic">Chưa có bài học nào</div>
          )}
        </div>
      )}
    </div>
  );
};

Lesson.propTypes = {
  chapterTitle: PropTypes.string.isRequired,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      slide: PropTypes.any,
      video: PropTypes.any,
      exercises: PropTypes.array,
    })
  ),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Lesson;
