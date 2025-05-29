export type Book = {
  bookId: string;
  title: string;
  genre: string;
  author: string;
  rating?: number;
  review?: string;
  endDate?: string;
  digital: boolean;
  coverUrl: string;
  startDate?: string;
  physical: boolean;
  bookType?: string;
  isFavorite?: boolean;
  numberPages: string;
  readingStatus: string;
  favoriteCharacter?: string;
};
