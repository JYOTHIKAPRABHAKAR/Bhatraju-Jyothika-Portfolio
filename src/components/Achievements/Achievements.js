import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AchievementCard from "./AchievementCard";

function Achievements() {
  return (
    <Container fluid className="achievement-section">
      <Particle />
      <Container>
        <h1 className="achievement-heading">
          My <strong className="purple">Achievements</strong> & Certifications
        </h1>
        <p style={{ color: "white" }}>
          Here are my professional certifications and notable achievements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="achievement-row">
                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Full Stack Development Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive certification covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL. Completed hands-on projects and real-world applications."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/node-js?id=TPNPSAOUZD"
             />
           </Col>

                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Developer Foundations Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive foundation course covering fundamentals of computer science, command line operations, Git collaboration, and essential development practices."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/developer-foundations?id=NMTRECIXNB"
             />
           </Col>

                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="JavaScript Essentials Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive JavaScript course covering factory and constructor patterns, prototype and classes, asynchronous JavaScript, scope & hoisting, and advanced array methods."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/javascript-essentials?id=QGTIRRXXOG"
             />
           </Col>

                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Responsive Web Design Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive course covering CSS Flexbox, CSS Media Queries, CSS Box Sizing, and developing responsive layouts for modern web applications."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=VMMHCDFBJB"
             />
           </Col>

                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Introduction to Databases Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive course covering SQL querying, aggregations and group by operations, database modeling, joins, views and subqueries for effective data management."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/introduction-to-databases?id=EHTCGCGYBC"
             />
           </Col>

                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Young Engineer's Award"
               issuer="Professional Body"
               date="2023"
               description="Recognized for innovative research in Currency Authentication and contributions to the field of electronics and communication engineering."
               category="Recognition"
               certificateLink="https://drive.google.com/file/d/1mK6HkrOwEKLJiirXTUEEm9oxNhySXEFZ/view"
             />
           </Col>

                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="1st Place - Hackathon 2022"
               issuer="Web Development Competition"
               date="2022"
               description="Won first place in the Web Development category for creating innovative and user-friendly web applications using modern technologies."
               category="Competition"
               certificateLink="https://drive.google.com/file/d/1PU-_hGsGvbYJYHFZtgkGXfHc80Pp0sqn/view"
             />
           </Col>

                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Research Publication - ICCET 2023"
               issuer="International Conference"
               date="2023"
               description="Published research paper on Currency Authentication at the International Conference on Computer Engineering and Technology (ICCET 2023)."
               category="Research"
               certificateLink="https://drive.google.com/file/d/1F9obA9TlIfV_9U3z_KKxjkdZCWLXY_9e/view"
             />
           </Col>

           <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Project Expo 2022"
               issuer="University"
               date="2022"
               description="Successfully presented innovative project at the university's annual Project Expo, showcasing technical skills and creative problem-solving abilities."
               category="Competition"
               certificateLink="https://drive.google.com/file/d/13ynzHrCa08HFHm-Iz2iHBTKtmwbUziCl/view"
             />
           </Col>

                     <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="BHEL Internship Certificate"
               issuer="Bharat Heavy Electricals Limited"
               date="2022"
               description="Completed internship working with Computer Numerical Controllers (CNC) and gained practical experience in industrial automation systems."
               category="Internship"
               certificateLink="https://drive.google.com/file/d/1_RnbZtuMiH69mo8RmFCxGLru7GqGsxft/view"
             />
           </Col>

           <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Dynamic Web Application Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive course covering JavaScript fundamentals, arrays and objects, fetch & callbacks, DOM manipulation, JSON & local storage, forms, and building real-world applications like Wikipedia Search."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/dynamic-web-application?id=AXRFQMSVSO"
             />
           </Col>

           <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Responsive Website Development Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive course covering Bootstrap Grid System, CSS Specificity, CSS Cascading and Inheritance, Bootstrap Flex Utilities for building modern responsive websites."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=PDLJTAIPYS"
             />
           </Col>

           <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Python Programming Foundations Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive course covering loops & conditionals, lists, tuples & sets, dictionaries, functions & recursion, and Object-Oriented Programming concepts in Python."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/programming-foundations-with-python?id=YTQDHRZMXU"
             />
           </Col>

           <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="XPM 4.0 Fundamentals Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive course covering Identity and Value Strengths, RCA - Repeated Conscious Attempts, and Setting Priorities for personal and professional development."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=JPRNIOFAEI"
             />
           </Col>

           <Col lg={4} md={6} sm={12} className="achievement-card">
             <AchievementCard
               title="Static Website Development Certification"
               issuer="NxtWave"
               date="2024"
               description="Comprehensive course covering basics of HTML5, CSS3, CSS Box Model, Bootstrap and Flex Layout, Bootstrap Utility Classes and Components, and Website Layout Development."
               category="Development"
               certificateLink="https://certificates.ccbp.in/academy/static-website?id=SJPLEACSTN"
             />
           </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements; 