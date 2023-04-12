import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState();

  const projectRef = useRef(null);

  useEffect(() => {
    let buttonTl = gsap.timeline({ delay: 1.0 });
    buttonTl.to(".project-button", {
      visibility: "visible",
      autoAlpha: 1,
      duration: 1,
      ease: "elastic",
      y: 50,
      stagger: 0.1,
    });
  }, [currentProject]);

  useEffect(() => {
    gsap.to("#project-container", {
      visibility: "visible",
      autoAlpha: 1,
      duration: 1,
      delay: 1.0,
    });
  }, [currentProject]);

  const projectSelectHandler = (project) => {
    gsap.to(".project-button", {
      autoAlpha: 0,
      duration: 0.3,
      onComplete: () => {
        setCurrentProject(project);
      },
    });
  };

  const goBackHandler = () => {
    setCurrentProject(null);
    console.log("test");
    console.log(currentProject);
  };

  const projects = [
    {
      id: "devupsocial",
      name: "Dev Up Social",
      description:
        "Social networking platform geared towards connecting people in software-development with projects and applications.  ",
      image: "https://via.placeholder.com/150",
      github:
        "https://github.com/developer-social-media/developer-social-media",
      video: "webdevsocial-demo.mp4",
      image: "webdevsocial.jpg",
      backgroundlogo: "#ffffff",
      live: "www.live.com",
      technologies:
        "React, Node, Express, Postgres, Sequelize, Socket.io, Material UI, Formik, Passport, Google Auth, Sequelize, Axios, Tailwind, Webpack, Redux",
    },
    {
      id: "catshopper",
      name: "CatShopper",
      description:
        "CatShopper is an  ecommerce program that simulates online pet shopping experience.  Users can browse through a catalog of cats, add and remove items from their shopping cart and simulate checkout.",
      image: "catshopper.png",
      backgroundlogo: "#ffffff",
      github: "https://github.com/pkay7691/grace-shopper-project-pk",
      video: "catshopper.mp4",
      live: "www.live.com",
      technologies:
        "React, Node, Axios, Redux, Webpack, Express, Sequelize, Faker, Postgres ",
    },
    {
      id: "chatpk",
      name: "Chat-PK",
      description:
        "Developed a React app that simulates the Chat-GPT experience using OpenAI’s  API. The chatbot will respond to the user's messages based on the context of the conversation.",
      image: "chatpk.png",
      backgroundlogo: "#ffffff",
      github: "www.github.com",
      video: "chatpk-demo.mp4",
      live: "www.live.com",
      technologies: "React, Node, Express, OpenAI",
    },
  ];

  if (!currentProject)
    return (
      <div
        style={{
         
        }}
        id="project-list"
      >
        {projects.map((project) => (
          <square
            style={{
              backgroundColor: `${project.backgroundlogo}`,
            }}
            id={project.id}
            key={project.name}
            onClick={(e) => projectSelectHandler(project)}
            className="project-button"
          >
            <img
              className='project-logo'
              src={project.image}
              alt={project.name}
              style={{ width: "100%" }}
            />
          </square>
        ))}
      </div>
    );

  // project view
  return (
    <div ref={projectRef} id="project-container" className="left">
      <img onClick={goBackHandler} className="nav-bar-back-button" 
      src='go-back.png'/>
      <video
        key={currentProject.video}
        className="project-video"
        controls
        autoPlay
        mute="true"
      >
        <source src={currentProject.video} type="video/mp4" />
      </video>
      <div className="project-text-container">
        <div className="project-name-container">
          <div id="project-name" className="project-text-container">
            {currentProject.name}
          </div>
          <a href={currentProject.github} target="_blank" rel="noreferrer">
            <Image
              height="25"
              width="25"
              alt="github"
              id="project-github-icon"
              className="project-icons"
              src="/github-white.png"
            />
          </a>
        </div>
        <div id="project-description" className="project-text-container">
          {currentProject.description}
        </div>
        <div id="project-technologies" className="project-text-container">
          {currentProject.technologies}
        </div>
      </div>
    </div>
  );
}
