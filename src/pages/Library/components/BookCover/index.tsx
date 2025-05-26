// src/components/BookCover.tsx
import React, { useState } from "react";
import { Cover, CoverFallback } from "./styles";

type Props = {
  coverUrl: string;
  title: string;
};

export const BookCover: React.FC<Props> = ({ coverUrl, title }) => {
  const [imgErrored, setImgErrored] = useState(false);

  return !imgErrored ? (
    <Cover
      src={coverUrl}
      alt={`Cover of ${title}`}
      onError={() => setImgErrored(true)}
    />
  ) : (
    <CoverFallback>
      <p>📘 Imagem indisponível</p>
    </CoverFallback>
  );
};
