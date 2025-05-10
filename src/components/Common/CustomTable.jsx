import React from "react";
import { Table } from "antd";

const CustomTable = ({ columns, dataSource, ...rest }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      bordered
      rowKey={(record, index) => index}
      className="border-[#B2D235] text-[#86a500]"
      {...rest}
    />
  );
};

export default CustomTable;
