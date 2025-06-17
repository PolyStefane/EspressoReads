import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 3rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const ProfilePic = styled.div`
  width: 120px;
  height: 120px;
  margin: 2rem auto 4rem;
  border: 3px solid #7bb286;
  border-radius: 50%;
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

export const StatsContainer = styled.div`
  width: 45vw;
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

export const StatBox = styled.div`
  background-color: #cde9ce;
  padding: 1rem;
  border-radius: 15px;
  width: 15rem;
  height: 11rem;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

export const StatTitle = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const StatValue = styled.p`
  font-size: 1.5rem;
  color: #5d8665;
`;

export const StatLabel = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #5d8665;
`;

export const BooksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const BookBox = styled.div`
  background-color: #cde9ce;
  border-radius: 20px;
  padding: 1.5rem;
  width: 26rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

export const BookTextWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const BookTitle = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;

export const BookName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const BookAuthor = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const BookPages = styled.p`
  font-size: 1.1rem;
  color: #222;
  margin-top: 1.5rem;
  font-weight: 500;
`;

export const BookImage = styled.img`
  width: 130px;
  height: auto;
  border-radius: 10px;
`;
