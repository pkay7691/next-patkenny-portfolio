import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState({});

  const projectRef = useRef(null);

  useEffect(() => {
    setCurrentProject(projects[0]);
    let buttonTl = gsap.timeline({ delay: 1 });
    buttonTl.to(".project-button", {
      visibility: "visible",
      autoAlpha: 1,
      duration: 1,
      ease: "elastic",
      x: -50,
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    gsap.set("#projects-left-container", { x: 50, autoAlpha: 0 });
    gsap.to("#projects-left-container", {
      visibility: "visible",
      x: 25,
      autoAlpha: 1,
      duration: 1,
      delay: 1.0,
    });
  }, [currentProject]);

  const projectSelectHandler = (project) => {
    gsap.set(".project-button", { scale: 1.0 });
    gsap.to(`#${project.id}`, { scale: 1.5, duration: 0.5, ease: "elastic" });
    gsap.to("#projects-left-container", {
      visibility: "visible",
      x: -50,
      autoAlpha: 0,
      onComplete: () => {
        setCurrentProject(project);
      },
    });
  };

  const projects = [
    {
      id: "devupsocial",
      name: "Dev Up Social",
      description:
        "Social networking platform geared towards connecting people in software-development with projects and applications.  ",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/developer-social-media/developer-social-media",
      video: "webdevsocial-demo.mp4",
      live: "www.live.com",
      technologies:
        "React, Node, Express, Postgres, Sequelize, Socket.io, Material UI, Formik, Passport, Google Auth, Sequelize, Axios, Tailwind, Webpack, Redux",
    },
    {
      id: "catshopper",
      name: "CatShopper",
      description: "This is a description of project 2",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/pkay7691/grace-shopper-project-pk",
      video: "catshopper.mp4",
      live: "www.live.com",
      technologies: "React, Node, Axios, Redux, Webpack, Express, Sequelize, Faker, Postgres ",
    },
    {
      id: "chatpk",
      name: "Chat-PK",
      description: "This is a description of project 3",
      image: "https://via.placeholder.com/150",
      github: "www.github.com",
      video: "chatpk-demo.mp4",
      live: "www.live.com",
      technologies: "React, Node, Express, OpenAI",
    },
  ];

  return (
    <div id="projects-container">
      <div ref={projectRef} id="projects-left-container" className="left">
        <div className="video-links-container">
          <video
            key={currentProject.video}
            className="project-video"
            controls
            autoPlay
            mute="true"
          >
            <source src={currentProject.video} type="video/mp4" />
          </video>
          <div id="project-icons"></div>
        </div>
        <div className="project-text-container">
          <div className='project-name-container'>
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
      <div className="right" id="projects-right-container">
        <div id="project-list">
          {projects.map((project) => (
            <button
              id={project.id}
              key={project.name}
              onClick={(e) => projectSelectHandler(project)}
              className="project-button"
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
