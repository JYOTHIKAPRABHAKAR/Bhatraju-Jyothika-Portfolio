import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Function to truncate description
  const truncateDescription = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{
          height: "200px",
          objectFit: "cover",
          width: "100%",
          minHeight: "200px"
        }}
        className="project-card-img"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {isExpanded ? props.description : truncateDescription(props.description)}
        </Card.Text>
        
        {/* View More/Less Button */}
        {props.description.length > 200 && (
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

        {!props.hideGitHub && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && !props.hideDemo && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: props.hideGitHub ? "0px" : "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"View Project"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
