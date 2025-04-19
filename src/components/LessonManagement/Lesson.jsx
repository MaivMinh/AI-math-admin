import React, { useState } from "react";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";

const Lesson = ({ chapterTitle, onEdit, onDelete }) => {
  const [chapterExpanded, setChapterExpanded] = useState(false);
  const [lessonExpanded, setLessonExpanded] = useState(false);
  
  const toggleChapter = () => {
    setChapterExpanded(!chapterExpanded);
  };

  const toggleLesson = (e) => {
    e.stopPropagation();
    setLessonExpanded(!lessonExpanded);
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
          {/* Lesson header */}
          <div 
            className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
            onClick={toggleLesson}
          >
            <Button
              icon={lessonExpanded ? <DownOutlined /> : <RightOutlined />}
              type="text"
              style={{ marginRight: "8px" }}
            />
            <div className="font-bold ">Bài 1: Vị trí</div>
          </div>

          {/* Lesson content */}
          {lessonExpanded && (
            <div className="ml-12">
              <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer">
                Slide
              </div>
              <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer">
                Video bài giảng
              </div>
              <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer">
                Bài tập
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Lesson;