import React, { useState } from "react";
import { Input, Button, DatePicker } from "antd";
import { SearchOutlined, CalendarOutlined } from "@ant-design/icons";
import viVN from "antd/es/date-picker/locale/vi_VN";

const DetailStatistics = ({ title }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="border border-[#B2D235] p-4 rounded-lg shadow-md">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-[#85A900]">{title}</h2>
        <Button
          onClick={() => setHidden(!hidden)}
          className="border border-[#B2D235] text-[#85A900] px-3 py-1 rounded-lg"
        >
          {hidden ? "Xem" : "Ẩn"}
        </Button>
      </div>

      {!hidden && (
        <div>
          {/* Ô tìm kiếm & Bộ lọc ngày */}

          <div className="flex gap-4 mb-4 mt-4">
            {/* Ô tìm kiếm (Chiếm 3/5) */}
            <div className="relative p-2 border border-[#B2D235] rounded-lg flex items-center px-2 basis-3/5">
              <h2 className="absolute -top-1/2 translate-y-1/2 px-1 text-[#85A900] bg-[#f5f5f5] text-sm">
                Tìm kiếm
              </h2>
              <Input
                placeholder="Tìm kiếm"
                bordered={false}
                className="flex-1"
              />
              <SearchOutlined className="text-[#007BFF]" />
            </div>

            {/* Ngày bắt đầu (Chiếm 1/5) */}
            <div className="relative p-2 border border-[#B2D235] rounded-lg flex items-center px-2 basis-1/5">
              <h2 className="absolute -top-1/2 translate-y-1/2 px-1 text-[#85A900] bg-[#f5f5f5] text-sm">
                Ngày bắt đầu *
              </h2>
              <div className="flex items-center">
                <DatePicker
                  locale={viVN}
                  bordered={false}
                  suffixIcon={null}
                  className="flex-1"
                  placeholder="Chọn ngày..."
                  format="DD/MM/YYYY"
                />
                <CalendarOutlined className="absolute right-2 text-[#007BFF]" />
              </div>
            </div>

            {/* Ngày kết thúc (Chiếm 1/5) */}
            <div className="relative p-2 border border-[#B2D235] rounded-lg flex items-center px-2 basis-1/5">
              <h2 className="absolute -top-1/2 translate-y-1/2 px-1 text-[#85A900] bg-[#f5f5f5] text-sm">
                Ngày kết thúc *
              </h2>
              <div className="flex items-center w-full relative">
                <DatePicker
                  locale={viVN}
                  bordered={false}
                  suffixIcon={null}
                  className="flex-1"
                  placeholder="Chọn ngày..."
                  format="DD/MM/YYYY"
                />
                <CalendarOutlined className="absolute right-2 text-[#007BFF]" />
              </div>
            </div>
          </div>

          {/* Khu vực hiển thị dữ liệu */}
          <div className="bg-[#E0F2FE] h-48 rounded-lg"></div>
        </div>
      )}
    </div>
  );
};

export default DetailStatistics;
