import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Development"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="DOCTOR APPOINTMENT APPLICATION"
          des=" A fully funtioned Mern Stack Responsive Web App to take the Appointment Consultant of Doctores, with a Doctor Panel as well as an Admin Panel."
          src={projectOne}
        />
        <ProjectsCard
          title="FOREVER E-commerce"
          des="Well optimized Merchant Online Store Developed with Node.JS and frontend framework React,a responsive e-commerce website including an Admin Panel."
          src={projectTwo}
        />
        <ProjectsCard
          title="AI Chat Application"
          des=" Futuristic AI chat bot with personal message sending feature build using latest google ai tech Gemini and Mern Stack Technology."
          src={projectThree}
        />
        <ProjectsCard
          title="REAL-ESTATE WEBSITE"
          des=" A React framework based fully responsive Website for Show Casing the Real-Estate Buisness , Build using HTML-5, Tailwind CSS and JavaScript. "
          src={projectThree}
        />
        <ProjectsCard
          title="FOOD ORDERING APPLICATION"
          des=" Full Stack Mern Food Ordering Project used with Tailwind CSS for making it responsive , Also having an Admin Controled Panel for taking the orders from the Customers."
          src={projectOne}
        />
        <ProjectsCard
          title="UBER CAB CLONE"
          des=" Modern Cab booking Web Application Developed with Google Cloud Map API's and the traditional Mern Stack Development which includes the Captain Interface."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects