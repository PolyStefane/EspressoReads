// External Libraries
import React from "react";

//Assets
import { FeedIconSVG } from "../../assets/icons/FeedIcon";
import { AddBookIconSVG } from "../../assets/icons/AddBookIcon";
import { LibraryIconSVG } from "../../assets/icons/LibraryIcon";

// Styles
import {
  Logo,
  NavButton,
  UserSection,
  OptionsContainer,
  SidebarContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <SidebarContainer>
      <OptionsContainer>
        <Logo src="/img/mini-logo.png" alt="Espresso Reads logo" />
        <NavButton>
          <LibraryIconSVG width={25} height={25} /> Library
        </NavButton>
        <NavButton>
          <AddBookIconSVG width={21} height={21} /> Add Book
        </NavButton>
        <NavButton>
          <FeedIconSVG /> Feed
        </NavButton>
      </OptionsContainer>
      <UserSection>
        <img src="/img/user.png" alt="User avatar" />
        <span>user_name</span>
        <button onClick={handleLogout}>Logout</button>
      </UserSection>
    </SidebarContainer>
  );
};
