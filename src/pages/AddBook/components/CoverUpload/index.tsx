// pages/AddBook/components/CoverUpload.tsx
import React from "react";
import { BookCoverUpload } from "../../styles";

type Props = {
  coverUrl: string;
  onUpload: () => void;
};

export const CoverUpload: React.FC<Props> = ({ coverUrl, onUpload }) => {
  return (
    <BookCoverUpload hasImage={!!coverUrl} onClick={onUpload}>
      {coverUrl ? (
        <img
          src={coverUrl}
          alt="Book cover"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            borderRadius: "0.5rem",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.src = "";
          }}
        />
      ) : (
        <span style={{ color: "#6e9a77" }}>Insert book cover here</span>
      )}
    </BookCoverUpload>
  );
};
