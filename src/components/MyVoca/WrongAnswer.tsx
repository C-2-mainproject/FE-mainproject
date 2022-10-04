import MyVocaList from "./MyVocaList";

type TargetIdProps = {
  targetId: string;
};

const WrongAnswer = ({ targetId }: TargetIdProps) => {
  return <MyVocaList targetId={targetId} />;
};

export default WrongAnswer;
