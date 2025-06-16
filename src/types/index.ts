export interface Book {
  coverUrl?: string;
  title?: string;
  author?: string;
}

export interface Comment {
  commentaryId?: string;
  commentary?: { commentaryId?: string };
  userName?: string;
  username?: string;
  commentaryText: string;
  reaction: string;
  progress: number;
  likes?: number;
  isLiked?: boolean;
  isSpoiler?: boolean;
  liked?: boolean;
  bookCoverUrl?: string;
  bookTitle?: string;
  bookAuthor?: string;
  book?: Book;
}

export interface Reply {
  replyId: string;
  userId: string;
  username?: string;
  replyText: string;
}
