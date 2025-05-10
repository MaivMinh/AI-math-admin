import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <Input
      placeholder={placeholder || "Tìm kiếm..."}
      allowClear
      style={{ width: "100%" }}
      size="large"
      onChange={onChange}
    />
  );
};


export default SearchBar;
