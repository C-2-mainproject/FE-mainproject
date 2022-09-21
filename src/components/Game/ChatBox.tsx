import { useLayoutEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import styled from "styled-components";
import { getSessionId } from "../../shared/Cookie";
import { GameInput, ChatList } from "../index";

const ChatBox = () => {
  const [roomId, setRoomId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [returnMsg, setReturnMsg] = useState<string[]>([]);

  const socket = new SockJS("http://newlno.com/ws");
  const stompClient = Stomp.over(socket);

  const headers = {
    simpSessionId: getSessionId(),
  };

  useLayoutEffect(() => {
    onConnected();
  }, []);

  const onConnected = () => {
    console.log("onConnected!!");
    try {
      stompClient.connect(headers, () => {
        stompClient.subscribe(
          `/sub/chat/join`,
          data => {
            const returnMessage = JSON.parse(data.body);
            setRoomId(returnMessage.roomId);

            reSubscribe(returnMessage.roomId);
          },
          headers,
        );
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const reSubscribe = (room: string) => {
    try {
      stompClient.unsubscribe("sub-0");
      stompClient.subscribe(
        `/sub/chat/enter/${room}`,
        data => {
          const returnMessage = JSON.parse(data.body);
          console.log("return msg::", returnMessage);
          setReturnMsg(returnMsg => [...returnMsg, returnMessage.message]);
        },
        headers,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const sendMessage = () => {
    stompClient.send(
      `/pub/chat/enter`,
      headers,
      JSON.stringify({
        sessionId: getSessionId(),
        message: message,
        roomId: roomId,
        messageType: "CHAT",
      }),
    );
  };

  return (
    <div>
      <ChatBoxLayout>
        <ChatList returnMsg={returnMsg} />
      </ChatBoxLayout>
      <GameInput setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
};

const ChatBoxLayout = styled.div`
  height: 500px;
  border: 10px solid blue;
`;
export default ChatBox;
