import React from "react";
import classes from "@/component/navbar/navbar.module.css";
import Link from "next/link";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";
import { test } from "@/redux/reducers/StorySlice";

const Navbar = () => {
  // const dispatch = useDispatch();

  // const renderAdd = () => {
  //   dispatch(test(2));
  // };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}></div>
        <div className={classes.middle}>
          <Link href="/">
            <h2>Kahaaniya</h2>
            <h5>Shweta Sagar</h5>
          </Link>
        </div>
        <div className={classes.right}>
          {/* <ButtonGroup
            color="secondary"
            aria-label="medium secondary button group"
          >
            <Button key="add" onClick={renderAdd}>
              ADD
            </Button>
            {/* <Button key="edit" onClick={renderEdit} disabled={enableEdit}>
              EDIT
            </Button>
            <Button key="delete" onClick={renderDelete}>
              DELETE
            </Button> 
          </ButtonGroup> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
