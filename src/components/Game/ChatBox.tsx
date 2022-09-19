import { Stomp } from "@stomp/stompjs";
import { useLayoutEffect } from "react";
import SockJS from "sockjs-client";
import styled from "styled-components";
import { getSessionId } from "../../shared/Cookie";
import ChatList from "./ChatList";

const ChatBox = () => {
  const socket = new SockJS("http://newlno.com/wss/websocket");
  const stompClient = Stomp.over(socket);

  // console.log(socket, stompClient);

  const headers = {
    simpSessionId: getSessionId(),
  };

  useLayoutEffect(() => {
    console.log("useLayoutEffect!!");
    onConnected();

    return () => {
      onDisConnected();
    };
  }, []);

  const id = 1;
  const onConnected = () => {
    console.log("onConnected!!");
    try {
      stompClient.connect(headers, () => {
        console.log("INININI");
        stompClient.subscribe(
          `/topic/a`,
          data => {
            console.log("result :: ", JSON.parse(data.body));
          },
          headers,
        );
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const onDisConnected = () => {
    console.log("onDisConnected!!");
    try {
      stompClient.disconnect(() => {
        stompClient.unsubscribe("sub-0");
      }, headers);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const sendMessage = () => {
    console.log("sendMessage!!");
    stompClient.send(
      `/pub/chat/message`,
      headers,
      JSON.stringify({
        roomId: id,
      }),
    );
  };

  return (
    <ChatBoxLayout>
      <ChatList />
    </ChatBoxLayout>
  );
};

const ChatBoxLayout = styled.div`
  height: 500px;
  border: 10px solid blue;
`;
export default ChatBox;
