import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Common/SearchBar";
import AddLessonButton from "./AddLessonButton";
import { Menu } from "antd";
import ClassSelectionButton from "./ClassSelectionButton";
import Lesson from "./Lesson";

const LessonManagement = () => {
  // const { isAuthenticated } = useContext(AppContext);
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
    if (e.target.value === "") {
      setFilteredData([]);
    }
    setSearchTerm(e.target.value);
  };

  // if (!isAuthenticated) {
  //   navigate("/login");
  // }

  const classItems = [
    { label: "Lớp 1", key: "class1" },
    { label: "Lớp 2", key: "class2" },
    { label: "Lớp 3", key: "class3" },
    { label: "Lớp 4", key: "class4" },
    { label: "Lớp 5", key: "class5" },
  ];

  return (
    <div className="border border-[#B2D235] p-4 rounded-lg shadow-md">
      {/* Search & Filter */}
      <div className="w-full grid grid-cols-20 gap-x-3 mb-4">
        <div className="col-span-15">
          <SearchBar
            placeholder="Tìm kiếm theo tên chương, tên bài học..."
            onSearch={onSearch}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <ClassSelectionButton items={classItems} />
        </div>
        <div className="col-span-3">
          <AddLessonButton />
        </div>
      </div>

      <div className="border w-full rounded-lg shadow-md gap-x-3 mb-4">
        <Lesson chapterTitle={"Chương 1: Làm quen với một số hình"} />
      </div>
    </div>
  );
};

export default LessonManagement;
