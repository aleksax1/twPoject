import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <>
          <div className=" h-24 bg-slate-800 flex items-center justify-between text-white px-20" >
           <p>Web Page</p>
           <p>Copy rights:Aleksa</p>
              <div className="flex flex-row" >
              <p>Contact me with <FaGithub /></p>
              
              </div>
      </div>
    </>
  );
}
