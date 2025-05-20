// External Libraries
import React from "react";

// Components
import { Sidebar } from "../../components/Sidebar";

// Styles

import { useNavigate } from "react-router-dom";
import {
  Description,
  Highlight,
  MainContent,
  PageContainer,
  StartButton,
  Subtext,
  Title,
} from "./styles";

export const Library: React.FC = () => {
  const navigate = useNavigate();
  const addBook = () => {
    navigate("/add-book");
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <Title>Welcome to your</Title>
      </MainContent>
    </PageContainer>
  );
};
