import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  InsertRowRightOutlined,
  BugOutlined,
  DollarCircleOutlined,
  UserOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const MainLayout = () => {
  const menuItems = [
    {
      label: "Dashboard",
      key: "/dashboard",
      icon: <PieChartOutlined />,
    },
    {
      label: "Quản lý người dùng",
      key: "/user-management",
      icon: <UserOutlined />,
    },
    {
      label: "Quản lý lỗi",
      key: "/error-management",
      icon: <BugOutlined />,
    },
    {
      label: "Quản lý thanh toán",
      key: "/payment-management",
      icon: <BankOutlined />,
    },
    {
      label: "Lịch sử thanh toán",
      key: "/payment-history",
      icon: <DollarCircleOutlined />,
    },
    {
      label: "Quản lý bài học",
      key: "/lesson-management",
      icon: <InsertRowRightOutlined />,
    },
  ];

  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  return (
    <>
      <Header />
      <Layout
        style={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Sider
          width={250}
          className="border-r border-[#D9E2EC] rounded-tr-2xl rounded-br-2xl"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["/dashboard"]}
            theme="light"
            style={{
              height: "100%",
              backgroundColor: "#E4F4F8",
              fontWeight: "semi-bold",
              fontSize: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              rowGap: "1rem",
            }}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Sider>
        <Content
          style={{
            padding: "0 24px",
            height: "100%",
            minHeight: "100vh",
            backgroundColor: "#F5F5F5",
          }}
        >
          <div className="mt-5">
            <Outlet />
          </div>
        </Content>
      </Layout>
      <Outlet />
    </>
  );
};

export default MainLayout;
