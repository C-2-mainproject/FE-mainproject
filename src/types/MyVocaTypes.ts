export const category_list = [
  { filterCategory: "카테고리", value: "토익" },
  { filterCategory: "카테고리", value: "토플" },
  { filterCategory: "카테고리", value: "텝스" },
  { filterCategory: "카테고리", value: "초등" },
  { filterCategory: "카테고리", value: "중등" },
  { filterCategory: "카테고리", value: "고등" },
  { filterCategory: "카테고리", value: "회화" },
  { filterCategory: "카테고리", value: "기타" },
];

export const shared_list = [
  { filterCategory: "공개", value: "공개" },
  { filterCategory: "공개", value: "비공개" },
];

export interface IWordStorage {
  id: number;
  category: string;
  createAt: string;
  description: string;
  lastTestAt: string;
  likeCount: number;
  modifiedAt: string;
  nickname: string;
  public: boolean;
  title: string;
}

export interface IUpdateWord {
  words: string[];
  meanings: string[][];
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

export interface ModalProps {
  openAddWordModal: () => void;
}

export interface Props {
  wordStorage: IWordStorage;
}

export interface IndexProps {
  index: number;
}

export interface TargetIdProps {
  targetId: string;
}

export interface ValueProps {
  wordValue: string;
  meaningValue: string[];
}
