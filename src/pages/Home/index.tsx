// External Libraries
import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Sidebar } from "../../components/Sidebar";

// Styles
import {
  Title,
  Subtext,
  Highlight,
  StartButton,
  Description,
  MainContent,
  PageContainer,
} from "./styles";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const addBook = () => {
    navigate("/add-book");
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <Title>Welcome to your</Title>
        <Highlight>Comfy Reading Diary</Highlight>
        <Description>
          Here you can record and organize your readings, make reviews and
          more...
          <br />
          All this with a super comfortable interface!
        </Description>
        <Subtext>Take your coffee and relax</Subtext>
        <StartButton onClick={addBook}>Get start</StartButton>
      </MainContent>
    </PageContainer>
  );
};
