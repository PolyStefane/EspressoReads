// External Libraries
import React, { useState } from "react";

// Components
import { Sidebar } from "../../components/Sidebar";
import {
  BookCoverUpload,
  CheckboxWrapper,
  Container,
  DateInput,
  FavoriteButton,
  FormSection,
  Input,
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
import { FloatingInput } from "../../components/FloatingInput";

// Styles

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

  const handleSubmit = () => {
    console.log("Form data:", form);
    // Aqui vai sua lógica de envio para o backend
  };

  return (
    <PageContainer>
      <Sidebar />
      <Container>
        <Title>Add Book</Title>
        <FormSection>
          {/* LADO ESQUERDO */}
          <div>
            <Input
              name="title"
              placeholder="Insert the title of the book"
              onChange={handleChange}
            />

            {/* <FloatingInput label="Book Cover"></FloatingInput> */}

            <Input
              name="author"
              placeholder="Insert the name of the author"
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
            <div style={{ display: "flex", gap: "1rem" }}>
              <DateInput
                name="startDate"
                placeholder="Start Date"
                onChange={handleChange}
              />
              <DateInput
                name="endDate"
                placeholder="End Date"
                onChange={handleChange}
              />
            </div>
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
          </div>

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
              placeholder="Ex: 365"
              onChange={handleChange}
            />

            <SaveButton onClick={handleSubmit}>Save</SaveButton>
          </RightContainer>
        </FormSection>
      </Container>
    </PageContainer>
  );
};
