import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import groupPic from "./Group 27.png";
import profilPic from "./profilePic.png";
export default function HomePage() {
  return (
    <>
      <Nav></Nav>
      <div className="h-96 bg-slate-600 flex flex-row">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-4/6 gap-5 space-y-6" >
            <p className="text-5xl text-white">
              Create your website <br />
              in <span className="text-red-600">less than 12days</span>{" "}
            </p>
            <p className="text-white">
              Hey, I’m Mark Essein. A fullstack web developer with 7 years
              experience building successful websites and applications. I can
              build a high converting website for you as quick as possible!
            </p>
            <button className="h-10 bg-orange-600 rounded-lg px-5">
              <Link className="">GET STARTED</Link>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex place-items-end justify-center">
          <img src={profilPic} alt="" className="w-3/6" />
        </div>
      </div>
      <div className="h-96 bg-slate-700 flex">
        <div className="w-1/2 flex flex-row justify-center place-items-center">
          <img src={groupPic} alt="" />
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div className="flex flex-col text-white w-3/5 \ ">
            <p className="text-3xl ">About me</p>
            <div className="bg-orange-600 h-0.5 w-full"></div>
            <p className="pt-6">
              My passion for building websites started since 2013 and since then
              i have helped companies around the world build amazing websites
              and products that create real value for the business and users. I
              enjoy solving problems with clean scalable solutions and I also
              have a genuine passion for inspiring design. I am a fullstack
              developer focusing on core frontend and backend technologies which
              include HTML, CSS, Javascript, React and other core languages
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
