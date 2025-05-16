// External Libraries
import React from "react";

// Components
import { Sidebar } from "../../components/Sidebar";
import { PageContainer } from "./styles";

// Styles

export const AddBook: React.FC = () => {
  return (
    <PageContainer>
      <Sidebar />
      <h1>Add Book</h1>
    </PageContainer>
  );
};
