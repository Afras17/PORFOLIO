import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Highly skilled in Backend Development with NodeJS and its Express framework also having experience with managing the MongoDB DataBase"
          icon={<FaGlobe />}
        />
        <Card
          title="Version Controller(git)"
          des="Experience in managing and using the code by using the version controllers mainly git and managing the code to gitgub"
          icon={<SiAntdesign />}
        />
        <Card
          title="UI Design"
          des="Creating attractive, engaging, simple and comfirtable styled User Interface using the Figma software with exiting and unique design"
          icon={<AiFillAppstore />}
        />
        <Card
          title="Video Editing"
          des="Advanced knowledge in Adobe Premiere Pro video editing software , Making unskippable and engaging content Videos through mesmerising visuals"
          icon={<SiProgress />}
        />
        <Card
          title="Web Design"
          des="Highly skilled in Frontend Development with HTML, CSS(Tailwind,Bootstrap),JavaScript and modern frameworks like React JS and Next JS"
          icon={<FaMobile />}
        />
        <Card
          title="Photoshop"
          des="Advanced knowledge in Adobe PhotoShop Photo editing software , creating own presets through color grading and making life to photos "
          
        />
      </div>
    </section>
  );
}

export default Features