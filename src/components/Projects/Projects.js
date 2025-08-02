import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbotImg from "../../Assets/Projects/Chatbot.png";
import ethicalHackingImg from "../../Assets/Projects/Ethical Hacking.png";
import dataAnalyticsImg from "../../Assets/Projects/Data Analytics.png";
import genAI2Img from "../../Assets/Projects/Gen ai 2.0.png";
import emojiGameImg from "../../Assets/Projects/Emoji.png";
import cinemaImg from "../../Assets/Projects/Cinema.png";
import foodDeliveryImg from "../../Assets/Projects/Food Delivery.png";
import onlineLearningImg from "../../Assets/Projects/OnlineLearning.png";
import resumeBuilderImg from "../../Assets/Projects/Resume Builder.png";
import nutriCoachImg from "../../Assets/Projects/NutriCoach.png";
import muscleDenImg from "../../Assets/Projects/Muscle Den.png";
import quizMasterImg from "../../Assets/Projects/Quiz Master.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="project-row">
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={chatbotImg}
              isBlog={false}
              title="Generative AI Chatbot"
              description="I successfully completed the Generative AI Application project as part of the Generative AI Mega Workshop hosted by Mr. Rahul Attuluri, CEO of NxtWave. This workshop focused on building intelligent applications that leverage Generative AI to create unique outputs such as text, images, and other media. As part of the project, I developed a Generative AI Chatbot that uses advanced Natural Language Processing (NLP) techniques to generate context-aware responses. The application provides personalized interaction, simulating real-time conversations and adapting to user input. This project enabled me to explore the potential of Generative AI in real-world applications and gave me valuable hands-on experience in building AI-driven solutions."
              ghLink="https://jyothikachatbot.ccbp.tech/"
              demoLink="https://jyothikachatbot.ccbp.tech/"
              hideGitHub={true}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={ethicalHackingImg}
              isBlog={false}
              title="Ethical Hacking – Malicious Email Investigation with Maltego"
              description="Completed a hands-on cybersecurity project using Maltego during the Ethical Hacking Mega Workshop hosted by Mr. Abhinav Devaguptapu. Investigated and analyzed malicious emails to identify threats and prevent security breaches. Used OSINT tools to extract and visualize data from emails, IPs, and domains—uncovering suspicious connections and hidden metadata. Gained practical experience in email forensics, cybersecurity analysis, and threat intelligence. Skills: Email Forensics | OSINT | Data Visualization | Cybersecurity"
              ghLink="https://www.pdffiller.com/jsfiller-desk14/?traceparent=00-78960cfbf8b336a84ef4b7753c1fd989-86bf8fcd55d19750-00&flat_pdf_quality=low&isShareViaLink=1&requestHash=8ca6500b5b2a055d8671bc2eb24e4426d4881c7043193f386e508a3fba6638d2&lang=en&projectId=1365139089&richTextFormatting=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&isSkipEditorLoadFrequency=true&jsf-probability-70=true&jsf-socket-io=false&jsf-simplified-modes-iteration-1=true&jsf-offline-mode=false&jsf-heading-bold=true&acc-share-button-in-editor=false&jsf-all-tools-tab=false&jsf-all-tools-tab-branch-b=false&isUseStaticImport=true&jsf-editor-pdfjs-five=true&jsf-context-menu-to-right-panel=false&jsf-disable-autosave=false&routeId=c112309e7724bdafbe4f77e55941fd72#05f441ebdbf0431c9047e3589939639d"
              demoLink="https://www.pdffiller.com/jsfiller-desk14/?traceparent=00-78960cfbf8b336a84ef4b7753c1fd989-86bf8fcd55d19750-00&flat_pdf_quality=low&isShareViaLink=1&requestHash=8ca6500b5b2a055d8671bc2eb24e4426d4881c7043193f386e508a3fba6638d2&lang=en&projectId=1365139089&richTextFormatting=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&isSkipEditorLoadFrequency=true&jsf-probability-70=true&jsf-socket-io=false&jsf-simplified-modes-iteration-1=true&jsf-offline-mode=false&jsf-heading-bold=true&acc-share-button-in-editor=false&jsf-all-tools-tab=false&jsf-all-tools-tab-branch-b=false&isUseStaticImport=true&jsf-editor-pdfjs-five=true&jsf-context-menu-to-right-panel=false&jsf-disable-autosave=false&routeId=c112309e7724bdafbe4f77e55941fd72#05f441ebdbf0431c9047e3589939639d"
              hideGitHub={true}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={dataAnalyticsImg}
              isBlog={false}
              title="Data Analytics – Real Mart Dashboard Project"
              description="Built an interactive dashboard using Power BI, Kaggle datasets, and Excel to analyze real-time retail data for a fictional company, Real Mart. The dashboard highlighted key metrics like sales performance, product trends, customer behavior, and inventory management—designed to support data-driven decision-making. This project strengthened my skills in data analysis, visualization, and the practical use of business intelligence tools. Skills: Power BI | Excel | Data Visualization | Business Intelligence"
              ghLink="https://drive.google.com/file/d/1A8PgFNUhbJQFesNofDfB0eqrVLIB--0Q/view"
              demoLink="https://drive.google.com/file/d/1A8PgFNUhbJQFesNofDfB0eqrVLIB--0Q/view"
              hideGitHub={true}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={genAI2Img}
              isBlog={false}
              title="Generative AI 2.0 – AI Product Development Workshop"
              description="Completed the Generative AI Mega Workshop 2.0 by Tezan Sahu (CEO, NxtWave), gaining hands-on experience in building AI-driven products and branding. Created a product logo, landing page, and marketing pitch while exploring Prompt Engineering, user persona creation, and AI-powered storytelling. Used tools like ChatGPT, Microsoft Copilot, Sologo AI, Namelix, Gamma AI, Clipchamp, and FormShare AI to prototype, design, and pitch innovative solutions. Skills: Prompt Engineering | AI Branding | Product Design | Generative AI Tools"
              ghLink="https://daily-invest.wegic.app/home"
              demoLink="https://daily-invest.wegic.app/home"
              hideGitHub={true}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={emojiGameImg}
              isBlog={false}
              title="Emoji Memory Game – Built with React"
              description="Created an interactive memory game using React, applying concepts like state management, component architecture, and event handling. The game tests users by having them click unique emojis without repetition—reinforcing my understanding of React fundamentals, UI/UX best practices, and dynamic user interaction. Tech Used: HTML | CSS | React"
              ghLink="https://extremerider.ccbp.tech/"
              demoLink="https://extremerider.ccbp.tech/"
              hideGitHub={true}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={cinemaImg}
              isBlog={false}
              title="Cinema Booking Platform API"
              description="I built a full-featured Cinema Booking Platform API using Node.js and Express, integrating JWT-based authentication for both users and admins. This platform allows seamless management of movies and showtimes, real-time seat booking, and secure payment processing. I also added role-based access control and an admin dashboard for monitoring revenue and bookings. Features like FnB (Food and Beverage) ordering and detailed Postman collections with auto-token injection were implemented to ensure a developer-friendly experience. Tech Used: Node.js | Express | JWT | SQLite | Postman"
              ghLink="https://github.com/JYOTHIKAPRABHAKAR/Cinema-Booking-Platform.git"
              demoLink="https://github.com/JYOTHIKAPRABHAKAR/Cinema-Booking-Platform.git"
              hideDemo={true}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={foodDeliveryImg}
              isBlog={false}
              title="Food Delivery Platform Backend"
              description="I developed a scalable backend API for a Swiggy-like food delivery service using Node.js, Express, and SQLite. The system supports complex relationships among users, restaurants, menu items, carts, orders, delivery partners, payments, and reviews. JWT authentication ensures secure access, while structured validation and detailed error handling guarantee robust operations. I focused on database design to handle dynamic address mapping, real-time delivery tracking, and cart persistence across sessions. Tech Used: Node.js | Express | JWT | SQLite | Database Design"
              ghLink="https://github.com/JYOTHIKAPRABHAKAR/Food-Delivery-App.git"
              demoLink="https://github.com/JYOTHIKAPRABHAKAR/Food-Delivery-App.git"
              hideDemo={true}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={onlineLearningImg}
              isBlog={false}
              title="Online Learning Platform API"
              description="I engineered the backend of a full-scale online learning platform inspired by Unacademy. Built with Node.js, Express, and SQLite, this system handles course creation, video lecture management, live classes, tests, and doubt resolution. JWT authentication with role-based access ensures secure operations for both learners and educators. I implemented tiered subscription models, real-time progress tracking, performance analytics, and detailed educator reviews to enrich the learning experience and backend integrity. Tech Used: Node.js | Express | JWT | SQLite | Role-based Access | Analytics"
              ghLink="https://github.com/JYOTHIKAPRABHAKAR/OnlineLearningPlatform.git"
              demoLink="https://github.com/JYOTHIKAPRABHAKAR/OnlineLearningPlatform.git"
              hideDemo={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeBuilderImg}
              isBlog={false}
              title="ResumeTrick – AI-Powered Resume Builder"
              description="I created ResumeTrick, a modern and responsive resume builder using React.js and Firebase. The platform offers AI-based suggestions for resume sections, live preview as users type, and one-click PDF downloads. I designed a clean, gradient-rich UI and implemented Firebase for authentication and data storage. With smooth animations, mobile-first design, and Font Awesome integration, the app delivers a polished and professional resume-building experience. Tech Used: React.js | Firebase | CSS3 | PDF Generation | Responsive Design"
              ghLink="https://github.com/JYOTHIKAPRABHAKAR/Resume-Builder.git"
              demoLink="https://resume-builder-p758.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutriCoachImg}
              isBlog={false}
              title="NutriCoach – AI-Powered Nutrition Coaching Platform"
              description="I built NutriCoach, an intelligent nutrition coaching platform that empowers users to reach their health goals through AI-driven meal planning and real-time macro tracking. I integrated Firebase for secure authentication, real-time data handling, and deployed the app via Firebase Hosting for seamless scalability. Users can log daily health metrics, manage pantry ingredients, and receive Gemini AI-generated personalized meal plans based on dietary goals and preferences. The app features a modern, responsive UI using HTML5 and Tailwind CSS, and visualizes nutrition trends with interactive Chart.js graphs. I also developed an admin dashboard for managing user data efficiently. With encrypted data handling and smart onboarding workflows, NutriCoach ensures both security and usability. Tech Used: HTML5 | Tailwind CSS | JavaScript | Firebase | Google AI (Gemini) | Chart.js | Node.js"
              ghLink="https://github.com/JYOTHIKAPRABHAKAR/NutriCoach.git"
              demoLink="https://nutricoach-1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muscleDenImg}
              isBlog={false}
              title="Pavan's Muscle Den AI – Personalized AI Fitness Planner"
              description="As a team, we built Pavan's Muscle Den AI, a cutting-edge AI-powered fitness platform that delivers hyper-personalized workout and nutrition plans tailored to each user's goals, body type, and lifestyle. Leveraging Google Gemini AI, we integrated advanced plan generation based on user inputs like age, weight, and fitness objectives. Our tech stack included Next.js, TypeScript, Tailwind CSS, Firebase, and Genkit, enabling a seamless user experience with real-time plan generation, secure authentication, and responsive design. Users can create fitness profiles, track progress, watch curated exercise videos, and regenerate plans dynamically. We ensured data safety through Firebase Auth and Firestore integration. We designed a clean, dark-themed UI with Radix UI components and added support for markdown formatting, YouTube embeds, and history tracking. Our project architecture supports scalability, and future-ready enhancements like mobile app versions, voice-guided workouts, social integrations, and fitness tracker APIs are on the roadmap. Tech Used: Next.js | TypeScript | Tailwind CSS | Firebase | Google Gemini AI | Genkit | Radix UI"
              ghLink="https://github.com/JYOTHIKAPRABHAKAR/Muscle-Den.git"
              demoLink="https://pavanfitnessapp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizMasterImg}
              isBlog={false}
              title="Quiz-Master – AI-Powered Dynamic Quiz Platform"
              description="I built Quiz-Master, an intelligent, full-stack quiz application that leverages Google AI to generate quizzes dynamically based on topics and difficulty. This platform personalizes learning by adjusting quiz levels and evaluating content complexity in real time. Using Next.js 15 (App Router), TypeScript, and Tailwind CSS, I designed a sleek, mobile-first UI powered by shadcn/ui and Radix UI. The backend integrates Firebase for secure authentication, real-time database operations, and hosting. I also used Genkit to manage AI flows, such as content evaluation and 15-level quiz difficulty generation. Users can log in securely, access personalized dashboards, take quizzes, track performance, and get AI-backed insights on their learning progress. Admins have dedicated access to manage content and evaluate question quality. This project demonstrates my ability to combine modern frontend architecture, real-time backend services, and AI-driven content generation into a powerful edtech tool. Tech Used: Next.js 15 | TypeScript | Tailwind CSS | Firebase | Google AI | Genkit | shadcn/ui | Radix UI"
              ghLink="https://github.com/JYOTHIKAPRABHAKAR/Quiz-Master.git"
              demoLink="http://stackmasterbypraveen.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
