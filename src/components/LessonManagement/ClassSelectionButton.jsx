import { Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const ClassSelectionButton = ({ items }) => {
  const [selectedClass, setSelectedClass] = useState("Lớp 1"); // Mặc định là "Lớp 1"

  // Hàm xử lý khi người dùng chọn lớp
  const handleMenuClick = (e) => {
    setSelectedClass(e.key); // Cập nhật lớp đã chọn
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.label} style={{ textAlign: "center" }}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
      <Button
        size="large"
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>{selectedClass}</span> {/* Hiển thị lớp đã chọn */}
        <p>
          <DownOutlined />
        </p>
      </Button>
    </Dropdown>
  );
};

export default ClassSelectionButton;
