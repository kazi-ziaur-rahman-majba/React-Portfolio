import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import newsWave from "../../Assets/Projects/newsWave.png";
import donation from "../../Assets/Projects/donation.png";
import career from "../../Assets/Projects/career.png";
import partition from "../../Assets/Projects/partition.png";
import patient from "../../Assets/Projects/patient.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsWave}
              isBlog={false}
              title="News-Wave"
              description="I orchestrated a React-Firebase project featuring integrated login systems, augmenting security measures and user
              accessibility. This innovative integration seamlessly merges the project's robust security framework with the
              convenience of users' existing Google and GitHub credentials, enhancing both usability and protection.
              "
              ghLink="https://github.com/majbaulhoque/The-Dragon-News"
              demoLink="https://the-dragon-news-eb6e8.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={donation}
              isBlog={false}
              title="Donation Campaign"
              description="Developed a React web app using ES6 and Tailwind CSS, featuring Home and Statistics pages. The Statistics page
              visualizes donation data from JSON files with interactive Chart.js pie charts, showing donation distributions across
              causes. The user-friendly interface ensures easy navigation and understanding. This project highlights my skills in
              React, JavaScript, data visualization, and responsive design. Applicant data is securely stored within the Project."
              ghLink="https://github.com/majbaulhoque/Donation-Campaign"
              demoLink="https://66499651089caa7653464079--chipper-trifle-006562.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={partition}
              isBlog={false}
              title="Recursive-Partition"
              description="Start with a single, vibrant partition as your canvas. Click 'H' (Horizontal) or 'V' (Vertical) to split the partition into two sections, and continue dividing infinitely as desired. Each section operates independently and can be removed using the “-” button for easy customization. Powered by dynamic, recursive logic."
              ghLink="https://github.com/majbaulhoque/Recursive-Partitioner"
              demoLink="https://soft-scone-ed9278.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={career}
              isBlog={false}
              title="Career-Hub"
              description="I developed a comprehensive job application system. Through this project, users can explore various job listings,
              delve into detailed job descriptions, and seamlessly apply for positions. The project features five key sections:
              Home, Jobs, Applied Jobs, and Statistics. Notably, applicant data is securely stored within the project, optimizing
              the application process"
              ghLink="https://github.com/majbaulhoque/React-career-hub"
              demoLink="https://6644579e1d25fe5daaf16a10--merry-centaur-cd7e4f.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patient}
              isBlog={false}
              title="Doctor-Hub"
              description="It is a fully responsive, interactive single-page application built with React and Tailwind CSS. Featuring sleek animations powered by Framer Motion, it offers a dynamic and engaging user experience. The design seamlessly adapts to all devices, incorporating modern transitions and interactive components for a visually appealing, user-friendly interface."
              ghLink="https://github.com/majbaulhoque/HealthX-Ventures"
              demoLink="https://flourishing-gnome-bf3670.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
