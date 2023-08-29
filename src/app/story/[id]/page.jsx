"use client";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";

const StoryPage = (ctx) => {
  const [story, setStory] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(`https://kahaani.onrender.com/kahaani/byId/${ctx.params.id}`)
      .then((res) => {
        // console.log(res.data);
        setStory(res.data);
        try {
          let d = res.data.created_at;
          // console.log(d.split("T")[0]);
          setDate(d.split("T")[0]);
        } catch (error) {}
      });
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.title}>
            <div className={classes.title_left}>
              <Typography variant="h4" align="center">
                {story.title}
              </Typography>
            </div>
            <div className={classes.title_right}>
              <h5>{story.authorName}</h5>
              <h6>{date}</h6>
            </div>
          </div>
          <div className={classes.storyBox}>{story.story}</div>
        </div>
      </div>
    </>
  );
};

export default StoryPage;
