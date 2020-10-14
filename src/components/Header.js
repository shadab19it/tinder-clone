import React from "react";
import "./Header.scss";
import ForumIcon from "@material-ui/icons/Forum";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import TinderLogo from "../assests/tinder.png";
const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>
      <div className='header__logo'>
        <img src={TinderLogo} alt='tinder logo' />
      </div>
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  );
};

export default Header;
