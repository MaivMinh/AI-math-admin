import React from "react";
import { Button, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined, RightOutlined } from "@ant-design/icons";

const Lesson = ({ chapterTitle, onEdit, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      {/* Mũi tên */}
      <Button
        icon={<RightOutlined />}
        type="text"
        style={{ marginRight: "10px" }}
      />

      {/* Tiêu đề chương */}
      <div style={{ flex: 1, fontWeight: "bold" }}>{chapterTitle}</div>

      {/* Nút sửa và xóa */}
      <Button
        icon={<EditOutlined />}
        type="text"
        style={{ color: "#9C3D9A", marginRight: "10px" }}
        onClick={onEdit}
      />
      <Button
        icon={<DeleteOutlined />}
        type="text"
        style={{ color: "#F56C6C" }}
        onClick={onDelete}
      />
    </div>
  );
};

export default Lesson;
