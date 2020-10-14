import React from "react";
import "./SwipeBtn.scss";
import { Replay, Close, StarRate, Favorite, FlashOn } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const SwipeButton = () => {
  return (
    <div className='swipeBtn__container'>
      <div className='aciton__btns'>
        <IconButton className='swipeButton__repeat'>
          <Replay fontSize='large' />
        </IconButton>
        <IconButton className='swipeButton__left'>
          <Close fontSize='large' />
        </IconButton>
        <IconButton className='swipeButton__star'>
          <StarRate fontSize='large' />
        </IconButton>
        <IconButton className='swipeButton__right'>
          <Favorite fontSize='large' />
        </IconButton>
        <IconButton className='swipeButton__light'>
          <FlashOn fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
};

export default SwipeButton;
