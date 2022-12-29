


import React, { useEffect, useState } from "react";
import { Form } from "../components/Form/Form";
import { MessageList } from "../components/MessageList/MessageList";
import { ChatList } from "../components/ChatList/ChatList";
import Container from "@mui/material/Container";
import { useParams, Navigate } from "react-router-dom";

export function ChatPage({onAddChat,onAddMessage,messages,chats}) {
//   const [messages, setMessages] = useState([]);
    const {chatId} = useParams()
    // console.log(messages)

//   const AddMess = (newMessage) => {
//     setMessages([...messages, newMessage]);
//   };


  useEffect(() => {
    if (chatId && 
        messages[chatId]?.length > 0 && 
        messages[chatId][messages[chatId].length - 1].author==='user') {
      const timeout=setTimeout(() => {
        onAddMessage(chatId, {
          author: "Alisa",
          text: "Hi.",
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }

  }, [chatId, messages]);

  const handleAddMess=(massage)=>{
    onAddMessage(chatId,massage)
  }

  return (
    <Container maxWidth="sm">
      <>
        <h1>Welcome</h1>
        <ChatList chats={chats} onAddChat={onAddChat}/>
        <Form handleAddMess={handleAddMess} />
        <MessageList messages={chatId?messages[chatId]:[]} />
      </>
    </Container>
  );
}

// export default MainPage;
