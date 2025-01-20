import React from 'react'
import { bannerImg } from "../../assets/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const RightBanner = () => {
  const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
     
    </div>
  );
}

export default RightBanner