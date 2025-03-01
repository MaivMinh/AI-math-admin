import React from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const StatCard = ({ title, value, percent, isIncrease, selectedFilter }) => {
  const primaryColor = isIncrease ? "#5C2483" : "#D97706"; // Tím hoặc Cam
  const bgColor = isIncrease ? "#EDE7F6" : "#FEF3C7"; // Màu nền cho phần trăm
  const borderColor = isIncrease ? "#5C2483" : "#F59E0B"; // Viền
  
  // Định nghĩa mốc thời gian theo bộ lọc
  const timePeriodMap = {
    "Hôm nay": "hôm qua",
    "Theo tuần": "tuần trước",
    "Theo tháng": "tháng trước",
    "Theo năm": "năm trước",
  };

  const timePeriod = timePeriodMap[selectedFilter] || "trước đó";

  return (
    <div className="border p-3 rounded-lg shadow-md" style={{ borderColor }}>
      {/* Tiêu đề đổi màu theo trạng thái isIncrease */}
      <h3 className="text-xl" style={{ color: primaryColor }}>
        {title}
      </h3>

      {/* Giá trị chính & phần trăm */}
      <div className="flex justify-between items-center">
        <span
          className="text-3xl font-bold ${textColor} py-1 rounded-lg"
          style={{ color: primaryColor }}
        >
          {value}
        </span>

        {/* Phần trăm thay đổi màu sắc theo trạng thái */}
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-bold px-2 py-1 rounded-lg"
            style={{ color: primaryColor, backgroundColor: bgColor }}
          >
            {percent}
          </span>
          {isIncrease ? (
            <ArrowUpOutlined style={{ color: primaryColor }} />
          ) : (
            <ArrowDownOutlined style={{ color: primaryColor }} />
          )}
        </div>
      </div>

      {/* Dòng chú thích */}
      <p className="text-xs mt-1 font-bold" style={{ color: primaryColor }}>
        {isIncrease
          ? `Tăng ${percent} so với ${timePeriod}`
          : `Giảm ${percent} so với ${timePeriod}`}
      </p>
    </div>
  );
};

export default StatCard;
