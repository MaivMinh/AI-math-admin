import React, { useState } from "react";
import { Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FilterDropdown = ({ selectedFilter, setSelectedFilter }) => {
  // Xử lý khi chọn một mục
  const handleMenuClick = (e) => {
    setSelectedFilter(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Hôm nay">Hôm nay</Menu.Item>
      <Menu.Item key="Theo tuần">Theo tuần</Menu.Item>
      <Menu.Item key="Theo tháng">Theo tháng</Menu.Item>
      <Menu.Item key="Theo năm">Theo năm</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button className="border border-[#B2D235] text-[#85A900] flex items-center gap-1">
        {selectedFilter} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default FilterDropdown;
