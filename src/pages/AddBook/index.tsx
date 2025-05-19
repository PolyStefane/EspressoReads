// External Libraries
import React, { useState } from "react";

// Components
import { Sidebar } from "../../components/Sidebar";
import { FloatingInput } from "../../components/FloatingInput";

// Styles
import {
  BookCoverUpload,
  CheckboxWrapper,
  Container,
  DateContainer,
  FavoriteButton,
  FormSection,
  Input,
  LeftContainer,
  PageContainer,
  PagesInput,
  RatingContainer,
  RightContainer,
  SaveButton,
  Select,
  StarContainer,
  TextArea,
  Title,
} from "./styles";
import { LabelInput } from "../../components/LabelInput";

export const AddBook: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    status: "",
    startDate: "",
    endDate: "",
    review: "",
    favoriteCharacter: "",
    pages: "",
    format: {
      physical: false,
      digital: false,
    },
    rating: 0,
    isFavorite: false,
    coverUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      format: { ...prev.format, [name]: checked },
    }));
  };

  const handleRating = (stars: number) => {
    setForm((prev) => ({ ...prev, rating: stars }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://books-social.onrender.com/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to save book");
      }

      const data = await response.json();
      console.log("Book saved successfully:", data);
      alert("Book saved successfully!");
      // Opcional: resetar o form ou redirecionar
    } catch (error) {
      console.error("Error saving book:", error);
      alert("Error saving book. Please try again.");
    }
  };

  return (
    <PageContainer>
      <Sidebar />
      <Container>
        <Title>Add Book</Title>
        <FormSection>
          {/* LADO ESQUERDO */}
          <LeftContainer>
            <FloatingInput
              label="Title"
              name="title"
              placeholder="Insert book title"
              value={form.title}
              onChange={handleChange}
            />

            <FloatingInput
              label="Author"
              name="author"
              placeholder="Insert the name of the author"
              value={form.author}
              onChange={handleChange}
            />

            <div style={{ display: "flex", gap: "1rem" }}>
              <Select name="genre" onChange={handleChange}>
                <option>Select Genre</option>
                <option>Fantasy</option>
                <option>Romance</option>
                <option>Thriller</option>
              </Select>
              <Select name="status" onChange={handleChange}>
                <option>Status</option>
                <option>Reading</option>
                <option>Completed</option>
                <option>Wishlist</option>
              </Select>
            </div>
            <DateContainer style={{ display: "flex", gap: "1rem" }}>
              <LabelInput
                id="startDate"
                name="startDate"
                label="Start Date"
                value={form.startDate}
                onChange={handleChange}
              />

              <LabelInput
                id="endDate"
                name="endDate"
                label="End Date"
                value={form.endDate}
                onChange={handleChange}
              />
            </DateContainer>

            <TextArea
              name="review"
              placeholder="Insert your opinion about the book, your favorite quotes, etc..."
              onChange={handleChange}
            />
            <Input
              name="favoriteCharacter"
              placeholder="Enter the name of the character who touched your heart"
              onChange={handleChange}
            />
          </LeftContainer>

          {/* LADO DIREITO */}
          <RightContainer>
            <BookCoverUpload
              hasImage={!!form.coverUrl}
              onClick={() => {
                const url = prompt("Paste the URL of the book cover:");
                if (url) {
                  setForm((prev) => ({ ...prev, coverUrl: url }));
                }
              }}
            >
              {form.coverUrl ? (
                <img
                  src={form.coverUrl}
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

            <RatingContainer>
              <StarContainer>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} onClick={() => handleRating(star)}>
                    {form.rating >= star ? "★" : "☆"}
                  </span>
                ))}
              </StarContainer>

              <FavoriteButton
                $active={form.isFavorite}
                onClick={() =>
                  setForm((prev) => ({ ...prev, isFavorite: !prev.isFavorite }))
                }
                aria-label="Mark as favorite"
              >
                {form.isFavorite ? "🩷" : "🤍"}
              </FavoriteButton>
            </RatingContainer>

            <CheckboxWrapper>
              <label>
                <input
                  type="checkbox"
                  name="physical"
                  onChange={handleCheckbox}
                />
                Physical
              </label>
              <label>
                <input
                  type="checkbox"
                  name="digital"
                  onChange={handleCheckbox}
                />
                Digital
              </label>
            </CheckboxWrapper>

            <PagesInput
              name="pages"
              placeholder="Pages"
              onChange={handleChange}
            />

            <SaveButton onClick={handleSubmit}>Save</SaveButton>
          </RightContainer>
        </FormSection>
      </Container>
    </PageContainer>
  );
};
