import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/Dashboard/StatCard";
import SummaryBox from "../components/Dashboard/SummaryBox";
import FilterDropdown from "../components/Dashboard/FilterDropdown";
import { AppContext } from "../context/AppContext";

const summaryData = [
  { title: "Thống kê người dùng" },
  { title: "Thống kê lỗi" },
  { title: "Thống kê doanh thu" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AppContext);
  const [selectedFilter, setSelectedFilter] = useState("Theo tháng");
  console.log("Dashboard selectedFilter:", selectedFilter);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex">
      {/* Sidebar đã có sẵn */}
      <main className="flex-1 p-6">
        {/* Thống kê chung */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-[#B2D235]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-[#85A900]">Thống kê chung</h2>
            <FilterDropdown
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>

          {/* Thẻ thống kê */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            <StatCard
              title="Người dùng"
              value="10000"
              percent="100%"
              isIncrease={true}
              selectedFilter={selectedFilter}
            />
            <StatCard
              title="Thời lượng dùng"
              value="16045"
              percent="80%"
              isIncrease={false}
              selectedFilter={selectedFilter}
            />
            <StatCard
              title="Lỗi"
              value="200"
              percent="20%"
              isIncrease={true}
              selectedFilter={selectedFilter}
            />
            <StatCard
              title="Doanh thu"
              value="5000$"
              percent="10%"
              isIncrease={false}
              selectedFilter={selectedFilter}
            />
          </div>
        </div>

        {/* Thống kê chi tiết */}
        <div className="mt-6 space-y-4">
          {summaryData.map((summary, index) => (
            <SummaryBox key={index} title={summary.title} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
