import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaEye } from "react-icons/fa";

function AchievementCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Function to truncate description
  const truncateDescription = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to get appropriate icon based on category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Academic":
        return <FaMedal style={{ color: "#FFD700", fontSize: "1.2rem" }} />;
      case "Competition":
        return <FaTrophy style={{ color: "#FFD700", fontSize: "1.2rem" }} />;
      case "Recognition":
        return <FaAward style={{ color: "#FFD700", fontSize: "1.2rem" }} />;
      default:
        return <FaCertificate style={{ color: "#c770f0", fontSize: "1.2rem" }} />;
    }
  };

  // Function to get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "Development":
        return "#007bff";
      case "AI/ML":
        return "#28a745";
      case "Cybersecurity":
        return "#dc3545";
      case "Data Analytics":
        return "#17a2b8";
      case "Academic":
        return "#FFD700";
      case "Recognition":
        return "#FFD700";
      case "Competition":
        return "#FFD700";
      case "Research":
        return "#6f42c1";
      case "Internship":
        return "#fd7e14";
      default:
        return "#c770f0";
    }
  };

  return (
    <Card className="achievement-card-view">
      <Card.Body>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
          {getCategoryIcon(props.category)}
          <span 
            style={{ 
              marginLeft: "10px", 
              fontSize: "0.8rem", 
              color: getCategoryColor(props.category),
              fontWeight: "600",
              textTransform: "uppercase"
            }}
          >
            {props.category}
          </span>
        </div>
        
        <Card.Title style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          {props.title}
        </Card.Title>
        
        <div style={{ marginBottom: "10px" }}>
          <span style={{ color: "#c770f0", fontWeight: "600" }}>Issuer: </span>
          <span style={{ color: "white" }}>{props.issuer}</span>
        </div>
        
        <div style={{ marginBottom: "15px" }}>
          <span style={{ color: "#c770f0", fontWeight: "600" }}>Date: </span>
          <span style={{ color: "white" }}>{props.date}</span>
        </div>
        
        <Card.Text style={{ textAlign: "justify", marginBottom: "15px" }}>
          {isExpanded ? props.description : truncateDescription(props.description)}
        </Card.Text>
        
        {/* View More/Less Button */}
        {props.description.length > 150 && (
          <Button 
            variant="outline-primary" 
            onClick={toggleExpanded}
            style={{ 
              marginBottom: "15px",
              fontSize: "0.9rem",
              padding: "5px 15px"
            }}
          >
            {isExpanded ? "View Less" : "View More"}
          </Button>
        )}

        {/* View Certificate Button */}
        {props.certificateLink && (
          <Button 
            variant="success" 
            href={props.certificateLink}
            target="_blank"
            style={{ 
              marginBottom: "15px",
              fontSize: "0.9rem",
              padding: "5px 15px",
              marginLeft: props.description.length > 150 ? "10px" : "0px"
            }}
          >
            <FaEye /> &nbsp; View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default AchievementCard; 