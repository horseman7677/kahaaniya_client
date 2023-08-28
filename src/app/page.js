"use client";
import Navbar from "@/component/navbar/Navbar";
import classes from "./page.module.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import StoryCard from "@/component/card/StoryCard";

export default function Home() {
  return (
    <Provider store={store}>
      
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <StoryCard />
        </div>
      </div>
    </Provider>
  );
}
