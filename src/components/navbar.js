import React from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const clickHandler = (route) => {
    if (router.route !== route) {
      gsap.to(".right", {
        visibility: "visible",
        duration: 0.2,
        autoAlpha: 0,
        x: 50,
      });
      gsap.to(".left", {
        visibility: "visible",
        duration: 0.2,
        autoAlpha: 0,
        x: -50,
        onComplete: () => {
          router.push(route);
        },
      });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-button-group">
        <button
          onClick={(e) => clickHandler("/")}
          className="grow nav-bar-button"
        >
          Home
        </button>

        <button
          onClick={(e) => clickHandler("/projects")}
          className="grow nav-bar-button"
        >
          Projects
        </button>

        <a href="/Patrick-Kenny-Resume-3-29.pdf" download>
          <button className="grow nav-bar-button">Resume</button>
        </a>

        <a href="mailto: patrickmkenny91@gmail.com">
          <button className="grow nav-bar-button">Contact</button>
        </a>
      </div>
    </div>
  );
}
