import React from "react";
import { Button, Dropdown } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const FilterButton = ({ items }) => {
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomLeft"
      trigger={["click"]}
    >
      <Button size="large" style={{ width: "100%", height: "100%" }}>
        <span>Lọc</span>
        <p><FilterOutlined /></p>
      </Button>
    </Dropdown>
  );
};

export default FilterButton;
