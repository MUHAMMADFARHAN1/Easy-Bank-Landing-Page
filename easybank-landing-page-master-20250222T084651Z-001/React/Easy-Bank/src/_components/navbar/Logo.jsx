import React from "react";
import logo from "../../images/logo.svg";

//Importing Images in a jsx file
//Method 1
// import img_name from "relative path"
// <img src={img_name} />
// Method 2
{
  /* <img src="/path_starting_from_public" /> */
}

// A guide:
// https://cloudinary.com/guides/web-performance/5-ways-to-import-images-in-react-bonus-automation-method

export default function Logo() {
  return <img src={logo} alt="image here" />;
}
