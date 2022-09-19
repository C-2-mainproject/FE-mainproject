import MyVocaList from "./MyVocaList";

type TargetIdProps = {
  targetId: string;
};

const WrongAnswerComponent = ({ targetId }: TargetIdProps) => {
  return <MyVocaList targetId={targetId} />;
};

export default WrongAnswerComponent;
