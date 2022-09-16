export interface WordStorage {
  id: number;
  public: boolean;
  title: string;
  category: string;
  description: string;
  lastTestAt: string;
  modifiedAt: string;
  writer: string;
  createAt: string;
  likeCount: number;
  bookmarked: boolean;
}

export interface WrongAnswerWordStorage {
  id: number;
  public: boolean;
  wrongWords: number;
  title: string;
  category: string;
  description: string;
  lastTestAt: string;
  modifiedAt: string;
  writer: string;
  createAt: string;
  likeCount: number;
  bookmarked: boolean;
}
