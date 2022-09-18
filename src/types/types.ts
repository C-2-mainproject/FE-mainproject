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

export interface WordStorageNew {
  category: string;
  createAt: string;
  description: string;
  id: number;
  lastTestAt: string;
  likeCount: number;
  modifiedAt: string;
  public: boolean;
  title: string;
}

// AddVocaTypes
export interface IFilterList {
  filterCategory: string;
  value: string;
}

export interface IAddWordStorageSelect {
  category: string;
  status: string;
}
