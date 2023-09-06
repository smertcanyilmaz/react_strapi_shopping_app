import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { IconButton } from "@mui/material";

const Contact = () => {
  return (
    <div className=" w-full text-center md:p-0 space-y-5  md:space-y-10  ">
      <h2 className="text-lg md:text-base">Contact with me</h2>

      <div className="hidden md:flex border border-blue-600">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your e-mail"
          className="border-none outline-none flex-1 pl-3 text-sm w-full "
        />
        <button className="border-none outline-none p-2 bg-blue-500 text-white hover:bg-blue-600 duration-200">
          JOİN US
        </button>
      </div>
      <div className="icons flex gap-6 w-full items-center justify-center md:block md:space-x-6 ">
        <Link to="https://github.com/smertcanyilmaz">
          <IconButton>
            <GitHubIcon fontSize="medium" />
          </IconButton>
        </Link>
        <Link to="https://www.linkedin.com/in/s%C3%BCleyman-mertcan-y%C4%B1lmaz-87312b196/">
          <IconButton>
            <LinkedInIcon className="text-[#0077b5]" fontSize="medium" />
          </IconButton>
        </Link>

        <Link to="https://twitter.com/smertcann">
          <IconButton>
            <TwitterIcon className=" text-[#1DA1F2]" fontSize="medium" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
