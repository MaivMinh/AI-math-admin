import React, { useEffect } from "react";
import userServices from "../services/userService.js";
import { Spin, Input, Table } from "antd";
const { Search } = Input;

const UserManagement = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  const displayedUsers = React.useMemo(() => {
    return filteredUsers.length > 0 ? filteredUsers : users;
  }, [filteredUsers, users]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userServices.get();
        console.log(response.data.results);
        setUsers((prev) => [...response.data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const onSearch = (content) => {
    const filtered = users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(content.toLowerCase()) ||
        user.name.last.toLowerCase().includes(content.toLowerCase()) ||
        user.email.toLowerCase().includes(content.toLowerCase()) ||
        user.login.username.toLowerCase().includes(content.toLowerCase())
      );
    });
    console.log(filtered);
    setFilteredUsers(filtered);
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setFilteredUsers(users);
    }
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text, record) => {
        return record.login.username;
      },
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        return `${record.name.first} ${record.name.last}`;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="text-center mt-10">
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <div className="w-full grid grid-cols-10">
            <p className="col-span-9">
              <Search
                placeholder="Tìm kiếm theo tên người dùng hoặc email..."
                allowClear
                style={{
                  width: "100%",
                }}
                size="large"
                onSearch={onSearch}
                onChange={handleChange}
              />
            </p>
            <p className="col-span-1 bg-red-200"></p>
          </div>
          <div>
            <Table
              dataSource={displayedUsers}
              columns={columns}
              rowKey={(record) => record.login.uuid}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
