import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { successToastify } from "../utils/Toastify";

import { useBlog } from "../context/BlogContextProvider";

export default function NewBlog() {
  const titleRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();
  const history = useHistory();
  const { addBlog } = useBlog();

  const handleSubmit = (e) => {
    const blogItem = {
      title: titleRef.current.value,
      imageUrl: imageRef.current.value,
      content: contentRef.current.value,
    };
    e.preventDefault();
    addBlog(blogItem);
    history.push("/dashboard");
    successToastify("Added Succesfully");
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch", height: "50px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        inputRef={titleRef}
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        inputRef={imageRef}
        id="outlined-basic"
        label="Image URL"
        variant="outlined"
      />
      <TextField
        inputRef={contentRef}
        id="outlined-basic"
        label="Content"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Box>
  );
}
