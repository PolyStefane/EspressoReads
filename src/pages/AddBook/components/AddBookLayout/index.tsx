import React from "react";

// Styles
import {
  Container,
  DateContainer,
  FormContainer,
  FormSection,
  LeftContainer,
  PagesInput,
  RightContainer,
  SaveButton,
  SelectContainer,
  TextArea,
  Title,
} from "./styles";
import { FloatingInput } from "../../../../components/FloatingInput";
import { LabeledReactSelect } from "../LabeledReactSelect";
import { LabelInput } from "../../../../components/LabelInput";
import { CoverUpload } from "../CoverUpload";
import { RatingStars } from "../RatingStars";
import { BookTypeCheckbox } from "../BookTypeCheckbox";

interface Props {
  title: string;
  form: any;
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: () => void;
  onRate: (rating: number) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFavoriteToggle: () => void;
  onCoverUpload: () => void;
  isEdit?: boolean;
}

export const AddBookLayout: React.FC<Props> = ({
  title: pageTitle,
  form,
  isSubmitting,
  onChange,
  onSubmit,
  onRate,
  onCheckboxChange,
  onFavoriteToggle,
  onCoverUpload,
  isEdit = false,
}) => {
  return (
    <Container>
      <FormContainer>
        <Title>{pageTitle}</Title>
        <FormSection>
          {/* LADO ESQUERDO */}
          <LeftContainer>
            <FloatingInput
              label="Title"
              name="title"
              placeholder="Insert book title"
              value={form.title}
              onChange={onChange}
            />
            <FloatingInput
              label="Author"
              name="author"
              placeholder="Insert the name of the author"
              value={form.author}
              onChange={onChange}
            />

            <SelectContainer>
              <LabeledReactSelect
                label="Genre"
                name="genre"
                value={form.genre}
                onChange={(value: string) =>
                  onChange({
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
                  onChange({
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
              <LabelInput
                id="startDate"
                name="startDate"
                label="Start Date"
                value={form.startDate}
                onChange={onChange}
              />
              <LabelInput
                id="endDate"
                name="endDate"
                label="End Date"
                value={form.endDate}
                onChange={onChange}
              />
            </DateContainer>

            <TextArea
              name="review"
              placeholder="Insert your opinion about the book, your favorite quotes, etc..."
              value={form.review}
              onChange={onChange}
            />

            <FloatingInput
              label="Favorite Character"
              name="favoriteCharacter"
              placeholder="Enter the name of the character who touched your heart"
              value={form.favoriteCharacter}
              onChange={onChange}
            />
          </LeftContainer>

          {/* LADO DIREITO */}
          <RightContainer>
            <CoverUpload coverUrl={form.coverUrl} onUpload={onCoverUpload} />

            <RatingStars
              rating={form.rating}
              isFavorite={form.isFavorite}
              onRate={onRate}
              onToggleFavorite={onFavoriteToggle}
            />

            <BookTypeCheckbox
              digital={form.digital}
              physical={form.physical}
              onChange={onCheckboxChange}
            />

            <PagesInput
              name="numberPages"
              placeholder="Pages"
              value={form.numberPages}
              onChange={onChange}
            />

            <SaveButton onClick={onSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : isEdit ? "Update" : "Save"}
            </SaveButton>
          </RightContainer>
        </FormSection>
      </FormContainer>
    </Container>
  );
};
