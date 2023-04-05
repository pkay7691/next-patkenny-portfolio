import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { gsap } from "gsap";
import {useRouter} from 'next/router'

export default function Home() {

  const router = useRouter()





  useEffect(() => {

    console.log('timeline running')
    const tl1 = gsap.timeline({delay: .5});
    tl1.set(".home-text", { visibility: 'visible'})

    tl1.from(".home-text", {
      y: -100,
      autoAlpha: 0,
      duration: 1,
      ease: "elastic",
      stagger: 0.1,
    })

    tl1.from(
      "#paint-splatter",
      { x: 100, autoAlpha: 0, duration: 1, ease: "elastic", stagger: 0.1 },
      "-=1.5"
    );

    tl1.from(
      "#blackwhiteprof",
      { x: -100, autoAlpha: 0, duration: 1, ease: "elastic", stagger: 0.1 },
      "-=1.5"
    );
  }, []);



  return (
    <div className="home-container">
      <div className="left home-left-container">
        <div id="home-text-container">
          <div className="line-1 home-text">Hi, my name is </div>
          <div className="line-2 home-text">Pat Kenny.</div>
          <div className="line-3 home-text">Full Stack Developer</div>
          <div className="line-4 home-text">
            Chicago kid pursuing his passion for technology.
          </div>
          <div className="line-5 home-text">
            <Image
            alt="linkedin"
              height="36"
              width="36"
              className="hover"
              id="linkedin-white"
              src="/linkedin-white.png"
            />
            <Image
            alt='github'
              className="hover"
              height="36"
              width="36"
              id="github-white"
              src="/github-white.png"
            />
          </div>
          <div className="line-6 home-text">
            “You miss 100% of the shots you don’t take”
          </div>
          <div className="line-7 home-text">-Wayne Gretzky</div>
          <div onClick={(e) => clickHandler()} className="line-8 home-text">-Michael Scott</div>
        </div>
      </div>
      <div className="right home-right-container">
        <Image className='' id="paint-splatter"
        alt='paint-splatter'
        height='360'  width='360' src="/paint-splatter.png" />
        <Image priority='true' className='' id="blackwhiteprof" 
        alt='blackwhiteprof'
        height='360'  width='280'
        src="/blackwhiteprof.png" />
      </div>
    </div>
  );
}
