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

export interface IAddWordStorage {
  title: string;
  category: string;
  status: boolean;
  description: string;
}

export interface IWordStorage {
  category: string;
  createAt: string;
  description: string;
  id: number;
  lastTestAt: string;
  likeCount: number;
  modifiedAt: string;
  nickname: string;
  public: boolean;
  title: string;
}

export interface IWordStorageInitialState {
  wordStorage: IWordStorage[];
  detailWordStorage: IWordStorage;
  addWords: IUpdateWord[];
  isLoading: boolean;
  isFinish: boolean;
  pageNum: number;
  lastPage: boolean;
}

export interface IUpdateWord {
  words: string[];
  meanings: string[][];
}

export interface ITestWordStorage {
  wordStorageId: number;
  words: string[];
  meanings: string[][];
}

export interface IAnswer {
  index: number;
  words: string;
  meanings: string[];
}

export interface IWrong {
  index: number;
  words: string[];
  meanings: string[][];
}

export interface IAnswerInitialState {
  answerStorage: IAnswer[];
  wrongStorage: IWrong;
  testWordStorage: ITestWordStorage[];
  isLoading: boolean;
  isFinish: boolean;
}

export interface IEndWordTestItem {
  wordStorageId: number;
  testType: string;
  totalWords: number;
  wrongWords: number;
  time: number;
  collectionWrongWord: {
    word: string[];
    meaning: string[][];
  };
}

export interface ICollectionWrongWord {
  words: string[];
  meanings: string[][];
}

export interface IBestVoca {
  id: number;
  title: string;
  description: string;
  category: string;
  likeCount: number;
  haveWordStorage: boolean;
}
