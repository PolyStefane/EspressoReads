import styled from "styled-components";

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-bottom: 1px solid #eee;
  padding: 0;
  image-rendering: auto;
`;

export const CoverFallback = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  color: #666;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding: 0.5rem;
  text-align: center;
  flex-direction: column;
`;

export const Icon = styled.span`
  margin-bottom: 0.3rem;
`;

export const Text = styled.p``;
