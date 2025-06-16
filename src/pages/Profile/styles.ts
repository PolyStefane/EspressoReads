import styled from "styled-components";

export const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding: 2rem;
`;

export const UserName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProfilePic = styled.div`
  width: 120px;
  height: 120px;
  margin: 1rem auto;
  border: 3px solid #cde9ce;
  border-radius: 50%;
  background-color: #f5fdf5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  /* 
  &:hover::after {
    content: "📷";
    position: absolute;
    font-size: 1.5rem;
    color: #333;
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  } */
`;

export const UpdateButton = styled.button`
  background-color: #8bc28b;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const StatBox = styled.div`
  background-color: #def0d8;
  padding: 1rem;
  border-radius: 10px;
  width: 160px;
`;

export const StatTitle = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
`;

export const StatValue = styled.p`
  font-size: 1.5rem;
  margin: 0.3rem 0;
`;

export const StatLabel = styled.p`
  font-size: 0.8rem;
  color: #444;
`;

export const BooksWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const BookBox = styled.div`
  background-color: #e3f2e1;
  padding: 1rem;
  width: 230px;
  border-radius: 10px;
`;

export const BookTitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

export const BookName = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const BookAuthor = styled.p`
  font-size: 0.85rem;
  color: #666;
`;

export const BookImage = styled.img`
  width: 100px;
  margin: 1rem 0;
`;

export const BookPages = styled.p`
  font-size: 0.9rem;
  color: #333;
`;
