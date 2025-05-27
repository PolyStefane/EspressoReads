// src/layouts/DashboardLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Container, ContentArea } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <ContentArea>
        <Outlet />
      </ContentArea>
    </Container>
  );
};

export default Layout;
