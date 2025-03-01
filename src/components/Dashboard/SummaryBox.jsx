import React from "react";
import { Button } from "antd";

const SummaryBox = ({ title }) => {
  return (
    <div className="border border-[#B2D235] p-4 rounded-lg flex justify-between items-center shadow-md">
      <h3 className="text-[#85A900] font-bold">{title}</h3>
      <Button className="border border-[#B2D235] text-[#85A900]">Xem</Button>
    </div>
  );
};

export default SummaryBox;
