import React, { useContext, useEffect } from "react";
import userServices from "../services/userService.js";
import {
  Spin,
  Input,
  Table,
  Button,
  Form,
  Dropdown,
  Checkbox,
  message,
} from "antd";
import { AppContext } from "../context/AppContext.jsx";
import { useNavigate } from "react-router-dom";
import { DownOutlined, FilterOutlined } from "@ant-design/icons";
const { Search } = Input;

const UserManagement = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const { isAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  if (!isAuthenticated) {
    navigate("/login");
  }

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "There is no user matching the search criteria",
    });
  };

  const success = (value) => {
    messageApi.open({
      type: "success",
      content: `There are ${value} users matching the search criteria`,
    });
  };

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
    if (filtered.length === 0) {
      warning();
    } else if (filtered.length > 0) {
      success(filtered.length);
    }
    setFilteredUsers(filtered);
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setFilteredUsers(users);
    }
  };

  const handleFilter = (values) => {
    console.log(values);

    const filtered = users.filter((user) => {
      return (
        (!values.status ||
          values.status.length === 0 ||
          values.status.includes(user.status)) &&
        (!values.role ||
          values.role.length === 0 ||
          values.role.includes(user.role))
      );
    });
    if (filtered.length === 0) {
      warning();
    } else if (filtered.length > 0) {
      success(filtered.length);
    }
    setFilteredUsers(filtered);
  };

  const handleClearFilter = () => {
    form.resetFields();
    setFilteredUsers(users);
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

  const items = [
    {
      key: "1",
      label: (
        <Form
          onFinish={handleFilter}
          form={form}
          layout="vertical"
          onClick={(e) => e.stopPropagation()}
        >
          <Form.Item name="status" label="Status">
            <Checkbox.Group>
              <Checkbox value="active">Active</Checkbox>
              <Checkbox value="inactive">Inactive</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="role" label="Role">
            <Checkbox.Group>
              <Checkbox value="admin">Admin</Checkbox>
              <Checkbox value="user">User</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Filter
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleClearFilter}>
            Clear Filter
          </Button>
        </Form>
      ),
    },
  ];

  return (
    <div className="w-full h-full">
      {contextHolder}
      {loading ? (
        <div className="text-center mt-10">
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <div className="w-full grid grid-cols-10 gap-x-3">
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
                variant="underlined"
              />
            </p>
            <p className="col-span-1">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <Button size="large" style={{ width: "100%", height: "100%" }}>
                  <span>Lọc</span>
                  <p>
                    <FilterOutlined />
                  </p>
                </Button>
              </Dropdown>
            </p>
          </div>
          <div className="mt-5">
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
