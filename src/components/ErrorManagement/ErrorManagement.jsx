import React, { useState } from "react";
import { Table, Input, Button, Select } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import FilterButton from "../Common/FilterButton";
import CustomTable from "../Common/CustomTable"
import SearchBar from "../Common/SearchBar";

const { Option } = Select;

const ErrorManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const onSearch = (value) => {
    const filtered = data.filter(
      (tx) =>
        tx.code.includes(value) ||
        tx.name.includes(value) ||
        tx.date.includes(value)
    );
    setFilteredData(filtered);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    if (value === "") {
      setFilteredData([]);
    } else {
      onSearch(value);
    }
  };  

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
  // const filteredData =
  //   filterStatus === "Tất cả"
  //     ? data
  //     : data.filter((item) => item.status === filterStatus);

  // Cấu trúc bảng
  const columns = [
    {
      title: "Mã lỗi",
      dataIndex: "code",
      key: "code",
      // width: "10%",
      align: "center",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      // width: "35%",
      align: "center",
      render: (text) => <span className="text-left block">{text}</span>,
    },
    {
      title: "Ngày phát sinh",
      dataIndex: "date",
      key: "date",
      // width: "10%",
      align: "center",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      // width: "10%",
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
      // width: "5%",
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

  const displayList = searchTerm !== "" ? filteredData : data;

  return (
    <div className="border border-[#B2D235] p-4 rounded-lg shadow-md">
      {/* Ô tìm kiếm + Nút lọc */}
      <div className="w-full grid grid-cols-10 gap-x-3 mb-4">
        <div className="col-span-9">
          <SearchBar
            placeholder="Tìm kiếm theo mã giao dịch, tài khoản..."
            onSearch={onSearch}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-1">
          <FilterButton/>
        </div>
      </div>

      {/* Bảng dữ liệu */}
      <CustomTable
        columns={columns}
        dataSource={displayList}
        pagination={false}
        bordered
        className="border-[#B2D235]"
      />
    </div>
  );
};

export default ErrorManagement;
