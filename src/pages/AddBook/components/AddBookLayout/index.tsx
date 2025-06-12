// External libraries
import React from "react";

// Components
import { RatingStars } from "../RatingStars";
import { CoverUpload } from "../CoverUpload";
import { BookTypeCheckbox } from "../BookTypeCheckbox";
import { LabeledReactSelect } from "../LabeledReactSelect";
import { LabelInput } from "../../../../components/LabelInput";
import { FloatingInput } from "../../../../components/FloatingInput";

// Styles
import {
  Title,
  TextArea,
  Container,
  PagesInput,
  SaveButton,
  FormSection,
  DateContainer,
  FormContainer,
  LeftContainer,
  RightContainer,
  SelectContainer,
} from "../../styles";

interface BookFormProps {
  form: any;
  isSubmitting: boolean;
  isEdit?: boolean;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleRating: (rating: number) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleCheckbox: (e: React.ChangeEvent<any>) => void;
  toggleFavorite: () => void;
  handleCoverUpload: (url: string) => void;
  showReview: boolean;
  showRating: boolean;
  showEndDate: boolean;
  showStartDate: boolean;
  showFavoriteCharacter: boolean;
  showFormat: boolean;
  title?: string;
}

export const BookForm: React.FC<BookFormProps> = ({
  form,
  showReview,
  showRating,
  showFormat,
  showEndDate,
  isSubmitting,
  showStartDate,
  showFavoriteCharacter,
  handleChange,
  handleRating,
  handleSubmit,
  handleCheckbox,
  toggleFavorite,
  handleCoverUpload,
  title = "Book Form",
}) => (
  <Container>
    <FormContainer>
      <Title>{title}</Title>
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
            <LabeledReactSelect
              label="Genre"
              name="genre"
              value={form.genre}
              onChange={(value: string) =>
                handleChange({
                  target: { name: "genre", value },
                } as React.ChangeEvent<HTMLInputElement>)
              }
              options={[
                { value: "ADVENTURE", label: "Adventure" },
                { value: "BIOGRAPHY", label: "Biography" },
                { value: "CHILDREN", label: "Children" },
                { value: "CLASSIC", label: "Classic" },
                { value: "COMIC", label: "Comic" },
                { value: "DRAMA", label: "Drama" },
                { value: "DYSTOPIAN", label: "Dystopian" },
                { value: "FANTASY", label: "Fantasy" },
                { value: "GRAPHIC_NOVEL", label: "Graphic Novel" },
                { value: "HISTORICAL", label: "Historical" },
                { value: "HORROR", label: "Horror" },
                { value: "HUMOR", label: "Humor" },
                { value: "MANGA", label: "Manga" },
                { value: "MYSTERY", label: "Mystery" },
                { value: "POETRY", label: "Poetry" },
                { value: "ROMANCE", label: "Romance" },
                { value: "SCIENCE_FICTION", label: "Science Fiction" },
                { value: "TECHNOLOGY", label: "Technology" },
                { value: "THRILLER", label: "Thriller" },
                { value: "TRUE_CRIME", label: "True Crime" },
                { value: "YOUNG_ADULT", label: "Young Adult" },
              ]}
            />

            <LabeledReactSelect
              label="Reading Status"
              name="readingStatus"
              value={form.readingStatus}
              onChange={(value: string) =>
                handleChange({
                  target: { name: "readingStatus", value },
                } as React.ChangeEvent<HTMLInputElement>)
              }
              options={[
                { value: "reading", label: "Reading" },
                { value: "finished", label: "Finished" },
                { value: "wishlist", label: "Wishlist" },
              ]}
            />
          </SelectContainer>

          <DateContainer>
            {showStartDate && (
              <LabelInput
                id="startDate"
                name="startDate"
                label="Start Date"
                value={form.startDate}
                onChange={handleChange}
              />
            )}
            {showEndDate && (
              <LabelInput
                id="endDate"
                name="endDate"
                label="End Date"
                value={form.endDate}
                onChange={handleChange}
              />
            )}
          </DateContainer>

          {showReview && (
            <TextArea
              name="review"
              placeholder="Insert your opinion about the book, your favorite quotes, etc..."
              value={form.review}
              onChange={handleChange}
            />
          )}
          {showFavoriteCharacter && (
            <FloatingInput
              label="Favorite Character"
              name="favoriteCharacter"
              placeholder="Enter the name of the character who touched your heart"
              value={form.favoriteCharacter}
              onChange={handleChange}
            />
          )}
        </LeftContainer>

        {/* LADO DIREITO */}
        <RightContainer>
          <CoverUpload coverUrl={form.coverUrl} onUpload={handleCoverUpload} />

          {showRating && (
            <RatingStars
              rating={form.rating ?? 0}
              isFavorite={form.isFavorite}
              onRate={handleRating}
              onToggleFavorite={toggleFavorite}
            />
          )}
          {showFormat && (
            <BookTypeCheckbox
              digital={form.digital}
              physical={form.physical}
              onChange={handleCheckbox}
            />
          )}

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
    </FormContainer>
  </Container>
);
