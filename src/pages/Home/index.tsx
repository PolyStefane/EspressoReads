// External Libraries
import React from "react";

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
        <StartButton>Get start</StartButton>
      </MainContent>
    </PageContainer>
  );
};
