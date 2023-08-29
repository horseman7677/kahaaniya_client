"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";

const initialState = {
  title: "",
  authorName: "",
  story: "",
};

const Admin = () => {
  const [story, setStory] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);
    setStory({ ...story, [name]: value });
  };

  const handlePost = () => {
    axios.post("http://13.50.104.79:8080/kahaani/post", story).then((res) => {
      console.log(res.status);
    });
  };
  return (
    <div className={classes.container}>
      <Typography className={classes.heading} variant="h3" align="center">
        Post Your Story Here...
      </Typography>
      <div className={classes.wrapper}>
        <Container fixed>
          <Box sx={{ bgcolor: "#fff", height: "100%", padding: 5 }}>
            <TextField
              style={{ padding: 8 }}
              label="Title"
              placeholder="your story title"
              type="text"
              name="title"
              value={story.title}
              onChange={handleInput}
            ></TextField>
            <br />
            <TextField
              style={{ padding: 8 }}
              label="Author"
              placeholder="author name"
              type="text"
              name="authorName"
              value={story.authorName}
              onChange={handleInput}
            ></TextField>
            <br />
            <TextField
              style={{ padding: 8 }}
              label="Story"
              placeholder="paste your story here"
              type="text"
              name="story"
              value={story.story}
              onChange={handleInput}
            ></TextField>
            <br />
            <Button
              className={classes.btn}
              variant="contained"
              size="large"
              onClick={handlePost}
            >
              Post
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
