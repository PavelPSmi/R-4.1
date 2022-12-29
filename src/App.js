import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Profile } from "./pages/Profile";
import { ChatPage } from "./pages/ChatPage";
import { ChatList } from "./components/ChatList/ChatList";
import { useState } from "react";
import { nanoid } from "nanoid";

const defaultMessages = {
  default: [
    { author: "user", text: "hi" },
    { author: "user", text: "hello" },
  ],
};

function App() {
  const [messages, setMessages] = useState(defaultMessages);

  const chats = Object.keys(messages).map((chat) => ({
    id: nanoid(),
    name: chat,
  }));

  const onAddChat = (newChat) => {
    // console.log("newChat", newChat);
    setMessages({ ...messages, 
      [newChat.name]: [] });
  };
  const onAddMessage = (chatId, newMessage) => {
    setMessages({ ...messages, 
      [chatId]: [...messages[chatId], newMessage] });
  };
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="ChatPage">
            <Route
              index
              element={<ChatList chats={chats} onAddChat={onAddChat} />}
            />
            <Route
              path=":chatId"
              element={
                <ChatPage
                  chats={chats}
                  messages={messages}
                  onAddMessage={onAddMessage}
                  onAddChat={onAddChat}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<h1>ERROR 404. PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  );
}

export default App;
