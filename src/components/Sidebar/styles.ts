import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 15rem;
  background-color: #bdd8bb;
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

export const NavButton = styled.button`
  width: 12rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.7rem 0;
  padding: 0.7rem 1rem;
  border: none;
  background-color: #e9f1e8;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.3rem;
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
`;

export const UserSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;

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
