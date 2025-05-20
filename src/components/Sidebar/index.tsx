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
  LogoutButton,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const addBook = () => {
    navigate("/add-book");
  };
  const library = () => {
    navigate("/library");
  };

  return (
    <SidebarContainer>
      <OptionsContainer>
        <Logo src="/img/mini-logo.png" alt="Espresso Reads logo" />
        <NavButton $active={location.pathname === "/library"} onClick={library}>
          <LibraryIconSVG width={25} height={25} /> Library
        </NavButton>
        <NavButton
          $active={location.pathname === "/add-book"}
          onClick={addBook}
        >
          <AddBookIconSVG width={21} height={21} /> Add Book
        </NavButton>
        <NavButton>
          <FeedIconSVG /> Feed
        </NavButton>
      </OptionsContainer>
      <UserSection>
        <img src="/img/user.png" alt="User avatar" />
        <span>user_name</span>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserSection>
    </SidebarContainer>
  );
};
