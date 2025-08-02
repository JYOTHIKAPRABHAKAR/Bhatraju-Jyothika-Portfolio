import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../jyoavatar.jpg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Jyothika Bhatraju—a Full-Stack Developer and Software Developer Mentor at NxtWave, passionate about building scalable, responsive web apps that make a difference.
              <br />
              <br />
              I work across the stack with <i><b className="purple">HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB, SQLite, Python, and GIT</b></i>—turning ideas into real-world products.
              <br />
              <br />
              I'm also curious about the future—exploring <i><b className="purple">AI/ML, Blockchain, Cybersecurity, and Data Analytics</b></i>.
              <br />
              <br />
              From publishing research on fake currency detection to winning hackathons, I love blending creativity with code to push boundaries and build what's next.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ 
                  borderRadius: "50%", 
                  width: "400px", 
                  height: "400px", 
                  objectFit: "cover",
                  border: "4px solid #c770f0"
                }} 
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JYOTHIKAPRABHAKAR"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jyothika-bhatraju-22474230a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:bhatraju.jyothika267@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
