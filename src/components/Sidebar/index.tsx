import React from "react";

// Styles
import {
  Logo,
  NavButton,
  OptionsContainer,
  SidebarContainer,
  UserSection,
} from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <OptionsContainer>
        <Logo src="public/img/mini-logo.png" alt="Espresso Reads logo" />
        <NavButton>📚 Library</NavButton>
        <NavButton>➕ Add Book</NavButton>
        <NavButton>📰 Feed</NavButton>
      </OptionsContainer>
      <UserSection>
        <img src="/avatar.png" alt="User avatar" />
        <span>user_name</span>
      </UserSection>
    </SidebarContainer>
  );
};
