import React, { useState } from "react";
import { Modal, Button, Input, Upload, Select, Row, Col } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const AddLessonButton = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    class: "Lớp 1",
    chapter: "",
    lessonName: "",
    slideFile: null,
    videoFile: null,
    exercises: [],
  });

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (file, type) => {
    setFormData({
      ...formData,
      [type]: file,
    });
  };

  const handleSave = () => {
    // Xử lý logic lưu bài học ở đây
    console.log(formData);
    handleClose();
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <>
      <Button
        size="large"
        style={{ width: "100%", height: "100%" }}
        icon={<PlusOutlined />}
        onClick={handleOpen}
      >
        Thêm bài học
      </Button>

      <Modal
        title="Thêm bài học"
        visible={visible}
        onCancel={handleClose}
        footer={null}
        width={600}
      >
        <form>
          <Row gutter={16}>
            {/* Cột 1 (1/10) */}
            <Col span={5}>
              <div className="form-item">
                <Select
                  value={formData.class}
                  onChange={(value) =>
                    setFormData({ ...formData, class: value })
                  }
                  style={{ width: "100%" }}
                >
                  <Select.Option value="Lớp 1">Lớp 1</Select.Option>
                  <Select.Option value="Lớp 2">Lớp 2</Select.Option>
                  <Select.Option value="Lớp 3">Lớp 3</Select.Option>
                  <Select.Option value="Lớp 4">Lớp 4</Select.Option>
                  <Select.Option value="Lớp 5">Lớp 5</Select.Option>
                </Select>
              </div>

              {/* Các tiêu đề căn phải */}
              <div
                className="form-item"
                style={{ marginTop: 22, textAlign: "right" }}
              >
                <h4>Tên bài học:</h4> {/* Tiêu đề */}
              </div>
              <div
                className="form-item"
                style={{ marginTop: 27, textAlign: "right" }}
              >
                <h4>Slide:</h4> {/* Tiêu đề */}
              </div>
              <div
                className="form-item"
                style={{ marginTop: 32, textAlign: "right" }}
              >
                <h4>Video bài giảng:</h4> {/* Tiêu đề */}
              </div>
              <div
                className="form-item"
                style={{ marginTop: 27, textAlign: "right" }}
              >
                <h4>Bài tập:</h4> {/* Tiêu đề */}
              </div>
            </Col>

            {/* Cột 2 (9/10) */}
            <Col span={19}>
              <div className="form-item" style={{ textAlign: "left" }}>
                <Input
                  name="chapter"
                  value={formData.chapter}
                  onChange={handleInputChange}
                  placeholder="Chương 1: Làm quen với một số hình"
                />
              </div>

              <div
                className="form-item"
                style={{ marginTop: 20, textAlign: "left" }}
              >
                <Input
                  name="lessonName"
                  value={formData.lessonName}
                  onChange={handleInputChange}
                  placeholder="Nhập tên bài học"
                />
              </div>

              <div
                className="form-item"
                style={{ marginTop: 17, textAlign: "left" }}
              >
                <Upload
                  beforeUpload={(file) => {
                    handleFileChange(file, "slideFile");
                    return false; // Ngừng upload tự động
                  }}
                  fileList={formData.slideFile ? [formData.slideFile] : []}
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />}>Tải tệp lên</Button>
                </Upload>
              </div>

              <div
                className="form-item"
                style={{ marginTop: 22, textAlign: "left" }}
              >
                <Upload
                  beforeUpload={(file) => {
                    handleFileChange(file, "videoFile");
                    return false; // Ngừng upload tự động
                  }}
                  fileList={formData.videoFile ? [formData.videoFile] : []}
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />}>Tải tệp lên</Button>
                </Upload>
              </div>

              <div
                className="form-item"
                style={{ marginTop: 17, textAlign: "left" }}
              >
                <Button
                  icon={<PlusOutlined />}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      exercises: [...formData.exercises, ""],
                    })
                  }
                >
                  Thêm bài tập
                </Button>
              </div>
            </Col>
          </Row>

          <div
            className="form-actions"
            style={{
              display: "flex",
              justifyContent: "center", // Căn giữa các nút
              marginTop: "20px", // Tạo khoảng cách với phần bài tập
            }}
          >
            <Button
              type="primary"
              onClick={handleSave}
              style={{ marginRight: 10 }}
            >
              Lưu
            </Button>
            <Button onClick={handleCancel}>Hủy</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddLessonButton;