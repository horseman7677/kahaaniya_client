import React from "react";
import classes from "./footer.module.css";


const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>
        <div>@2023 Horseman Co. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
