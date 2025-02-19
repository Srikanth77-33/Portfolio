import React from "react";
import { StyledProjects, StyledButton } from "./styledProjects";
import { Card } from "antd";
import { FaGithub } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";

const cards = [
  {
    title: "Card title",
    desc: "This is the description",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    imgAlt: "example",
  },
  {
    title: "Card title",
    desc: "This is the description",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    imgAlt: "example",
  },
  {
    title: "Card title",
    desc: "This is the description",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    imgAlt: "example",
  },
  {
    title: "Card title",
    desc: "This is the description",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    imgAlt: "example",
  },
];

const Projects = () => {
  return (
    <StyledProjects>
      <div style={{ textAlign: "center", fontWeight: 400, fontSize: "3em" }}>
        My Recent <span>Works</span>
      </div>
      <div style={{ textAlign: "center", fontWeight: 400, fontSize: "1.5em", opacity: '0.6' }}>
        Here are a few projects I've worked on recently.
      </div>
      <div className="projects">
        {cards.map((card) => (
          <Card
            style={{
              width: 300,
            }}
            cover={<img alt={card.imgAlt} src={card.imgSrc} />}
          >
            <div className="content">
              <div className="title">{card.title}</div>
              <p className="desc">{card.desc}</p>
            </div>

            <div className="actions">
              <div>
                <StyledButton className="custom-button"
                  icon={<FaGithub />}
                >
                  GitHub
                </StyledButton>
              </div>
              <div>
                <StyledButton className="custom-button"
                  icon={<MdOutlineScreenshotMonitor />}
                >
                  Demo
                </StyledButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </StyledProjects>
  );
};

export default Projects;
