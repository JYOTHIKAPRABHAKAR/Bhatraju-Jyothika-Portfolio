import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Jyothika Bhatraju</span>—a Full-Stack Developer and Software Developer Mentor at NxtWave, passionate about building scalable, responsive web apps that make a difference.
            <br />
            <br />
            I hold a Bachelor's degree in Electronics and Communication Engineering with an 8.1 CGPA, and I've developed expertise in frontend and backend technologies like HTML, CSS, JavaScript, React.js, Node.js, Express, SQLite, and MongoDB.
            <br />
            <br />
            My research on Currency Authentication was presented at ICCET 2023, and I continue to explore future-forward domains like AI/ML, Blockchain, Cybersecurity, and Data Analytics.
            <br />
            <br />
            My journey has been recognized with a Gold Medal in ECE, the Young Engineer's Award, and 1st place in Hackathon 2022 for Web Development.
            <br />
            During my internship at BHEL, I worked with Computer Numerical Controllers, strengthening my technical foundation.
            <br />
            <br />
            I strive to build digital experiences that are not just functional—but scalable, secure, and future-ready.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
                      <footer className="blockquote-footer">BJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
