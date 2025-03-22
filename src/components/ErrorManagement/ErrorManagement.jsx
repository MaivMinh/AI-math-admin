import React, { useState } from "react";
import { Table, Input, Button, Select } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import FilterButton from "./FilterButton";

const { Option } = Select;

const ErrorManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tất cả");

  // Dữ liệu mẫu (Có thể thay bằng API)
  const data = [
    {
      key: "1",
      code: "00000001",
      name: "Tên lỗi",
      date: "Ngày phát sinh lỗi",
      status: "Đã khắc phục",
    },
    {
      key: "2",
      code: "00000001",
      name: "Tên lỗi",
      date: "Ngày phát sinh lỗi",
      status: "Chưa khắc phục",
    },
    {
      key: "3",
      code: "00000001",
      name: "Tên lỗi",
      date: "Ngày phát sinh lỗi",
      status: "Chưa khắc phục",
    },
    {
      key: "4",
      code: "00000001",
      name: "Tên lỗi",
      date: "Ngày phát sinh lỗi",
      status: "Đã khắc phục",
    },
  ];

  // Xử lý lọc dữ liệu
  const filteredData =
    filterStatus === "Tất cả"
      ? data
      : data.filter((item) => item.status === filterStatus);

  // Cấu trúc bảng
  const columns = [
    {
      title: "Mã lỗi",
      dataIndex: "code",
      key: "code",
      width: "10%",
      align: "center",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "35%",
      align: "center",
      render: (text) => <span className="text-left block">{text}</span>,
    },
    {
      title: "Ngày phát sinh",
      dataIndex: "date",
      key: "date",
      width: "10%",
      align: "center",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: "10%",
      align: "center",
      render: (status) => (
        <span
          className={
            status === "Đã khắc phục"
              ? "text-blue-500"
              : "text-orange-500 font-semibold"
          }
        >
          {status}
        </span>
      ),
    },
    {
      title: "Hành động",
      key: "actions",
      width: "5%",
      align: "center",
      render: (_, record) => (
        <div className="flex gap-4">
          {[
            <FileTextOutlined
              key="view"
              className="text-[#85A900] cursor-pointer text-lg"
            />,
            record.status === "Chưa khắc phục" && (
              <CheckCircleOutlined
                key="check"
                className="text-blue-500 cursor-pointer text-lg"
              />
            ),
            <DeleteOutlined
              key="delete"
              className="text-pink-500 cursor-pointer text-lg"
            />,
          ].filter(Boolean)}
        </div>
      ),
    },
  ];

  return (
    <div className="border border-[#B2D235] p-4 rounded-lg shadow-md">
      {/* Ô tìm kiếm + Nút lọc */}
      <div className="flex gap-4 mb-4 items-center">
        <div className="relative w-full border border-[#B2D235] rounded-lg flex items-center px-3 py-2">
          <Input
            placeholder="Tìm kiếm theo tên lỗi..."
            bordered={false}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1"
          />
          <SearchOutlined className="text-[#85A900] cursor-pointer" />
        </div>

        <FilterButton
          onApplyFilter={(filters) => {
            console.log("Lọc với bộ lọc:", filters);
            // Xử lý lọc dữ liệu tại đây
          }}
          onClearFilter={() => {
            console.log("Đã xóa bộ lọc");
            // Reset dữ liệu về trạng thái ban đầu
          }}
        />
      </div>

      {/* Bảng dữ liệu */}
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        bordered
        className="border-[#B2D235]"
      />
    </div>
  );
};

export default ErrorManagement;
