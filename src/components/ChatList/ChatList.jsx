import { useState } from "react";
import { nanoid } from "nanoid";
import {Link} from 'react-router-dom'

export function ChatList({ onAddChat, chats }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddChat({
      id: nanoid(),
      name: value,
    });
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/ChatPage/${chat.name}`}>{chat.name}
            </Link>
            {chat.name}
            </li>
        ))}
      </ul>
      <h1>ChatList</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Create Chat</button>
      </form>
    </>
  );
}
