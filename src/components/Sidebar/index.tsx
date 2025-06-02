// External Libraries
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Assets
import { FeedIconSVG } from "../../assets/icons/FeedIcon";
import { AddBookIconSVG } from "../../assets/icons/AddBookIcon";
import { LibraryIconSVG } from "../../assets/icons/LibraryIcon";

// Styles
import {
  Logo,
  NavButton,
  UserSection,
  LogoutButton,
  OptionsContainer,
  SidebarContainer,
} from "./styles";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) setUsername(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");

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
        <span>{username}</span>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserSection>
    </SidebarContainer>
  );
};
