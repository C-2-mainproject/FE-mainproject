export interface Props {
  id: number;
  word: string;
  length: number;
  meaing: string[];
}

export interface ResultProps {
  submitAnswer: IAnswer;
  orginAnswer: string[];
  totalLength: number;
  success: boolean;
}

export interface ModalProps {
  id: number;
  openWordTestServiceModal: () => void;
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
export interface ITestWordStorage {
  wordStorageId: number;
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
