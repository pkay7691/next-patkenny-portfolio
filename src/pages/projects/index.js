import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState({});

  const projectRef = useRef(null);

  useEffect(() => {
    setCurrentProject(projects[0]);
    let buttonTl = gsap.timeline({delay: 1});
   buttonTl.to('.project-button', {visibility: 'visible', autoAlpha: 1,  duration: 1, ease: "elastic", x:-50, stagger: 0.1})
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#projects-left-container",
      { autoAlpha: 0},
      { visibility: 'visible',  autoAlpha: 1, duration: 1 , delay: 1.5}
    );
  }, [currentProject]);

  const projectSelectHandler = (project) => {
    gsap.to('#projects-left-container', {autoAlpha: 0, })
    setCurrentProject(project);
  };

  
  const projects = [
    {
      name: "Dev Up Social",
      description:
        "Social media platform geared towards connecting people in software-development with projects and applications.  ",
      image: "https://via.placeholder.com/150",
      github: "www.github.com",
      video: "webdevsocial-demo.mp4",
      live: "www.live.com",
      technologies:
        "React, Node, Express, Postgres, Sequelize, Socket.io, AWS S3, Heroku, Material UI, CSS, HTML",
    },
    {
      name: "CatShopper",
      description: "This is a description of project 2",
      image: "https://via.placeholder.com/150",
      github: "www.github.com",
      video: "catshopper.mp4",
      live: "www.live.com",
      technologies: "React, Node,",
    },
    {
      name: "Chat-PK",
      description: "This is a description of project 3",
      image: "https://via.placeholder.com/150",
      github: "www.github.com",
      video: "chatpk-demo.mp4",
      live: "www.live.com",
      technologies: "React, Node,",
    },
  ];

  return (
    <div id="projects-container">
      <div ref={projectRef} id="projects-left-container"  className='left'>
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
          <div id="project-icons">
            <Image
            height='25'
            width='25'
            alt='github'
              id="project-github-icon"
              className="project-icons"
              src="/github-white.png"
            />
            <Image
            height='25'
            width='25'
            alt='photos'
              id="project-photos-icon"
              className="project-icons"
              src="/photos-white.png"
            />
            <Image
            height='25'
            width='25'
            alt='link'
              id="project-link-icon"
              className="project-icons"
              src="/link-white.png"
            />
          </div>
        </div>
        <div className="project-text-container">
          <div id="project-name" className="project-text-container">
            {currentProject.name}
          </div>
          <div id="project-description" className="project-text-container">
            {currentProject.description}
          </div>
          <div id="project-technologies" className="project-text-container">
            {currentProject.technologies}
          </div>
        </div>
      </div>
      <div  className='right' id="projects-right-container">
        <div id="project-list">
          {projects.map((project) => (
            <button                                               m
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
