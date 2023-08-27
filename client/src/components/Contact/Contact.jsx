import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = () => {
  return (
    <div className=" space-y-10 w-full">
      <h2>Contact with us</h2>

      <div className="flex border border-blue-600">
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
      <div className="icons space-x-3 ">
        <Link to="https://github.com/smertcanyilmaz">
          <GitHubIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/s%C3%BCleyman-mertcan-y%C4%B1lmaz-87312b196/">
          <LinkedInIcon className="text-[#0077b5] " />
        </Link>
        <Link to="https://twitter.com/smertcann">
          <TwitterIcon className=" text-[#1DA1F2]" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
