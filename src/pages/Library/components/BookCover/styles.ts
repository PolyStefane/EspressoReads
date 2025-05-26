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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled.span`
  margin-bottom: 0.3rem;
`;

export const Text = styled.p`
  font-size: 0.85rem;
  color: #666;
`;
