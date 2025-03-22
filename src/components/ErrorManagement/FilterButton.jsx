import React, { useState } from "react";
import { Button, Dropdown, Checkbox, DatePicker, Space } from "antd";
import { FilterOutlined, CalendarOutlined } from "@ant-design/icons";
import viVN from "antd/es/date-picker/locale/vi_VN";

const FilterButton = ({ onApplyFilter, onClearFilter }) => {
  const [visible, setVisible] = useState(false);
  const [filters, setFilters] = useState({
    fixed: false,
    unfixed: false,
    startDate: null,
    endDate: null,
  });

  // Xử lý cập nhật bộ lọc
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Xác nhận lọc
  const handleApply = () => {
    onApplyFilter(filters);
    setVisible(false);
  };

  // Xóa bộ lọc
  const handleClear = () => {
    setFilters({
      fixed: false,
      unfixed: false,
      startDate: null,
      endDate: null,
    });
    onClearFilter();
    setVisible(false);
  };

  return (
    <Dropdown
      visible={visible}
      onVisibleChange={setVisible}
      overlay={
        <div className="bg-white p-4 border border-[#85A900] rounded-lg shadow-lg w-64">
          {/* Trạng thái */}
          <h3 className="text-[#85A900] font-semibold">Trạng thái</h3>
          <Checkbox
            checked={filters.fixed}
            onChange={(e) => handleFilterChange("fixed", e.target.checked)}
          >
            Đã khắc phục
          </Checkbox>
          <Checkbox
            checked={filters.unfixed}
            onChange={(e) => handleFilterChange("unfixed", e.target.checked)}
          >
            Chưa khắc phục
          </Checkbox>

          {/* Ngày phát sinh */}
          <h3 className="text-[#85A900] font-semibold mb-2">Ngày phát sinh</h3>
          <DatePicker
            locale={viVN}
            value={filters.startDate}
            onChange={(date) => handleFilterChange("startDate", date)}
            className="w-full"
            placeholder="Từ ngày..."
            format="DD/MM/YYYY HH:mm A"
            suffixIcon={<CalendarOutlined />}
          />
          <p className="text-center text-[#85A900]">đến</p>
          <DatePicker
            locale={viVN}
            value={filters.endDate}
            onChange={(date) => handleFilterChange("endDate", date)}
            className="w-full"
            placeholder="Đến ngày..."
            format="DD/MM/YYYY HH:mm A"
            suffixIcon={<CalendarOutlined />}
          />

          {/* Nút Lọc & Xóa */}
          <div className="flex justify-between mt-4 gap-4">
            <Button
              type="primary"
              className="bg-[#85A900] w-full"
              onClick={handleApply}
            >
              LỌC
            </Button>
            <Button
              style={{
                backgroundColor: "#D1D5DB",
                color: "black",
                border: "none",
              }}
              onClick={handleClear}
            >
              XÓA BỘ LỌC
            </Button>
          </div>
        </div>
      }
      trigger={["click"]}
    >
      <Button
        icon={<FilterOutlined />}
        className="h-full border border-[#85A900]"
      >
        Lọc
      </Button>
    </Dropdown>
  );
};

export default FilterButton;
