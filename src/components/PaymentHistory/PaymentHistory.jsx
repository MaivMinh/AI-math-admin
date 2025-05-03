import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Common/SearchBar";
import FilterButton from "../Common/FilterButton";
import CustomTable from "../Common/CustomTable";

const transactions = Array.from({ length: 10 }, (_, i) => ({
  id: "00000001",
  userId: "00000001",
  account: "0123 456 789",
  method: "Thẻ Tín dụng/Ghi nợ",
  package: "100 xu",
  amount: "1.500.000 vnđ",
  time: "15:45:24 16/05/2024",
}));

const columns = [
  { title: "Mã GD", dataIndex: "id", key: "id" },
  { title: "ID Người dùng", dataIndex: "userId", key: "userId" },
  { title: "Tài khoản giao dịch", dataIndex: "account", key: "account" },
  { title: "Phương thức", dataIndex: "method", key: "method" },
  { title: "Gói nạp", dataIndex: "package", key: "package" },
  { title: "Thành tiền", dataIndex: "amount", key: "amount" },
  { title: "Thời gian", dataIndex: "time", key: "time" },
];

const PaymentHistory = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const onSearch = (value) => {
    const filtered = transactions.filter(
      (tx) =>
        tx.id.includes(value) ||
        tx.userId.includes(value) ||
        tx.account.includes(value)
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

  const displayList = filteredData.length > 0 ? filteredData : transactions;

  return (
    <div className="border border-[#B2D235] p-4 rounded-lg shadow-md">
      {/* Search & Filter */}
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

      {/* Table */}
      <CustomTable columns={columns} dataSource={displayList} />

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-[#86a500] text-sm">
        <button className="flex items-center gap-1 hover:underline">
          &lt; Trước
        </button>
        <div className="flex items-center gap-1">
          <input
            type="text"
            value="10"
            className="w-12 text-center border border-[#b4d146] rounded-md"
            readOnly
          />
          <span>trên 20</span>
        </div>
        <button className="flex items-center gap-1 hover:underline">
          Sau &gt;
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;
