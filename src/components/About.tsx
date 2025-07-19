import React from "react";

const About: React.FC<{}> = () => {
  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="text-[#50368d] text-3xl font-bold">
        About Me
        <img
          className="rounded-full mt-2"
          src="src\assets\images\kelsey-myton-headshot.jpg"
          height="200px"
          width="200px"
        />
      </div>
      <div className="col-span-2">
        <div className="">
          Hi, I’m Kelsey, a software engineer at Liberty Mutual and a graduate
          student pursuing my Master’s in Computer Science at Georgia Tech. I
          discovered programming in high school through a Girls Who Code summer
          program, which sparked a passion that led me to study computer science
          in college.
        </div>
        <div className="my-4">
          I’m especially passionate about empowering women in tech. Throughout
          college and into my career, I’ve stayed involved by organizing
          hackathons and mentoring students and young professionals.
        </div>
            <i className="devicon-github-original text-[#50368d] mr-1"></i>
        <a href="https://www.github.com/kelsey-myton" target="_blank">
          Github
        </a>
            <i className="devicon-linkedin-plain text-[#50368d] mr-1 ml-2"></i>
        <a href="https://www.linkedin.com/in/kelsey-myton" target="_blank">
          LinkedIn
        </a>
        <div className="mt-10">
          <a className="border-2 border-[#50368d] py-4 px-8" href="src\assets\files\kelsey-myton-resume.pdf" download>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
