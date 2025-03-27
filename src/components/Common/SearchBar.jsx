import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBar = ({ placeholder, onSearch, onChange }) => {
  return (
    <Search
      placeholder={placeholder || "Tìm kiếm..."}
      allowClear
      style={{ width: "100%" }}
      size="large"
      onSearch={onSearch}
      onChange={onChange}
      variant="underlined"
    />
  );
};

export default SearchBar;
