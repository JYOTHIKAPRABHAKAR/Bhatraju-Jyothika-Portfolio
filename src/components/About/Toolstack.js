import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiRender,
} from "react-icons/si";
import { 
  FaPen, 
  FaHeart, 
  FaRobot,
  FaCogs,
  FaBrain,
  FaComments,
  FaGem
} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHeart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCogs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaComments />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGem />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>
    </Row>
  );
}

export default Toolstack;
