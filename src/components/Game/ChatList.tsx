type MessageProps = {
  returnMsg: string[];
};
const ChatList = ({ returnMsg }: MessageProps) => {
  return (
    <>
      {returnMsg.map((message, index) => {
        return <div key={index}>{message}</div>;
      })}
    </>
  );
};

export default ChatList;
