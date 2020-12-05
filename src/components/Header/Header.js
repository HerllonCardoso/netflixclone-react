/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Header.css";

export default () => {
  return (
    <header>
      <div className="header--logo">
        <a>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="netflix logo"
          />
        </a>
      </div>
      <div className="header--user">
        <a>
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="netflix user"
          />
        </a>
      </div>
    </header>
  );
};
