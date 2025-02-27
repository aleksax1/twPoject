import { Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommentCard from "../../components/commentCard/commentCard";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import groupPic from "./Group 27.png";
import profilPic from "./profilePic.png";
export default function HomePage() {
  const comments = [
    {
      title: "Mark",
      content: ["Great post!", "I really enjoyed reading this."],
    },
    {
      title: "David",
      content: ["Interesting perspective.", "Thanks for sharing!"],
    },
    {
      title: "Marc",
      content: ["Interesting perspective.", "Thanks for sharing!"],
    },
    {
      title: "Marc",
      content: ["Interesting perspective.", "Thanks for sharing!"],
    },
    {
      title: "Marc",
      content: ["Great post!", "I really enjoyed reading this."],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < comments.length - 2 ? prevIndex + 1 : prevIndex
    );
  };
  return (
    <>
      <Nav></Nav>
      <div className="h-96 bg-slate-600 flex flex-row">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-4/6 gap-5 space-y-6">
            <p className="text-5xl text-white">
              Create your website <br />
              in <span className="text-red-600">less than 12days</span>{" "}
            </p>
            <p className="text-white">
              Hey, Aleksa Jankovic A fullstack web developer with 1 years
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
            <div className="bg-orange-800 h-0.5 w-full"></div>
            <p className="pt-6">
              My passion for building websites started since 2020 and since then
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
      <div className="h-96 bg-slate-600 flex flex-row justify-center items-center gap-4">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="text-white">
          {"<"} Prev
        </button>
        {comments
          .slice(currentIndex, currentIndex + 2)
          .map((comment, index) => (
            <CommentCard
              key={index}
              title={comment.title}
              content={comment.content}
            />
          ))}
        <button className="text-white"
          onClick={handleNext}
          disabled={currentIndex >= comments.length - 2}
        >
          Next {">"}
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}
