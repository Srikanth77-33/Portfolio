import React from "react";
import aboutSvg from "../../Assets/about.png";
import { StyledAbout } from "./styledAbout";
import { IoLogoNodejs } from "react-icons/io";
import { DiNodejs, DiReact,  DiPython } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { LiaHandPointRightSolid } from "react-icons/lia";

const About = () => {
  const skills = [<IoLogoNodejs />, <DiNodejs />, <DiReact />, < DiPython />, <TbSql />, <BiLogoPostgresql /> ];
  const tools = [<VscVscode />, <SiPostman />];
  return (
    <StyledAbout>
      <div className="desc">
        <div style={{ flex: 1}}>
          <div style={{ textAlign: 'center', fontSize: '2.2em'}}>KNOW WHO <span>I'M</span></div>
          <div>
            <p style={{ fontSize: '1.5em'}}>
              Hi Everyone, I am <span>Soumyajit Behera</span> from <span>Bhubaneswar</span>, India. I am
              currently employed as a software developer at Juspay. I have
              completed Integrated MSc (IMSc) in Maths and Computing at BIT
              Mesra.
            </p>
            <div style={{ fontSize: '1.5em'}}>
              Apart from coding, some other activities that I love to do!
              <ul style={{ listStyleType: 'none', fontSize: '1em' }}>
                <li><LiaHandPointRightSolid style={{ position: 'relative', top: '3px'}}/> Playing Games</li>
                <li><LiaHandPointRightSolid style={{ position: 'relative', top: '3px'}} /> Writing Blogs</li>
              </ul>
            </div>
            <div className="quote">
              <div>"Strive to build things that make a difference!"</div>
              <div style={{ textAlign: 'end'}}>-SrikanthReddy</div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <img className="aboutSvg" src={aboutSvg} alt="AboutSVG" />
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: 'center', fontSize: '3em', fontWeight: 400}}>Professional <span>Skillset</span></h1>
        <div className="skills">
          {skills.map(item => (<div className="skillCard">
            {item}
          </div>))}
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: 'center', fontSize: '3em', fontWeight: 400}}><span>Tools</span> I Use</h1>
        <div className="skills">
          {tools.map(item => (<div className="skillCard">
            {item}
          </div>))}
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
