import { React, useState } from "react";
import { Button } from "../ui/Button";
import IButton from "@mui/material/Button";
import ITextField from "@mui/material/TextField";
import './FormStyle.css'

export function Form({ handleAddMess }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('input',text)

    handleAddMess({ author: "user", text: text });

    setText("");
  };
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} className="form-style">
        {/* <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        /> */}
        <ITextField
          id="outlined-search"
          label="Search field"
          color="secondary"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        {/* <Button type="Submit">add message</Button> */}

        <IButton type="Submit" variant="contained" color="secondary">
          add message
        </IButton>
      </form>
    </>
  );
}
