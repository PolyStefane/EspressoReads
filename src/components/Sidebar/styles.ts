import styled from "styled-components";

interface NavButtonProps {
  $active?: boolean;
}

export const SidebarContainer = styled.div`
  width: 15rem;
  background-color: #bdd8bb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  justify-content: space-between;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 8rem;
  margin-bottom: 2rem;
`;

export const NavButton = styled.button<NavButtonProps>`
  width: 12rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.7rem 0;
  padding: 0.7rem 1rem;
  border: none;
  background-color: ${({ $active }) => ($active ? "#7BB286" : "#e9f1e8")};
  box-shadow: ${({ $active }) =>
    $active ? "0 3px 6px rgba(0, 0, 0, 0.1)" : "none"};
  color: ${({ $active }) => ($active ? "#fffdf0" : "#1f1f1f")};
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.3rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #7bb286;
    color: white;
    transform: scale(1.02);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const UserIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const LogoutButton = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #e9f1e8;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgb(255, 255, 255);
    transform: scale(1.05);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const UserSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;

  img {
    width: 5rem;
    border-radius: 50%;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1.3rem;
  }
`;
