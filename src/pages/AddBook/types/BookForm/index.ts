export type BookFormValues = {
  ownerId: string;
  title: string;
  author: string;
  genre: string;
  startDate: string;
  endDate: string;
  review: string;
  favoriteCharacter: string;
  rating?: number | null;
  coverUrl: string;
  numberPages: string;
  readingStatus: string;
  isFavorite: boolean;
  physical: boolean;
  digital: boolean;
};

export const createBookPayload = (form: BookFormValues) => {
  const bookTypes = [];
  if (form.digital) bookTypes.push("DIGITAL");
  if (form.physical) bookTypes.push("PHYSICAL");

  return {
    ownerId: form.ownerId,
    title: form.title,
    author: form.author,
    genre: form.genre.toUpperCase(),
    startDate: form.startDate,
    endDate: form.endDate,
    review: form.review,
    favoriteCharacter: form.favoriteCharacter,
    rating: form.rating,
    coverUrl: form.coverUrl,
    numberPages: Number(form.numberPages),
    readingStatus: form.readingStatus.toUpperCase(),
    isFavorite: form.isFavorite,
    bookTypes,
  };
};
