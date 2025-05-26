// pages/AddBook/index.tsx

import React from "react";

// Components
import { Sidebar } from "../../components/Sidebar";
import { FloatingInput } from "../../components/FloatingInput";
import { LabelInput } from "../../components/LabelInput";
import { CoverUpload } from "./components/CoverUpload";
import { RatingStars } from "./components/RatingStars";
import { BookTypeCheckbox } from "./components/BookTypeCheckbox";

// Hooks
import { useBookForm } from "./hooks/useBookForm";

// Styles
import {
  PageContainer,
  Container,
  Title,
  FormSection,
  LeftContainer,
  RightContainer,
  Select,
  DateContainer,
  TextArea,
  Input,
  PagesInput,
  SaveButton,
  SelectContainer,
} from "./styles";

export const AddBook: React.FC = () => {
  const {
    form,
    isSubmitting,
    handleChange,
    handleCheckbox,
    handleRating,
    handleCoverUpload,
    handleSubmit,
    toggleFavorite,
  } = useBookForm();

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

            <SelectContainer>
              <Select name="genre" onChange={handleChange} value={form.genre}>
                <option value="">Select Genre</option>
                <option value="fantasy">Fantasy</option>
                <option value="romance">Romance</option>
                <option value="thriller">Thriller</option>
              </Select>

              <Select
                name="readingStatus"
                onChange={handleChange}
                value={form.readingStatus}
              >
                <option value="">Status</option>
                <option value="reading">Reading</option>
                <option value="finished">Finished</option>
                <option value="wishlist">Wishlist</option>
              </Select>
            </SelectContainer>

            <DateContainer>
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
              value={form.review}
              onChange={handleChange}
            />

            <Input
              name="favoriteCharacter"
              placeholder="Enter the name of the character who touched your heart"
              value={form.favoriteCharacter}
              onChange={handleChange}
            />
          </LeftContainer>

          {/* LADO DIREITO */}
          <RightContainer>
            <CoverUpload
              coverUrl={form.coverUrl}
              onUpload={handleCoverUpload}
            />

            <RatingStars
              rating={form.rating}
              isFavorite={form.isFavorite}
              onRate={handleRating}
              onToggleFavorite={toggleFavorite}
            />

            <BookTypeCheckbox
              digital={form.digital}
              physical={form.physical}
              onChange={handleCheckbox}
            />

            <PagesInput
              name="numberPages"
              placeholder="Pages"
              value={form.numberPages}
              onChange={handleChange}
            />

            <SaveButton onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </SaveButton>
          </RightContainer>
        </FormSection>
      </Container>
    </PageContainer>
  );
};
