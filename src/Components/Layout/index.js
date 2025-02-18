import { Layout } from "antd";
import logoPng from "../../Assets/logo.png";
import "./index.css";
import {
  HomeOutlined,
  UserOutlined,
  FundProjectionScreenOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const { Header, Content, Footer } = Layout;
const navs = [
  { title: "Home", icon: <HomeOutlined /> },
  { title: "About", icon: <UserOutlined /> },
  { title: "Projects", icon: <FundProjectionScreenOutlined /> },
  { title: "Resume", icon: <FileTextOutlined /> },
];

const HomeLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const linkedInUrl = "https://www.linkedin.com/in/srikanth-reddy-peram-8a2678211";
  const gitHubUrl = "https://github.com/Srikanth77-33";
  const instaUrl = "https://www.instagram.com/srikanthre7/?igsh=dTQzYmdwYmpndmZo&utm_source=qr#";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <Header>
        <div className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
          <div className="logo">
            <img
              src={logoPng}
              alt="logo"
              style={{ width: "50px", height: "40px" }}
            />
          </div>

          <div className="hamburgerMenu">
            <div
              id="nav-icon4"
              className={isOpen ? "open" : ""}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="navs">
            {navs.map(({ title, icon }) => (
              <Link className="nav" to={`/${title.toLowerCase()}`}>
                <span className="icon">{icon}</span>
                <span className="title">{title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div
          id="wrapper"
          class={isOpen ? "open" : ""}
          style={{
            backgroundColor: "#181a27",
            color: "white",
            height: `${isOpen ? 257 : 0}px`,
          }}
        >
          <div className="hamburgerNavs">
            {navs.map(({ title, icon }) => (
              <Link className="nav" to={`/${title.toLowerCase()}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="icon">{icon}</span>
                <span className="title">{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </Header>

      <Content>
        <div>{children}</div>
      </Content>
      <Footer className="footer">
        <div>Designed and Developed by Srikanth Reddy</div>
        <div>Copyright ©{new Date().getFullYear()} SR</div>
        <div>
          <span><a href={linkedInUrl} target="_blank" rel="noreferrer"><FaLinkedin /></a></span>
          <span><a href={gitHubUrl} target="_blank" rel="noreferrer"><FaGithub /></a></span>
          <span><a href="mailto:srikanthreddyperam77@gmail.com" target="_blank" rel="noreferrer"><IoIosMail /></a></span>
          <span><a href={instaUrl} target="_blank" rel="noreferrer"><AiFillInstagram /></a></span>
        </div>
      </Footer>
    </Layout>
  );
};
export default HomeLayout;
