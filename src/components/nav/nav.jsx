import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
          <div className=" h-16 bg-slate-600 flex items-center justify-between" >
              <div className="w-1/4 flex justify-center items-center ">
                  <p className="text-xl text-white">Web Page</p>
              </div>
              <div className=" w-2/5 flex text-white justify-evenly items-center " >
                  <Link to="/">HOME</Link>
                  <Link to="/about">ABOUT</Link>
                  <Link>BLOG</Link>
                  <button className="h-10 bg-orange-600 rounded-lg px-5">
                      <Link className="">GET STARTED</Link>
                  </button>
              </div>
      </div>
    </>
  );
}
