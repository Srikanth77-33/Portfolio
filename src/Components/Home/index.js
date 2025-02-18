import React from "react";
import { StyledDiv } from "./styledHome";
import developerSvg from "../../Assets/home-main.svg";
import avatar from "../../Assets/avatar.svg";
import { StyledDeveloperSvg, StyledAvatar } from "./styledHome";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <StyledDiv>
      <div className="greetingSection">
        <div className="greeting" style={{ flex: 1  }}>
          <h1 style={{ fontSize: '2.4em', fontWeight: 400 }}>
            Hi There! <span className="wave">👋🏻</span>
          </h1>
          <h1 style={{ fontSize: '2.5em', fontWeight: 400 }}>I'M <span className="name">SRIKANTH REDDY PERAM</span></h1>
          <h1 style={{ fontSize: '2.3em', fontWeight: 400 }}>
            I'M A{" "}
            <ReactTyped
              style={{ color: '#cd5ff8'}}
              strings={["Developer", "Writer", "Designer"]}
              typeSpeed={150}
              onTypingPaused={1000}
              loop
              backSpeed={50}
              cursorChar="|"
              showCursor={true}
            />
          </h1>
        </div>
        <div style={{ flex: 1 }}>
          <StyledDeveloperSvg src={developerSvg} alt="DeveloperIMG" />
        </div>
      </div>
      <div className="introduceSection">
        <div className="introduce" style={{ flex: 2 }}>
          <h1 style={{ textAlign: 'center', fontSize: '3em', fontWeight: 400}}>LET ME <span>INTRODUCE</span> MYSELF</h1>
          <br />
          <div className="content">
            <p  style={{ fontSize: '1.5em' }}>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            <br/><br/>
            I am fluent in classics like <span> C++, Javascript and Go.</span><br/>
            <br/>
            My field of Interest's are building new <span>Web Technologies and Products</span> and also in areas related to <span>Blockchain</span>.<br/>
            <br/>
            Whenever possible, I also apply my passion for developing products with <span> Node.js</span> and <span>Modern Javascript Library and Frameworks</span> like <span>React.js and Next.js</span>
            <br/><br/>
            </p>
          </div>
          <br />
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <StyledAvatar src={avatar} alt="Avatar" />
        </div>
      </div>
    </StyledDiv>
  );
};

export default Home;
