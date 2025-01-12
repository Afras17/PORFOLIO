import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Skills from './Skills';


const Resume = () => {
   
   const [skillData, setSkillData] = useState(false);
   
   
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="SKILL BASED" des="My Resume" />
      </div>
      <div className='w-full'>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
          <li
            onClick={() =>
              setSkillData(true) 
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {skillData && <Skills />}
      
    </section>
  );
}

export default Resume