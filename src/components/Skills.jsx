import { div } from "framer-motion/client";
import ProgressBar from "./ProgressBar";
import { easeQuadInOut } from "d3-ease";

const Skills = () => {
  const skills = [
    { label: "HTML", valueEnd: 90 },
    { label: "CSS", valueEnd: 85 },
    { label: "JavaScript", valueEnd: 75 },
    { label: "React", valueEnd: 80 },
    { label: "SQL", valueEnd: 70 },
    { label: "Java", valueEnd: 60 }
  ];

  return (

    
    <div className="skills-container">

    <div> 
        <h1>Technical Skills</h1>
      </div>
      <div className="circle-bar">
      {skills.map((skill, index) => (
        <ProgressBar
          key={index}
          valueStart={0}
          valueEnd={skill.valueEnd}
          duration={2}
          easingFunction={easeQuadInOut}
          repeat={false}
          label={skill.label}
        />
      ))}

    </div>
    </div>
  );
};

export default Skills;
