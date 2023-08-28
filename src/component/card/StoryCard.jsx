import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import img1 from "@/component/static/scard.jpg";
import Image from "next/image";
import classes from "./card.module.css";
import axios from "axios";
import Link from "next/link";

const StoryCard = () => {
  const [story, setStory] = useState([]);
  const [date, setDate] = useState("");

  useState(() => {
    axios.get("http://localhost:8080/kahaani/all-story").then((res) => {
      // console.log(res.data);
      setStory(res.data);
    });
  }, []);

  // const getDate = (date) => {
  //   let d = date;
  //   console.log(d);
  // };
  // const renderRead = (e) => {
  //   // e.preventDefault();
  //   <Link href={`/story/${e}`}></Link>;
  //   console.log(e);
  // };
  return (
    <>
      {story.map((item, key) => (
        <Card
          key={key}
          className={classes.root}
          sx={{ maxWidth: 300, padding: 1 }}
          elevation={5}
        >
          <Image className={classes.img} src={img1} alt="card" />
          <CardContent>
            <Typography
              className={classes.title}
              align="center"
              // gutterBottom
              variant="h5"
              component="div"
            >
              {item.title}
            </Typography>
            <Typography className={classes.story}>{item.story}</Typography>
          </CardContent>
          <CardActions className={classes.action}>
            
            <h5 className={classes.date}>{item.created_at}</h5>
            <Link href={`/story/${item.id}`}>
              <Button size="large">Read</Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </>
  );
}; //onClick={() => renderRead(item.id)}

export default StoryCard;
