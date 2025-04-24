import { Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import PropTypes from 'prop-types';

const ClassSelectionButton = ({ items, onSelect }) => {
  const [selectedClass, setSelectedClass] = useState("Lớp 1"); // Mặc định là "Lớp 1"

  // Hàm xử lý khi người dùng chọn lớp
  const handleMenuClick = (e) => {
    const selectedItem = items.find(item => item.label === e.key);
    setSelectedClass(e.key); // Cập nhật lớp đã chọn
    if (selectedItem && onSelect) {
      onSelect(selectedItem.key); // Pass the grade number (key) to parent
    }
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
          gap: "4px"
        }}
      >
        {selectedClass}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

ClassSelectionButton.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func
};

export default ClassSelectionButton;